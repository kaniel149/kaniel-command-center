import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle, Loader2, CheckCircle2, X, ChevronDown } from 'lucide-react';
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

const priorityLabels: Record<Task['priority'], string> = {
  high: 'דחוף',
  medium: 'רגיל',
  low: 'נמוך',
};

/**
 * Parse multi-line notes into styled sections.
 * Handles:
 *   - Lines ending with ":" → section header
 *   - Lines starting with number + "." → numbered step
 *   - Lines starting with "- " or "• " → bullet point
 *   - Lines starting with "⚠️" → warning box
 *   - Lines starting with "טיפ:" or "Tip:" → tip box
 *   - Diagram/code blocks (lines with mostly symbols) → monospace
 *   - Empty lines → spacer
 */
function NoteRenderer({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const trimmed = line.trim();

        // Empty line → spacer
        if (!trimmed) {
          return <div key={i} className="h-1.5" />;
        }

        // Warning lines
        if (trimmed.startsWith('⚠️')) {
          return (
            <div
              key={i}
              className="bg-brand-warning/10 border border-brand-warning/30 rounded-lg px-3 py-2 text-xs text-brand-warning leading-relaxed"
            >
              {trimmed}
            </div>
          );
        }

        // Tip lines
        if (
          trimmed.startsWith('טיפ:') ||
          trimmed.startsWith('טיפ ') ||
          trimmed.startsWith('Tip:') ||
          trimmed.startsWith('Tips:')
        ) {
          return (
            <div
              key={i}
              className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg px-3 py-2 text-xs text-brand-accent leading-relaxed"
            >
              💡 {trimmed}
            </div>
          );
        }

        // Section headers (lines that end with ":" and are short enough)
        if (trimmed.endsWith(':') && trimmed.length < 60 && !trimmed.match(/^\d/)) {
          return (
            <h4
              key={i}
              className="text-xs font-bold text-brand-text pt-1.5"
            >
              {trimmed}
            </h4>
          );
        }

        // Numbered steps
        if (/^\d+[\.\)]/.test(trimmed)) {
          const match = trimmed.match(/^(\d+[\.\)])\s*(.*)/);
          if (match) {
            return (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-brand-accent font-bold text-xs shrink-0 w-5 text-left">
                  {match[1]}
                </span>
                <span className="text-xs text-brand-sub leading-relaxed flex-1">
                  {match[2]}
                </span>
              </div>
            );
          }
        }

        // Bullet points
        if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
          return (
            <div key={i} className="flex gap-2 items-start pr-1">
              <span className="text-brand-accent text-xs shrink-0">•</span>
              <span className="text-xs text-brand-sub leading-relaxed flex-1">
                {trimmed.slice(2)}
              </span>
            </div>
          );
        }

        // Diagram-like lines (arrows, boxes, layout diagrams)
        if (
          trimmed.includes('→') ||
          trimmed.includes('←') ||
          trimmed.match(/^[🪟📱🧑🎤🖥️💻]/) ||
          trimmed.startsWith('Setup diagram')
        ) {
          return (
            <div
              key={i}
              className="bg-brand-bg rounded-lg px-3 py-1 text-xs text-brand-muted font-mono leading-relaxed"
            >
              {trimmed}
            </div>
          );
        }

        // Time estimates
        if (trimmed.startsWith('⏱️')) {
          return (
            <div
              key={i}
              className="bg-brand-success/10 border border-brand-success/30 rounded-lg px-3 py-1.5 text-xs text-brand-success leading-relaxed"
            >
              {trimmed}
            </div>
          );
        }

        // Regular text
        return (
          <p key={i} className="text-xs text-brand-sub leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  const { cycleTaskStatus } = useAppContext();
  const [expanded, setExpanded] = useState(false);
  const isDone = task.status === 'done';
  const hasNotes = task.notes && task.notes.trim().length > 0;

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
      className={`bg-brand-card rounded-xl border transition-colors ${
        expanded
          ? 'border-brand-accent/40'
          : 'border-brand-border'
      }`}
    >
      {/* Main row */}
      <div className="flex items-center gap-3 py-3 px-3 group">
        {/* Status toggle */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {
            e.stopPropagation();
            cycleTaskStatus(task.id);
          }}
          className="shrink-0"
          aria-label={`סטטוס: ${task.status}`}
        >
          {renderStatusIcon()}
        </motion.button>

        {/* Title - clickable to expand */}
        <button
          onClick={() => hasNotes && setExpanded(!expanded)}
          className={`flex-1 text-right text-sm leading-snug transition-all ${
            isDone
              ? 'line-through text-brand-muted'
              : 'text-brand-text'
          } ${hasNotes ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {task.title}
        </button>

        {/* Expand indicator */}
        {hasNotes && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="shrink-0 p-1"
            aria-label={expanded ? 'סגור פרטים' : 'פתח פרטים'}
          >
            <ChevronDown
              size={16}
              className={`text-brand-muted transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </motion.button>
        )}

        {/* Priority badge */}
        <span
          className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-medium text-white ${
            priorityColors[task.priority]
          }`}
        >
          {priorityLabels[task.priority]}
        </span>

        {/* Delete button */}
        {onDelete && (
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="shrink-0 p-1 rounded text-brand-muted opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:text-brand-danger transition-all"
            aria-label="מחק משימה"
          >
            <X size={16} />
          </motion.button>
        )}
      </div>

      {/* Expanded notes section */}
      <AnimatePresence>
        {expanded && hasNotes && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-brand-border">
              <NoteRenderer text={task.notes} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
