import { motion } from 'framer-motion';
import { Circle, Loader2, CheckCircle2, X } from 'lucide-react';
import type { Task } from '../types';
import { useAppContext } from '../store/AppContext';

interface TaskItemProps {
  task: Task;
  onDelete?: () => void;
}

const priorityColors: Record<Task['priority'], string> = {
  high: 'bg-brand-danger',
  medium: 'bg-brand-warning',
  low: 'bg-brand-muted',
};

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  const { cycleTaskStatus } = useAppContext();
  const isDone = task.status === 'done';

  const renderStatusIcon = () => {
    switch (task.status) {
      case 'todo':
        return <Circle size={22} className="text-brand-muted" />;
      case 'in-progress':
        return (
          <Loader2
            size={22}
            className="text-brand-warning animate-spin"
            style={{ animationDuration: '2s' }}
          />
        );
      case 'done':
        return <CheckCircle2 size={22} className="text-brand-success" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 py-3 px-1 group"
    >
      {/* Status toggle */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => cycleTaskStatus(task.id)}
        className="shrink-0"
        aria-label={`סטטוס: ${task.status}`}
      >
        {renderStatusIcon()}
      </motion.button>

      {/* Title */}
      <span
        className={`flex-1 text-sm leading-snug transition-all ${
          isDone
            ? 'line-through text-brand-muted'
            : 'text-brand-text'
        }`}
      >
        {task.title}
      </span>

      {/* Priority dot */}
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${priorityColors[task.priority]}`}
        title={task.priority}
      />

      {/* Delete button */}
      {onDelete && (
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={onDelete}
          className="shrink-0 p-1 rounded text-brand-muted opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:text-brand-danger transition-all"
          aria-label="מחק משימה"
        >
          <X size={16} />
        </motion.button>
      )}
    </motion.div>
  );
}
