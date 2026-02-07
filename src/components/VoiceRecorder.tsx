import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, Play, Pause, Save, Trash2 } from 'lucide-react';

interface VoiceRecorderProps {
  onSave: (audioUrl: string) => void;
  onCancel: () => void;
}

type RecorderState = 'idle' | 'recording' | 'recorded';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function VoiceRecorder({ onSave, onCancel }: VoiceRecorderProps) {
  const [recorderState, setRecorderState] = useState<RecorderState>('idle');
  const [elapsed, setElapsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobRef = useRef<Blob | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioBlobUrl) URL.revokeObjectURL(audioBlobUrl);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        // Stop all tracks
        stream.getTracks().forEach((t) => t.stop());

        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        blobRef.current = blob;
        const url = URL.createObjectURL(blob);
        setAudioBlobUrl(url);
        setRecorderState('recorded');
      };

      mediaRecorder.start(200);
      setRecorderState('recording');
      setElapsed(0);

      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.error('Microphone access denied', err);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const togglePlayback = useCallback(() => {
    if (!audioBlobUrl) return;

    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    const audio = new Audio(audioBlobUrl);
    audioRef.current = audio;
    audio.play();
    setIsPlaying(true);

    audio.onended = () => {
      setIsPlaying(false);
    };
  }, [audioBlobUrl, isPlaying]);

  const handleSave = useCallback(() => {
    if (!blobRef.current) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      onSave(base64);
    };
    reader.readAsDataURL(blobRef.current);
  }, [onSave]);

  const handleDelete = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (audioBlobUrl) URL.revokeObjectURL(audioBlobUrl);
    setAudioBlobUrl(null);
    blobRef.current = null;
    setIsPlaying(false);
    setElapsed(0);
    setRecorderState('idle');
    onCancel();
  }, [audioBlobUrl, onCancel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="bg-brand-card rounded-xl border border-brand-border p-5 mb-4"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Timer */}
        <motion.p
          key={elapsed}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="text-2xl font-mono text-brand-text tabular-nums"
        >
          {formatTime(elapsed)}
        </motion.p>

        {/* Record / Stop button */}
        <AnimatePresence mode="wait">
          {recorderState === 'idle' && (
            <motion.button
              key="record"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={startRecording}
              className="w-20 h-20 rounded-full bg-brand-danger flex items-center justify-center active:scale-90 transition-transform shadow-lg shadow-brand-danger/30"
              aria-label="התחל הקלטה"
            >
              <Mic size={32} className="text-white" />
            </motion.button>
          )}

          {recorderState === 'recording' && (
            <motion.div
              key="recording"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative"
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-danger/30"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <button
                onClick={stopRecording}
                className="relative w-20 h-20 rounded-full bg-brand-danger flex items-center justify-center active:scale-90 transition-transform shadow-lg shadow-brand-danger/30"
                aria-label="עצור הקלטה"
              >
                <Square size={28} className="text-white" fill="white" />
              </button>
            </motion.div>
          )}

          {recorderState === 'recorded' && (
            <motion.div
              key="recorded"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-4"
            >
              {/* Play / Pause */}
              <button
                onClick={togglePlayback}
                className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center active:scale-90 transition-transform"
                aria-label={isPlaying ? 'השהה' : 'נגן'}
              >
                {isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white mr-[-2px]" />
                )}
              </button>

              {/* Save */}
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-brand-success/20 text-brand-success px-4 py-2.5 rounded-xl text-sm font-semibold active:scale-95 transition-transform border border-brand-success/30"
              >
                <Save size={16} />
                שמור
              </button>

              {/* Delete */}
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 bg-brand-danger/20 text-brand-danger px-4 py-2.5 rounded-xl text-sm font-semibold active:scale-95 transition-transform border border-brand-danger/30"
              >
                <Trash2 size={16} />
                מחק
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint text */}
        {recorderState === 'idle' && (
          <p className="text-xs text-brand-muted">לחץ להקלטה קולית</p>
        )}
        {recorderState === 'recording' && (
          <p className="text-xs text-brand-danger animate-pulse">מקליט...</p>
        )}
      </div>
    </motion.div>
  );
}
