import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import VideoCard from '../components/VideoCard';
import AddModal from '../components/AddModal';
import type { Video } from '../types';

type Filter = 'all' | 'to-film' | 'to-edit' | 'to-publish' | 'published';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: '\u05D4\u05DB\u05DC' },
  { id: 'to-film', label: '\u05DC\u05E6\u05DC\u05DD' },
  { id: 'to-edit', label: '\u05DC\u05E2\u05E8\u05D5\u05DA' },
  { id: 'to-publish', label: '\u05DC\u05E4\u05E8\u05E1\u05DD' },
  { id: 'published', label: '\u05E4\u05D5\u05E8\u05E1\u05DD \u2705' },
];

function matchesFilter(video: Video, filter: Filter): boolean {
  const { script, film, edit, publish } = video.stages;
  switch (filter) {
    case 'all':
      return true;
    case 'to-film':
      return script && !film;
    case 'to-edit':
      return film && !edit;
    case 'to-publish':
      return edit && !publish;
    case 'published':
      return script && film && edit && publish;
  }
}

function getSummaryText(videos: Video[], filter: Filter): string {
  const count = videos.length;
  switch (filter) {
    case 'all':
      return `${count} \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D1\u05E6\u05D9\u05E0\u05D5\u05E8`;
    case 'to-film':
      return `${count} \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E6\u05D9\u05DC\u05D5\u05DD`;
    case 'to-edit':
      return `${count} \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4`;
    case 'to-publish':
      return `${count} \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E4\u05E8\u05E1\u05D5\u05DD`;
    case 'published':
      return `${count} \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05E4\u05D5\u05E8\u05E1\u05DE\u05D5`;
  }
}

export default function ContentView() {
  const { state } = useAppContext();
  const [filter, setFilter] = useState<Filter>('all');
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(
    () => state.videos.filter((v) => matchesFilter(v, filter)),
    [state.videos, filter]
  );

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">
          {'\uD83C\uDFAC'}{' '}
          {'\u05E6\u05D9\u05E0\u05D5\u05E8 \u05EA\u05D5\u05DB\u05DF'}
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center active:scale-90 transition-transform"
          aria-label="\u05D4\u05D5\u05E1\u05E3 \u05E1\u05E8\u05D8\u05D5\u05DF"
        >
          <Plus size={20} className="text-white" />
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
        {FILTERS.map((f) => (
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

      {/* Video list */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-brand-card rounded-xl p-6 text-center border border-brand-border"
            >
              <p className="text-brand-muted">
                {'\u05D0\u05D9\u05DF \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D1\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom summary */}
      <div className="text-center text-sm text-brand-muted pt-2">
        {getSummaryText(filtered, filter)}
      </div>

      {/* Add Modal */}
      <AddModal
        type="video"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
