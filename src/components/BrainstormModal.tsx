import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Plus, Lightbulb } from 'lucide-react';
import type { ContentPillar } from '../types';

interface BrainstormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddIdea: (text: string, pillar: ContentPillar) => void;
}

interface PillarTab {
  id: ContentPillar;
  label: string;
  emoji: string;
  prompts: string[];
}

const PILLAR_TABS: PillarTab[] = [
  {
    id: 'ai-first',
    label: 'AI First',
    emoji: '\uD83E\uDD16',
    prompts: [
      '\u05DE\u05D4 \u05D4\u05D3\u05D1\u05E8 \u05D4\u05DB\u05D9 \u05DE\u05E4\u05EA\u05D9\u05E2 \u05E9AI \u05E2\u05E9\u05D4 \u05DC\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2?',
      '\u05D0\u05D9\u05D6\u05D4 \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D9\u05D3\u05E0\u05D9\u05EA \u05D0\u05EA\u05D4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05E2\u05D5\u05E9\u05D4 \u05E9AI \u05D9\u05DB\u05D5\u05DC \u05DC\u05E2\u05E9\u05D5\u05EA?',
      '\u05DE\u05D4 \u05D4\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC\u05DA \u05E2\u05DD AI \u05E0\u05E8\u05D0\u05D4?',
      '\u05D0\u05D9\u05D6\u05D4 \u05D8\u05E2\u05D5\u05EA \u05E2\u05E9\u05D9\u05EA \u05DB\u05E9\u05D4\u05EA\u05D7\u05DC\u05EA \u05E2\u05DD AI?',
      '\u05DE\u05D4 \u05D4\u05D4\u05D1\u05D3\u05DC \u05D4\u05DB\u05D9 \u05D2\u05D3\u05D5\u05DC \u05D1\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05DC\u05E4\u05E0\u05D9 \u05D5\u05D0\u05D7\u05E8\u05D9 AI?',
      '\u05D0\u05D9\u05D6\u05D4 \u05DB\u05DC\u05D9 AI \u05D0\u05EA\u05D4 \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D7\u05D9\u05D5\u05EA \u05D1\u05DC\u05E2\u05D3\u05D9\u05D5?',
    ],
  },
  {
    id: 'systems',
    label: '\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA',
    emoji: '\u2699\uFE0F',
    prompts: [
      '\u05DE\u05D4 \u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05E9\u05DB\u05D9\u05D1\u05D9\u05EA \u05D1\u05E2\u05E1\u05E7?',
      '\u05D0\u05D9\u05D6\u05D4 \u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05EA\u05D4 \u05E2\u05D5\u05E9\u05D4 \u05E9\u05D5\u05D1 \u05D5\u05E9\u05D5\u05D1 \u05DB\u05DC \u05E9\u05D1\u05D5\u05E2?',
      '\u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05DB\u05E9\u05D0\u05EA\u05D4 \u05DC\u05D0 \u05E9\u05DD \u05D1\u05D9\u05D5\u05DD \u05D0\u05D7\u05D3?',
      '\u05D0\u05D9\u05D6\u05D4 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D9 \u05E9\u05D9\u05E0\u05EA\u05D4 \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7 \u05E9\u05DC\u05DA?',
      '\u05DE\u05D4 \u05D0\u05EA\u05D4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05E2\u05D5\u05E9\u05D4 \u05D9\u05D3\u05E0\u05D9\u05EA \u05E9\u05D6\u05D4 \u05DE\u05D8\u05D5\u05E8\u05E3?',
      '\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D4 \u05D4\u05D9\u05D5\u05DD \u05E9\u05DC\u05DA \u05DB\u05E9\u05D4\u05DB\u05DC \u05DE\u05E1\u05D5\u05D3\u05E8 vs \u05DB\u05E9\u05DC\u05D0?',
    ],
  },
  {
    id: 'survival-abundance',
    label: '\u05D4\u05D9\u05E9\u05E8\u05D3\u05D5\u05EA\u2192\u05E9\u05E4\u05E2',
    emoji: '\uD83D\uDCC8',
    prompts: [
      '\u05DE\u05D4 \u05D4\u05E8\u05D2\u05E2 \u05E9\u05D4\u05D1\u05E0\u05EA \u05E9\u05D0\u05EA\u05D4 \u05D1\u05DE\u05E6\u05D1 \u05D4\u05D9\u05E9\u05E8\u05D3\u05D5\u05EA?',
      '\u05DE\u05D4 \u05D4\u05D3\u05D1\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05E2\u05E9\u05D9\u05EA \u05DB\u05D3\u05D9 \u05DC\u05D9\u05D9\u05E6\u05E8 \u05D1\u05D9\u05D8\u05D7\u05D5\u05DF?',
      '\u05DE\u05D4 \u05D0\u05EA\u05D4 \u05DE\u05E4\u05D7\u05D3 \u05E9\u05D9\u05E7\u05E8\u05D4 \u05D0\u05DD \u05EA\u05E2\u05E6\u05D5\u05E8?',
      '\u05DE\u05EA\u05D9 \u05D4\u05E8\u05D2\u05E9\u05EA \u05E9\u05E4\u05E2 \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4?',
      '\u05DE\u05D4 \u05D4\u05D4\u05D1\u05D3\u05DC \u05D1\u05D9\u05DF \u05DC\u05E8\u05D5\u05E5 \u05DE\u05E4\u05D7\u05D3 \u05DC\u05E8\u05D5\u05E5 \u05DE\u05E8\u05E6\u05D5\u05DF?',
      '\u05D0\u05D9\u05D6\u05D4 \'\u05D1\u05D0\u05E4\u05E8\' \u05D1\u05E0\u05D9\u05EA \u05DC\u05E2\u05E6\u05DE\u05DA?',
    ],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    emoji: '\uD83C\uDF34',
    prompts: [
      '\u05DE\u05D4 \u05D4\u05D5\u05D9\u05EA\u05D5\u05E8 \u05D4\u05DB\u05D9 \u05D2\u05D3\u05D5\u05DC \u05E9\u05E2\u05E9\u05D9\u05EA (\u05E9\u05DC\u05D0 \u05D1\u05D0\u05DE\u05EA \u05D4\u05D9\u05D9\u05EA \u05E6\u05E8\u05D9\u05DA)?',
      '\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D4 \u05D9\u05D5\u05DD \u05DE\u05D5\u05E9\u05DC\u05DD \u05D1\u05E9\u05D1\u05D9\u05DC\u05DA?',
      '\u05DE\u05D4 \u05E2\u05E9\u05D9\u05EA \u05D4\u05D9\u05D5\u05DD \u05E2\u05DD \u05D4\u05D9\u05DC\u05D3\u05D9\u05DD/\u05DE\u05E9\u05E4\u05D7\u05D4?',
      '\u05DE\u05EA\u05D9 \u05D1\u05E4\u05E2\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05D0\u05DE\u05E8\u05EA \'\u05DC\u05D0\' \u05DC\u05DE\u05E9\u05D4\u05D5?',
      '\u05DE\u05D4 \u05DC\u05DE\u05D3\u05EA \u05DE\u05D7\u05D9\u05D9\u05DD \u05D1\u05D0\u05D9 \u05E2\u05DC \u05E7\u05E6\u05D1?',
      '\u05D0\u05D9\u05DA \u05D0\u05EA\u05D4 \u05DE\u05D0\u05D6\u05DF \u05E2\u05E1\u05E7 + \u05DE\u05E9\u05E4\u05D7\u05D4 + \u05EA\u05D7\u05D1\u05D9\u05D1\u05D9\u05DD?',
    ],
  },
  {
    id: 'personal',
    label: '\u05D0\u05D9\u05E9\u05D9',
    emoji: '\uD83D\uDCCD',
    prompts: [
      '\u05DE\u05D4 \u05E7\u05E8\u05D4 \u05DC\u05DA \u05D4\u05D9\u05D5\u05DD \u05E9\u05D4\u05E8\u05D2\u05D9\u05E9 \u05D0\u05DE\u05D9\u05EA\u05D9?',
      '\u05DE\u05D4 \u05DC\u05DE\u05D3\u05EA \u05DE\u05D0\u05D9\u05DE\u05D5\u05DF \u05DE\u05D5\u05D9 \u05EA\u05D0\u05D9 \u05E2\u05DC \u05D7\u05D9\u05D9\u05DD?',
      '\u05DE\u05D4 \u05D0\u05EA\u05D4 \u05E7\u05D5\u05E8\u05D0/\u05E9\u05D5\u05DE\u05E2 \u05E2\u05DB\u05E9\u05D9\u05D5?',
      '\u05DE\u05D4 \u05EA\u05D2\u05D9\u05D3 \u05DC\u05E2\u05E6\u05DE\u05DA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05D4?',
      '\u05DE\u05D4 \u05D4\u05D3\u05D1\u05E8 \u05E9\u05D0\u05EA\u05D4 \u05D4\u05DB\u05D9 \u05D2\u05D0\u05D4 \u05D1\u05D5?',
      '\u05DE\u05D4 \u05E2\u05D5\u05D3 \u05D0\u05E3 \u05D0\u05D7\u05D3 \u05DC\u05D0 \u05D9\u05D5\u05D3\u05E2 \u05E2\u05DC\u05D9\u05DA?',
    ],
  },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheetVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { type: 'spring', damping: 30, stiffness: 300 },
  },
  exit: { y: '100%', transition: { duration: 0.2 } },
};

const promptCardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export default function BrainstormModal({
  isOpen,
  onClose,
  onAddIdea,
}: BrainstormModalProps) {
  const [activeTab, setActiveTab] = useState<ContentPillar>('ai-first');
  const [draftText, setDraftText] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const activePillar = PILLAR_TABS.find((t) => t.id === activeTab)!;

  const handlePromptTap = (prompt: string) => {
    setSelectedPrompt(prompt);
    setDraftText(prompt);
  };

  const handleAddIdea = () => {
    if (!draftText.trim()) return;
    onAddIdea(draftText.trim(), activeTab);
    setDraftText('');
    setSelectedPrompt(null);
  };

  const handleClose = () => {
    setDraftText('');
    setSelectedPrompt(null);
    onClose();
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
            className="fixed bottom-0 left-0 right-0 z-[70] bg-brand-card rounded-t-2xl max-h-[90vh] flex flex-col pb-safe"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2 shrink-0">
              <div className="w-10 h-1 rounded-full bg-brand-border" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-brand-accent" />
                <h2 className="text-lg font-bold">
                  {'\u05DE\u05D5\u05D3 \u05E1\u05D9\u05E2\u05D5\u05E8 \u05DE\u05D5\u05D7\u05D5\u05EA'}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-brand-border text-brand-muted transition-colors"
                aria-label="\u05E1\u05D2\u05D5\u05E8"
              >
                <X size={20} />
              </button>
            </div>

            {/* Pillar tabs */}
            <div className="flex gap-2 overflow-x-auto px-5 pb-3 scrollbar-hide shrink-0">
              {PILLAR_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedPrompt(null);
                  }}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-brand-accent text-white'
                      : 'bg-brand-bg text-brand-muted border border-brand-border'
                  }`}
                >
                  {tab.emoji} {tab.label}
                </button>
              ))}
            </div>

            {/* Prompt cards - scrollable */}
            <div className="flex-1 overflow-y-auto px-5 pb-3 min-h-0">
              <motion.div
                className="grid grid-cols-1 gap-2.5"
                initial="hidden"
                animate="show"
                key={activeTab}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04 },
                  },
                }}
              >
                {activePillar.prompts.map((prompt, idx) => (
                  <motion.button
                    key={idx}
                    variants={promptCardVariants}
                    onClick={() => handlePromptTap(prompt)}
                    className={`w-full text-right p-3.5 rounded-xl border transition-colors ${
                      selectedPrompt === prompt
                        ? 'bg-brand-accent/15 border-brand-accent text-brand-text'
                        : 'bg-brand-bg border-brand-border text-brand-sub hover:border-brand-accent/40'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <Lightbulb
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          selectedPrompt === prompt
                            ? 'text-brand-accent'
                            : 'text-brand-muted'
                        }`}
                      />
                      <span className="text-sm leading-relaxed">{prompt}</span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Bottom area - draft input + add button */}
            <div className="border-t border-brand-border px-5 pt-3 pb-4 shrink-0">
              <textarea
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                placeholder={
                  '\u05D1\u05D7\u05E8 \u05E9\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05DB\u05EA\u05D5\u05D1 \u05E8\u05E2\u05D9\u05D5\u05DF...'
                }
                rows={2}
                dir="rtl"
                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-muted/50 text-right resize-none focus:outline-none focus:border-brand-accent transition-colors mb-3"
              />
              <button
                onClick={handleAddIdea}
                disabled={!draftText.trim()}
                className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-semibold py-3 rounded-xl active:scale-[0.97] transition-transform disabled:opacity-40 disabled:active:scale-100"
              >
                <Plus size={18} />
                {'\u05D4\u05D5\u05E1\u05E3 \u05DB\u05E8\u05E2\u05D9\u05D5\u05DF'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
