import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronDown } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import TaskItem from '../components/TaskItem';
import AddModal from '../components/AddModal';
import type { TaskCategory, TaskStatus } from '../types';

type StatusFilter = 'all' | TaskStatus;

const STATUS_FILTERS: { id: StatusFilter; label: string }[] = [
  { id: 'all', label: '\u05D4\u05DB\u05DC' },
  { id: 'todo', label: '\u05DC\u05D1\u05D9\u05E6\u05D5\u05E2' },
  { id: 'in-progress', label: '\u05D1\u05EA\u05D4\u05DC\u05D9\u05DA' },
  { id: 'done', label: '\u05D4\u05D5\u05E9\u05DC\u05DD' },
];

const CATEGORY_META: Record<
  TaskCategory,
  { emoji: string; label: string }
> = {
  launch: { emoji: '\uD83D\uDE80', label: '\u05D4\u05E9\u05E7\u05D4' },
  marketing: { emoji: '\uD83D\uDCB0', label: '\u05E9\u05D9\u05D5\u05D5\u05E7' },
  technical: { emoji: '\uD83D\uDD27', label: '\u05D8\u05DB\u05E0\u05D9' },
};

const CATEGORIES: TaskCategory[] = ['launch', 'marketing', 'technical'];

export default function TasksView() {
  const { state, deleteTask } = useAppContext();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<TaskCategory, boolean>>({
    launch: false,
    marketing: false,
    technical: false,
  });

  const filteredTasks = useMemo(
    () =>
      statusFilter === 'all'
        ? state.tasks
        : state.tasks.filter((t) => t.status === statusFilter),
    [state.tasks, statusFilter]
  );

  const doneTasks = state.tasks.filter((t) => t.status === 'done').length;
  const totalTasks = state.tasks.length;

  const toggleCollapse = (cat: TaskCategory) => {
    setCollapsed((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const allFilteredEmpty = filteredTasks.length === 0;

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold">
            {'\u2705'}{' '}
            {'\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA'}
          </h2>
          <span className="text-xs text-brand-muted bg-brand-card px-2 py-0.5 rounded-full border border-brand-border">
            {doneTasks}/{totalTasks}{' '}
            {'\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5'}
          </span>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center active:scale-90 transition-transform"
          aria-label="\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E9\u05D9\u05DE\u05D4"
        >
          <Plus size={20} className="text-white" />
        </button>
      </div>

      {/* Status filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
        {STATUS_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setStatusFilter(f.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
              statusFilter === f.id
                ? 'bg-brand-accent text-white'
                : 'bg-brand-card text-brand-muted border border-brand-border'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Task sections by category */}
      {allFilteredEmpty ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-card rounded-xl p-6 text-center border border-brand-border"
        >
          <p className="text-brand-muted text-lg">
            {'\u2728'}{' '}
            {'\u05DB\u05DC \u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D4\u05D5\u05E9\u05DC\u05DE\u05D5!'}
          </p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {CATEGORIES.map((cat) => {
            const catTasks = filteredTasks.filter((t) => t.category === cat);
            if (catTasks.length === 0) return null;

            const meta = CATEGORY_META[cat];
            const isCollapsed = collapsed[cat];

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCollapse(cat)}
                  className="flex items-center justify-between w-full mb-2 group"
                >
                  <span className="text-sm font-bold flex items-center gap-1.5">
                    {meta.emoji} {meta.label}
                    <span className="text-xs text-brand-muted font-normal">
                      ({catTasks.length})
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-brand-muted transition-transform duration-200 ${
                      isCollapsed ? '-rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Tasks list */}
                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2">
                        <AnimatePresence>
                          {catTasks.map((task) => (
                            <motion.div
                              key={task.id}
                              layout
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 12, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <TaskItem
                                task={task}
                                onDelete={() => deleteTask(task.id)}
                              />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Add Modal */}
      <AddModal
        type="task"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
