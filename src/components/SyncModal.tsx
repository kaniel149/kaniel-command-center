import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Share2, Download, AlertTriangle } from 'lucide-react';
import { useAppContext } from '../store/AppContext';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SyncTab = 'export' | 'import';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheetVariants = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { type: 'spring', damping: 30, stiffness: 300 } },
  exit: { y: '100%', transition: { duration: 0.2 } },
};

export default function SyncModal({ isOpen, onClose }: SyncModalProps) {
  const { exportState, importState, resetState, state } = useAppContext();
  const [tab, setTab] = useState<SyncTab>('export');
  const [importJson, setImportJson] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const showFeedback = (type: 'success' | 'error', text: string) => {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 2500);
  };

  const handleCopy = async () => {
    const json = exportState();
    try {
      await navigator.clipboard.writeText(json);
      showFeedback('success', 'הועתק!');
    } catch {
      showFeedback('error', 'שגיאה בהעתקה');
    }
  };

  const handleShare = async () => {
    const json = exportState();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kaniel Command Center - Backup',
          text: json,
        });
        showFeedback('success', 'נשלח!');
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  const handleImport = () => {
    if (!importJson.trim()) {
      showFeedback('error', 'הדביקו JSON כאן');
      return;
    }
    const success = importState(importJson);
    if (success) {
      showFeedback('success', 'יובא בהצלחה!');
      setImportJson('');
      setTimeout(onClose, 1500);
    } else {
      showFeedback('error', 'JSON לא תקין');
    }
  };

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    resetState();
    setConfirmReset(false);
    showFeedback('success', 'אופס הכל!');
    setTimeout(onClose, 1500);
  };

  const handleClose = () => {
    setImportJson('');
    setFeedback(null);
    setConfirmReset(false);
    onClose();
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString('he-IL', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '-';
    }
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
              <h2 className="text-lg font-bold mb-4">
                סנכרון בין מכשירים
              </h2>

              {/* Tabs */}
              <div className="flex gap-1 bg-brand-bg rounded-lg p-1 mb-5">
                <button
                  onClick={() => setTab('export')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    tab === 'export'
                      ? 'bg-brand-card text-brand-text'
                      : 'text-brand-muted'
                  }`}
                >
                  ייצוא
                </button>
                <button
                  onClick={() => setTab('import')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    tab === 'import'
                      ? 'bg-brand-card text-brand-text'
                      : 'text-brand-muted'
                  }`}
                >
                  ייבוא
                </button>
              </div>

              {/* Export tab */}
              {tab === 'export' && (
                <div className="space-y-3">
                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-semibold py-3 rounded-xl active:scale-[0.97] transition-transform"
                  >
                    <Copy size={18} />
                    <span>העתק מצב</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-2 bg-brand-bg border border-brand-border text-brand-text font-medium py-3 rounded-xl active:scale-[0.97] transition-transform"
                  >
                    <Share2 size={18} />
                    <span>שתף</span>
                  </button>
                </div>
              )}

              {/* Import tab */}
              {tab === 'import' && (
                <div className="space-y-3">
                  <textarea
                    value={importJson}
                    onChange={(e) => setImportJson(e.target.value)}
                    placeholder='הדביקו כאן את ה-JSON...'
                    rows={5}
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-xs text-brand-text placeholder:text-brand-muted/50 resize-none focus:outline-none focus:border-brand-accent transition-colors font-mono"
                    dir="ltr"
                  />

                  <p className="text-xs text-brand-warning flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    <span>זה יחליף את כל הנתונים הנוכחיים</span>
                  </p>

                  <button
                    onClick={handleImport}
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-semibold py-3 rounded-xl active:scale-[0.97] transition-transform"
                  >
                    <Download size={18} />
                    <span>ייבא</span>
                  </button>
                </div>
              )}

              {/* Feedback toast */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-3 text-center py-2 rounded-lg text-sm font-medium ${
                      feedback.type === 'success'
                        ? 'bg-brand-success/20 text-brand-success'
                        : 'bg-brand-danger/20 text-brand-danger'
                    }`}
                  >
                    {feedback.text}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="border-t border-brand-border my-5" />

              {/* Last sync */}
              <p className="text-xs text-brand-muted text-center mb-4">
                עדכון אחרון: {formatDate(state.lastSync)}
              </p>

              {/* Reset */}
              <button
                onClick={handleReset}
                className={`w-full py-3 rounded-xl text-sm font-medium transition-colors ${
                  confirmReset
                    ? 'bg-brand-danger text-white'
                    : 'bg-brand-danger/10 text-brand-danger border border-brand-danger/30'
                }`}
              >
                {confirmReset ? 'לחצו שוב לאישור - אפס הכל' : 'אפס הכל'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
