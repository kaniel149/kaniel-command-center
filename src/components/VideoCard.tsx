import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Video } from '../types';
import { useAppContext } from '../store/AppContext';

interface VideoCardProps {
  video: Video;
}

const stages: { key: keyof Video['stages']; label: string }[] = [
  { key: 'script', label: 'תסריט' },
  { key: 'film', label: 'צילום' },
  { key: 'edit', label: 'עריכה' },
  { key: 'publish', label: 'פרסום' },
];

export default function VideoCard({ video }: VideoCardProps) {
  const { toggleVideoStage } = useAppContext();
  const [expanded, setExpanded] = useState(false);

  const completedCount = Object.values(video.stages).filter(Boolean).length;

  return (
    <motion.div
      layout
      className="bg-brand-card rounded-xl p-4 border border-brand-border"
    >
      {/* Top row: number badge + title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-sm font-bold shrink-0">
          {video.number}
        </div>
        <h3 className="font-bold text-sm text-brand-text leading-tight">
          {video.titleHe}
        </h3>
        <span className="mr-auto text-xs text-brand-muted">
          {completedCount}/4
        </span>
      </div>

      {/* Pipeline dots */}
      <div className="flex items-center justify-between px-2">
        {stages.map((stage, index) => {
          const isDone = video.stages[stage.key];

          return (
            <div key={stage.key} className="flex items-center flex-1 last:flex-none">
              {/* Dot + label */}
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

              {/* Connecting line */}
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

      {/* Notes toggle */}
      {video.notes && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-3 text-xs text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ChevronDown
              size={14}
              className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
            <span>הערות</span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {video.notes}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}
