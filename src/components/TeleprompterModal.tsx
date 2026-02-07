import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Pause,
  Edit3,
  Eye,
  FlipHorizontal,
  Copy,
  Check,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import type { VideoScripts } from '../types';

interface TeleprompterModalProps {
  isOpen: boolean;
  onClose: () => void;
  scripts: VideoScripts;
  onSave: (scripts: VideoScripts) => void;
  videoTitle: string;
}

type Lang = 'he' | 'en' | 'es';
type ScrollSpeed = 'slow' | 'medium' | 'fast';

const LANG_LABELS: Record<Lang, string> = {
  he: '\u05E2\u05D1\u05E8\u05D9\u05EA',
  en: 'English',
  es: 'Espa\u00F1ol',
};

const SPEED_VALUES: Record<ScrollSpeed, number> = {
  slow: 0.5,
  medium: 1.2,
  fast: 2.5,
};

const SPEED_LABELS: Record<ScrollSpeed, string> = {
  slow: '\u05D0\u05D8\u05D9',
  medium: '\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9',
  fast: '\u05DE\u05D4\u05D9\u05E8',
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

export default function TeleprompterModal({
  isOpen,
  onClose,
  scripts,
  onSave,
  videoTitle,
}: TeleprompterModalProps) {
  const [activeLang, setActiveLang] = useState<Lang>('he');
  const [localScripts, setLocalScripts] = useState<VideoScripts>({ ...scripts });
  const [editMode, setEditMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<ScrollSpeed>('medium');
  const [mirrored, setMirrored] = useState(false);
  const [copied, setCopied] = useState<'en' | 'es' | null>(null);
  const [hebrewEdited, setHebrewEdited] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalScripts({ ...scripts });
      setEditMode(false);
      setIsPlaying(false);
      setMirrored(false);
      setHebrewEdited(false);
      setHasUnsavedChanges(false);
      setCopied(null);
      setActiveLang('he');
    }
  }, [isOpen, scripts]);

  // Auto-scroll logic
  const scrollStep = useCallback(
    (timestamp: number) => {
      if (!scrollRef.current || !isPlaying) return;

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const px = SPEED_VALUES[speed] * (delta / 16);
      scrollRef.current.scrollTop += px;

      // Stop if reached bottom
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        setIsPlaying(false);
        return;
      }

      animFrameRef.current = requestAnimationFrame(scrollStep);
    },
    [isPlaying, speed],
  );

  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = 0;
      animFrameRef.current = requestAnimationFrame(scrollStep);
    } else if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, scrollStep]);

  // Pause auto-scroll on touch
  const handleTouchStart = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const handleScriptChange = (lang: Lang, value: string) => {
    setLocalScripts((prev) => ({ ...prev, [lang]: value }));
    setHasUnsavedChanges(true);

    if (lang === 'he') {
      setHebrewEdited(true);
      // Auto-populate EN/ES with prefix
      setLocalScripts((prev) => ({
        ...prev,
        he: value,
        en: `[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9] ${value}`,
        es: `[\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9] ${value}`,
      }));
    }
  };

  const handleCopyForTranslation = async (targetLang: 'en' | 'es') => {
    const prefix =
      targetLang === 'en' ? 'Translate to English:' : 'Translate to Spanish:';
    const textToCopy = `${prefix}\n\n${localScripts.he}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(targetLang);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback: do nothing silently
    }
  };

  const handleSave = () => {
    onSave(localScripts);
    setHasUnsavedChanges(false);
    setHebrewEdited(false);
  };

  const cycleSpeed = (direction: 'up' | 'down') => {
    const speeds: ScrollSpeed[] = ['slow', 'medium', 'fast'];
    const currentIndex = speeds.indexOf(speed);
    if (direction === 'up' && currentIndex < speeds.length - 1) {
      setSpeed(speeds[currentIndex + 1]);
    } else if (direction === 'down' && currentIndex > 0) {
      setSpeed(speeds[currentIndex - 1]);
    }
  };

  const currentText = localScripts[activeLang];
  const isRtl = activeLang === 'he';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-screen backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />

          {/* Content */}
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-brand-bg"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* ===== Top Bar ===== */}
            <div className="shrink-0 bg-brand-card border-b border-brand-border px-4 pt-safe">
              {/* Row 1: Title + Close */}
              <div className="flex items-center justify-between py-3">
                <h2
                  className="text-sm font-bold text-brand-text truncate max-w-[70%]"
                  dir={isRtl ? 'rtl' : 'ltr'}
                >
                  {videoTitle}
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-bg/50 text-brand-muted hover:text-brand-text transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Row 2: Language tabs */}
              <div className="flex gap-1 bg-brand-bg rounded-lg p-1 mb-3">
                {(['he', 'en', 'es'] as Lang[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setActiveLang(lang);
                      setIsPlaying(false);
                      if (scrollRef.current) scrollRef.current.scrollTop = 0;
                    }}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeLang === lang
                        ? 'bg-brand-accent text-white'
                        : 'text-brand-muted hover:text-brand-sub'
                    }`}
                  >
                    {LANG_LABELS[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* ===== Auto-translate banner ===== */}
            <AnimatePresence>
              {hebrewEdited && activeLang === 'he' && editMode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="shrink-0 overflow-hidden"
                >
                  <div className="bg-brand-accent/15 border-b border-brand-accent/30 px-4 py-3">
                    <p className="text-sm text-brand-accent font-medium mb-2" dir="rtl">
                      {'\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05DC\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D5\u05E1\u05E4\u05E8\u05D3\u05D9\u05EA'}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopyForTranslation('en')}
                        className="flex items-center gap-1.5 bg-brand-card border border-brand-border rounded-lg px-3 py-1.5 text-xs text-brand-sub hover:text-brand-text transition-colors active:scale-95"
                      >
                        {copied === 'en' ? (
                          <Check size={14} className="text-brand-success" />
                        ) : (
                          <Copy size={14} />
                        )}
                        <span>Copy for English</span>
                      </button>
                      <button
                        onClick={() => handleCopyForTranslation('es')}
                        className="flex items-center gap-1.5 bg-brand-card border border-brand-border rounded-lg px-3 py-1.5 text-xs text-brand-sub hover:text-brand-text transition-colors active:scale-95"
                      >
                        {copied === 'es' ? (
                          <Check size={14} className="text-brand-success" />
                        ) : (
                          <Copy size={14} />
                        )}
                        <span>Copy for Espa{'\u00F1'}ol</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ===== Main Content Area ===== */}
            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
            >
              {editMode ? (
                /* Edit mode: textarea */
                <textarea
                  value={currentText}
                  onChange={(e) => handleScriptChange(activeLang, e.target.value)}
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="w-full h-full bg-brand-bg text-brand-text text-lg leading-relaxed p-6 resize-none focus:outline-none scrollbar-thin"
                  placeholder={
                    isRtl
                      ? '\u05DB\u05EA\u05D1\u05D5 \u05D0\u05EA \u05D4\u05EA\u05E1\u05E8\u05D9\u05D8 \u05DB\u05D0\u05DF...'
                      : 'Write your script here...'
                  }
                  style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
                />
              ) : (
                /* Read mode: scrollable text */
                <div
                  ref={scrollRef}
                  onTouchStart={handleTouchStart}
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="h-full overflow-y-auto scrollbar-thin px-6 py-8"
                >
                  {/* Top padding so text starts mid-screen */}
                  <div className="h-[30vh]" />
                  <p
                    className="text-2xl leading-loose text-brand-text whitespace-pre-wrap"
                    style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
                  >
                    {currentText || (
                      <span className="text-brand-muted italic">
                        {isRtl
                          ? '\u05D0\u05D9\u05DF \u05EA\u05E1\u05E8\u05D9\u05D8 \u05E2\u05D3\u05D9\u05D9\u05DF. \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05E2\u05E8\u05D9\u05DB\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05DB\u05EA\u05D5\u05D1.'
                          : 'No script yet. Tap edit to write one.'}
                      </span>
                    )}
                  </p>
                  {/* Bottom padding so text can scroll fully */}
                  <div className="h-[60vh]" />
                </div>
              )}
            </div>

            {/* ===== Bottom Controls ===== */}
            <div className="shrink-0 bg-brand-card border-t border-brand-border px-4 py-3 pb-safe">
              {/* Row 1: Scroll controls (only in read mode) */}
              {!editMode && (
                <div className="flex items-center justify-between mb-3">
                  {/* Play / Pause */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 bg-brand-accent text-white font-medium px-4 py-2 rounded-xl active:scale-95 transition-transform"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    <span className="text-sm">
                      {isPlaying ? '\u05E2\u05E6\u05D5\u05E8' : '\u05D4\u05E4\u05E2\u05DC'}
                    </span>
                  </button>

                  {/* Speed control */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-brand-muted">
                      {'\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA:'}
                    </span>
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => cycleSpeed('up')}
                        className="text-brand-muted hover:text-brand-text transition-colors p-0.5"
                        aria-label="Increase speed"
                      >
                        <ChevronUp size={16} />
                      </button>
                      <span className="text-sm font-medium text-brand-accent min-w-[50px] text-center">
                        {SPEED_LABELS[speed]}
                      </span>
                      <button
                        onClick={() => cycleSpeed('down')}
                        className="text-brand-muted hover:text-brand-text transition-colors p-0.5"
                        aria-label="Decrease speed"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Mirror toggle */}
                  <button
                    onClick={() => setMirrored(!mirrored)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors active:scale-95 ${
                      mirrored
                        ? 'bg-brand-accent text-white'
                        : 'bg-brand-bg border border-brand-border text-brand-muted hover:text-brand-text'
                    }`}
                  >
                    <FlipHorizontal size={16} />
                    <span className="hidden sm:inline">
                      {'\u05DE\u05E8\u05D0\u05D4'}
                    </span>
                  </button>
                </div>
              )}

              {/* Row 2: Mode toggles + Save */}
              <div className="flex items-center gap-2">
                {/* Edit / Read toggle */}
                <button
                  onClick={() => {
                    setEditMode(!editMode);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors active:scale-95 ${
                    editMode
                      ? 'bg-brand-warning/20 text-brand-warning border border-brand-warning/30'
                      : 'bg-brand-bg border border-brand-border text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {editMode ? <Eye size={16} /> : <Edit3 size={16} />}
                  <span>{editMode ? '\u05E7\u05E8\u05D9\u05D0\u05D4' : '\u05E2\u05E8\u05D9\u05DB\u05D4'}</span>
                </button>

                <div className="flex-1" />

                {/* Save button */}
                <AnimatePresence>
                  {hasUnsavedChanges && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={handleSave}
                      className="flex items-center gap-1.5 bg-brand-success text-white font-semibold px-5 py-2.5 rounded-xl active:scale-95 transition-transform"
                    >
                      <Check size={16} />
                      <span className="text-sm">{'\u05E9\u05DE\u05D5\u05E8'}</span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
