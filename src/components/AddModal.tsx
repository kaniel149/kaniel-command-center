import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TaskCategory, TaskPriority, ContentPillar } from '../types';
import { useAppContext } from '../store/AppContext';

interface AddModalProps {
  type: 'video' | 'task' | 'idea';
  isOpen: boolean;
  onClose: () => void;
}

const categoryOptions: { value: TaskCategory; label: string }[] = [
  { value: 'launch', label: 'השקה' },
  { value: 'marketing', label: 'שיווק' },
  { value: 'technical', label: 'טכני' },
];

const priorityOptions: { value: TaskPriority; label: string; color: string }[] = [
  { value: 'high', label: 'גבוה', color: 'border-brand-danger text-brand-danger' },
  { value: 'medium', label: 'בינוני', color: 'border-brand-warning text-brand-warning' },
  { value: 'low', label: 'נמוך', color: 'border-brand-muted text-brand-muted' },
];

const pillarOptions: { value: ContentPillar; label: string }[] = [
  { value: 'ai-first', label: 'AI First' },
  { value: 'systems', label: 'מערכות' },
  { value: 'survival-abundance', label: 'הישרדות→שפע' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'personal', label: 'אישי' },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheetVariants = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
  exit: { y: '100%', transition: { duration: 0.2 } },
};

export default function AddModal({ type, isOpen, onClose }: AddModalProps) {
  const { addVideo, addTask, addIdea } = useAppContext();

  // Video fields
  const [videoTitle, setVideoTitle] = useState('');
  const [videoNumber, setVideoNumber] = useState('');

  // Task fields
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState<TaskCategory>('launch');
  const [taskPriority, setTaskPriority] = useState<TaskPriority>('medium');
  const [taskNotes, setTaskNotes] = useState('');

  // Idea fields
  const [ideaText, setIdeaText] = useState('');
  const [ideaPillar, setIdeaPillar] = useState<ContentPillar>('ai-first');

  const resetFields = () => {
    setVideoTitle('');
    setVideoNumber('');
    setTaskTitle('');
    setTaskCategory('launch');
    setTaskPriority('medium');
    setTaskNotes('');
    setIdeaText('');
    setIdeaPillar('ai-first');
  };

  const handleSubmit = () => {
    switch (type) {
      case 'video': {
        if (!videoTitle.trim()) return;
        addVideo({
          number: parseInt(videoNumber) || 0,
          title: videoTitle,
          titleHe: videoTitle,
          stages: { script: false, film: false, edit: false, publish: false },
          notes: '',
        });
        break;
      }
      case 'task': {
        if (!taskTitle.trim()) return;
        addTask({
          title: taskTitle,
          category: taskCategory,
          priority: taskPriority,
          status: 'todo',
          notes: taskNotes,
        });
        break;
      }
      case 'idea': {
        if (!ideaText.trim()) return;
        addIdea({
          text: ideaText,
          pillar: ideaPillar,
        });
        break;
      }
    }

    resetFields();
    onClose();
  };

  const handleClose = () => {
    resetFields();
    onClose();
  };

  const titles: Record<typeof type, string> = {
    video: 'הוסף סרטון',
    task: 'הוסף משימה',
    idea: 'הוסף רעיון',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleClose}
          />

          {/* Bottom sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[70] bg-brand-card rounded-t-2xl max-h-[85vh] overflow-y-auto pb-safe"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-brand-border" />
            </div>

            <div className="px-5 pb-6">
              <h2 className="text-lg font-bold mb-5">{titles[type]}</h2>

              {/* === Video Form === */}
              {type === 'video' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      שם הסרטון
                    </label>
                    <input
                      type="text"
                      value={videoTitle}
                      onChange={(e) => setVideoTitle(e.target.value)}
                      placeholder="למשל: איך בניתי סוכן AI"
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right focus:outline-none focus:border-brand-accent transition-colors"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      מספר סרטון
                    </label>
                    <input
                      type="number"
                      value={videoNumber}
                      onChange={(e) => setVideoNumber(e.target.value)}
                      placeholder="8"
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right focus:outline-none focus:border-brand-accent transition-colors"
                      dir="rtl"
                    />
                  </div>
                </div>
              )}

              {/* === Task Form === */}
              {type === 'task' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      כותרת
                    </label>
                    <input
                      type="text"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      placeholder="למשל: להקליט שיעור ראשון"
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right focus:outline-none focus:border-brand-accent transition-colors"
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      קטגוריה
                    </label>
                    <div className="flex gap-2">
                      {categoryOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setTaskCategory(opt.value)}
                          className={`flex-1 py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                            taskCategory === opt.value
                              ? 'bg-brand-accent/20 border-brand-accent text-brand-accent'
                              : 'bg-brand-bg border-brand-border text-brand-muted'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      עדיפות
                    </label>
                    <div className="flex gap-2">
                      {priorityOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setTaskPriority(opt.value)}
                          className={`flex-1 py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                            taskPriority === opt.value
                              ? `bg-transparent ${opt.color}`
                              : 'bg-brand-bg border-brand-border text-brand-muted'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      הערות (אופציונלי)
                    </label>
                    <textarea
                      value={taskNotes}
                      onChange={(e) => setTaskNotes(e.target.value)}
                      placeholder="פרטים נוספים..."
                      rows={2}
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right resize-none focus:outline-none focus:border-brand-accent transition-colors"
                      dir="rtl"
                    />
                  </div>
                </div>
              )}

              {/* === Idea Form === */}
              {type === 'idea' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      רעיון
                    </label>
                    <textarea
                      value={ideaText}
                      onChange={(e) => setIdeaText(e.target.value)}
                      placeholder="למשל: סרטון על איך למפות את כל העסק בשעה"
                      rows={3}
                      className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right resize-none focus:outline-none focus:border-brand-accent transition-colors"
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-brand-muted mb-1.5 block">
                      עמוד תוכן
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {pillarOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setIdeaPillar(opt.value)}
                          className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                            ideaPillar === opt.value
                              ? 'bg-brand-accent/20 border-brand-accent text-brand-accent'
                              : 'bg-brand-bg border-brand-border text-brand-muted'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-brand-accent text-white font-semibold py-3 rounded-xl active:scale-[0.97] transition-transform"
                >
                  הוסף
                </button>
                <button
                  onClick={handleClose}
                  className="px-5 py-3 text-brand-muted text-sm"
                >
                  ביטול
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
