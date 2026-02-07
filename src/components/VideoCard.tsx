import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Camera } from 'lucide-react';
import type { Video } from '../types';
import { useAppContext } from '../store/AppContext';
import TeleprompterModal from './TeleprompterModal';

interface VideoCardProps {
  video: Video;
}

const stages: { key: keyof Video['stages']; label: string }[] = [
  { key: 'script', label: 'תסריט' },
  { key: 'film', label: 'צילום' },
  { key: 'edit', label: 'עריכה' },
  { key: 'publish', label: 'פרסום' },
];

/**
 * Parse filming guide into styled sections (same as TaskItem NoteRenderer).
 */
function GuideRenderer({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1.5" />;
        if (trimmed.startsWith('⚠️'))
          return (
            <div key={i} className="bg-brand-warning/10 border border-brand-warning/30 rounded-lg px-3 py-2 text-xs text-brand-warning leading-relaxed">
              {trimmed}
            </div>
          );
        if (trimmed.startsWith('💡') || trimmed.startsWith('טיפ:') || trimmed.startsWith('Tip:'))
          return (
            <div key={i} className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg px-3 py-2 text-xs text-brand-accent leading-relaxed">
              {trimmed.startsWith('💡') ? trimmed : `💡 ${trimmed}`}
            </div>
          );
        if (trimmed.startsWith('⏱️'))
          return (
            <div key={i} className="bg-brand-success/10 border border-brand-success/30 rounded-lg px-3 py-1.5 text-xs text-brand-success leading-relaxed">
              {trimmed}
            </div>
          );
        if (trimmed.endsWith(':') && trimmed.length < 60 && !trimmed.match(/^\d/))
          return <h4 key={i} className="text-xs font-bold text-brand-text pt-1.5">{trimmed}</h4>;
        if (/^\d+[\.\)]/.test(trimmed)) {
          const match = trimmed.match(/^(\d+[\.\)])\s*(.*)/);
          if (match)
            return (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-brand-accent font-bold text-xs shrink-0 w-5 text-left">{match[1]}</span>
                <span className="text-xs text-brand-sub leading-relaxed flex-1">{match[2]}</span>
              </div>
            );
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('• '))
          return (
            <div key={i} className="flex gap-2 items-start pr-1">
              <span className="text-brand-accent text-xs shrink-0">•</span>
              <span className="text-xs text-brand-sub leading-relaxed flex-1">{trimmed.slice(2)}</span>
            </div>
          );
        if (trimmed.includes('→') || trimmed.includes('←') || trimmed.match(/^[🪟📱🧑🎤🖥️💻📐]/))
          return (
            <div key={i} className="bg-brand-bg rounded-lg px-3 py-1 text-xs text-brand-muted font-mono leading-relaxed">
              {trimmed}
            </div>
          );
        return <p key={i} className="text-xs text-brand-sub leading-relaxed">{trimmed}</p>;
      })}
    </div>
  );
}

export default function VideoCard({ video }: VideoCardProps) {
  const { toggleVideoStage, updateVideoScript } = useAppContext();
  const [showGuide, setShowGuide] = useState(false);
  const [showTeleprompter, setShowTeleprompter] = useState(false);

  const completedCount = Object.values(video.stages).filter(Boolean).length;
  const hasGuide = video.filmingGuide && video.filmingGuide.trim().length > 0;
  const hasScript = video.scripts && video.scripts.he.trim().length > 0;

  return (
    <>
      <motion.div
        layout
        className="bg-brand-card rounded-xl p-4 border border-brand-border"
      >
        {/* Top row: number badge + title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-sm font-bold shrink-0">
            {video.number}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm text-brand-text leading-tight truncate">
              {video.titleHe}
            </h3>
            <p className="text-[10px] text-brand-muted truncate">{video.title}</p>
          </div>
          <span className="text-xs text-brand-muted shrink-0">
            {completedCount}/4
          </span>
        </div>

        {/* Pipeline dots */}
        <div className="flex items-center justify-between px-2">
          {stages.map((stage, index) => {
            const isDone = video.stages[stage.key];
            return (
              <div key={stage.key} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1.5">
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => toggleVideoStage(video.id, stage.key)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isDone
                        ? 'bg-brand-success border-brand-success'
                        : 'bg-transparent border-brand-border'
                    }`}
                    aria-label={`${stage.label} - ${isDone ? 'הושלם' : 'לא הושלם'}`}
                  >
                    {isDone && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3.5 h-3.5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </motion.svg>
                    )}
                  </motion.button>
                  <span className="text-[10px] text-brand-muted">{stage.label}</span>
                </div>
                {index < stages.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-1 rounded-full transition-colors mt-[-18px] ${
                      isDone && video.stages[stages[index + 1].key]
                        ? 'bg-brand-success'
                        : isDone
                        ? 'bg-brand-success/40'
                        : 'bg-brand-border'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-3">
          {/* Teleprompter button */}
          {hasScript && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTeleprompter(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-xs font-medium transition-colors"
            >
              <BookOpen size={14} />
              <span>טלפרומפטר</span>
            </motion.button>
          )}

          {/* Filming guide toggle */}
          {hasGuide && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGuide(!showGuide)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-xs font-medium transition-colors ${
                showGuide
                  ? 'bg-brand-warning/15 border-brand-warning/30 text-brand-warning'
                  : 'bg-brand-card border-brand-border text-brand-muted'
              }`}
            >
              <Camera size={14} />
              <span>מדריך צילום</span>
              <ChevronDown
                size={12}
                className={`transition-transform ${showGuide ? 'rotate-180' : ''}`}
              />
            </motion.button>
          )}
        </div>

        {/* Filming guide content */}
        <AnimatePresence>
          {showGuide && hasGuide && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-brand-border">
                <GuideRenderer text={video.filmingGuide} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notes toggle (if there are notes beyond the guide) */}
        {video.notes && (
          <p className="text-[10px] text-brand-muted mt-2 leading-relaxed line-clamp-2">
            {video.notes}
          </p>
        )}
      </motion.div>

      {/* Teleprompter Modal */}
      <TeleprompterModal
        isOpen={showTeleprompter}
        onClose={() => setShowTeleprompter(false)}
        scripts={video.scripts}
        onSave={(scripts) => updateVideoScript(video.id, scripts)}
        videoTitle={video.titleHe}
      />
    </>
  );
}
