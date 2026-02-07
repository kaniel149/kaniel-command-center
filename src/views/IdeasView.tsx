import { useState, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Mic, Sparkles, Play, Pause } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import AddModal from '../components/AddModal';
import VoiceRecorder from '../components/VoiceRecorder';
import BrainstormModal from '../components/BrainstormModal';
import type { ContentPillar } from '../types';

type PillarFilter = 'all' | ContentPillar;

const PILLAR_FILTERS: { id: PillarFilter; label: string }[] = [
  { id: 'all', label: '\u05D4\u05DB\u05DC' },
  { id: 'ai-first', label: '\uD83E\uDD16 AI First' },
  { id: 'systems', label: '\u2699\uFE0F \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA' },
  {
    id: 'survival-abundance',
    label: '\uD83D\uDCC8 \u05D4\u05D9\u05E9\u05E8\u05D3\u05D5\u05EA\u2192\u05E9\u05E4\u05E2',
  },
  { id: 'lifestyle', label: '\uD83C\uDF34 Lifestyle' },
  { id: 'personal', label: '\uD83D\uDCCD \u05D0\u05D9\u05E9\u05D9' },
];

const PILLAR_EMOJI: Record<ContentPillar, string> = {
  'ai-first': '\uD83E\uDD16',
  systems: '\u2699\uFE0F',
  'survival-abundance': '\uD83D\uDCC8',
  lifestyle: '\uD83C\uDF34',
  personal: '\uD83D\uDCCD',
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `\u05DC\u05E4\u05E0\u05D9 ${minutes} \u05D3\u05E7\u05D5\u05EA`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `\u05DC\u05E4\u05E0\u05D9 ${hours} \u05E9\u05E2\u05D5\u05EA`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `\u05DC\u05E4\u05E0\u05D9 ${days} \u05D9\u05DE\u05D9\u05DD`;
  return new Date(dateStr).toLocaleDateString('he-IL');
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function IdeasView() {
  const { state, addIdea, deleteIdea } = useAppContext();
  const [filter, setFilter] = useState<PillarFilter>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false);
  const [brainstormOpen, setBrainstormOpen] = useState(false);
  const [playingIdeaId, setPlayingIdeaId] = useState<string | null>(null);

  const audioElRef = useRef<HTMLAudioElement | null>(null);

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? state.ideas
        : state.ideas.filter((i) => i.pillar === filter),
    [state.ideas, filter]
  );

  const handleVoiceSave = useCallback(
    (audioUrl: string) => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('he-IL', {
        hour: '2-digit',
        minute: '2-digit',
      });
      addIdea({
        text: `\uD83C\uDF99\uFE0F \u05D4\u05E7\u05DC\u05D8\u05D4 \u05E7\u05D5\u05DC\u05D9\u05EA ${timeStr}`,
        pillar: 'personal',
        audioUrl,
      });
      setShowVoiceRecorder(false);
    },
    [addIdea]
  );

  const handleBrainstormAdd = useCallback(
    (text: string, pillar: ContentPillar) => {
      addIdea({ text, pillar });
    },
    [addIdea]
  );

  const toggleIdeaAudio = useCallback(
    (ideaId: string, audioUrl: string) => {
      // If already playing this idea, pause it
      if (playingIdeaId === ideaId && audioElRef.current) {
        audioElRef.current.pause();
        audioElRef.current = null;
        setPlayingIdeaId(null);
        return;
      }

      // Stop any currently playing audio
      if (audioElRef.current) {
        audioElRef.current.pause();
        audioElRef.current = null;
      }

      const audio = new Audio(audioUrl);
      audioElRef.current = audio;
      setPlayingIdeaId(ideaId);
      audio.play();
      audio.onended = () => {
        setPlayingIdeaId(null);
        audioElRef.current = null;
      };
    },
    [playingIdeaId]
  );

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold">
            {'\uD83D\uDCA1'}{' '}
            {'\u05D1\u05E0\u05E7 \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA'}
          </h2>
          <span className="text-xs text-brand-muted bg-brand-card px-2 py-0.5 rounded-full border border-brand-border">
            {state.ideas.length}{' '}
            {'\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Brainstorm button */}
          <button
            onClick={() => setBrainstormOpen(true)}
            className="w-9 h-9 rounded-full bg-brand-card border border-brand-border flex items-center justify-center active:scale-90 transition-transform"
            aria-label="\u05E1\u05D9\u05E2\u05D5\u05E8 \u05DE\u05D5\u05D7\u05D5\u05EA"
          >
            <Sparkles size={18} className="text-brand-accent" />
          </button>
          {/* Voice record button */}
          <button
            onClick={() => setShowVoiceRecorder((prev) => !prev)}
            className={`w-9 h-9 rounded-full flex items-center justify-center active:scale-90 transition-transform ${
              showVoiceRecorder
                ? 'bg-brand-danger'
                : 'bg-brand-card border border-brand-border'
            }`}
            aria-label="\u05D4\u05E7\u05DC\u05D8\u05D4 \u05E7\u05D5\u05DC\u05D9\u05EA"
          >
            <Mic
              size={18}
              className={showVoiceRecorder ? 'text-white' : 'text-brand-danger'}
            />
          </button>
          {/* Add text idea button */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center active:scale-90 transition-transform"
            aria-label="\u05D4\u05D5\u05E1\u05E3 \u05E8\u05E2\u05D9\u05D5\u05DF"
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Voice Recorder (inline, above ideas list) */}
      <AnimatePresence>
        {showVoiceRecorder && (
          <VoiceRecorder
            onSave={handleVoiceSave}
            onCancel={() => setShowVoiceRecorder(false)}
          />
        )}
      </AnimatePresence>

      {/* Pillar filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
        {PILLAR_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
              filter === f.id
                ? 'bg-brand-accent text-white'
                : 'bg-brand-card text-brand-muted border border-brand-border'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Ideas grid */}
      {filtered.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 gap-3"
          variants={container}
          initial="hidden"
          animate="show"
          key={filter}
        >
          <AnimatePresence>
            {filtered.map((idea) => (
              <motion.div
                key={idea.id}
                variants={cardVariant}
                layout
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="bg-brand-card rounded-xl p-4 border border-brand-border relative group"
              >
                {/* Pillar badge */}
                <span className="absolute top-3 left-3 text-lg">
                  {PILLAR_EMOJI[idea.pillar]}
                </span>

                {/* Delete button */}
                <button
                  onClick={() => deleteIdea(idea.id)}
                  className="absolute top-3 left-10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity p-1 rounded-md hover:bg-brand-border text-brand-muted hover:text-brand-danger"
                  aria-label="\u05DE\u05D7\u05E7 \u05E8\u05E2\u05D9\u05D5\u05DF"
                >
                  <X size={14} />
                </button>

                {/* Idea text */}
                <p className="text-brand-text font-medium pr-0 pl-10 leading-relaxed">
                  {idea.text}
                </p>

                {/* Audio playback button */}
                {idea.audioUrl && (
                  <button
                    onClick={() => toggleIdeaAudio(idea.id, idea.audioUrl!)}
                    className={`mt-2 mr-0 ml-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      playingIdeaId === idea.id
                        ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                        : 'bg-brand-bg text-brand-muted border border-brand-border hover:border-brand-accent/40'
                    }`}
                    aria-label={
                      playingIdeaId === idea.id
                        ? '\u05D4\u05E9\u05D4\u05D4'
                        : '\u05E0\u05D2\u05DF \u05D4\u05E7\u05DC\u05D8\u05D4'
                    }
                  >
                    {playingIdeaId === idea.id ? (
                      <Pause size={12} />
                    ) : (
                      <Play size={12} />
                    )}
                    {playingIdeaId === idea.id
                      ? '\u05DE\u05E0\u05D2\u05DF...'
                      : '\u05E0\u05D2\u05DF \u05D4\u05E7\u05DC\u05D8\u05D4'}
                  </button>
                )}

                {/* Date */}
                <p className="text-xs text-brand-muted mt-2 pr-0 pl-10">
                  {timeAgo(idea.createdAt)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-card rounded-xl p-6 text-center border border-brand-border"
        >
          <p className="text-brand-muted">
            {'\uD83E\uDDE0'}{' '}
            {'\u05D0\u05D9\u05DF \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05E2\u05D3\u05D9\u05D9\u05DF. \u05D4\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E8\u05E2\u05D9\u05D5\u05DF \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF!'}
          </p>
        </motion.div>
      )}

      {/* Add Modal */}
      <AddModal
        type="idea"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Brainstorm Modal */}
      <BrainstormModal
        isOpen={brainstormOpen}
        onClose={() => setBrainstormOpen(false)}
        onAddIdea={handleBrainstormAdd}
      />
    </div>
  );
}
