import { motion } from 'framer-motion';
import { LayoutDashboard, Film, CheckSquare, Lightbulb } from 'lucide-react';
import type { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'ראשי', icon: LayoutDashboard },
  { id: 'content', label: 'תוכן', icon: Film },
  { id: 'tasks', label: 'משימות', icon: CheckSquare },
  { id: 'ideas', label: 'רעיונות', icon: Lightbulb },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-brand-bg border-t border-brand-border pb-safe">
      <div className="flex items-stretch h-16">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 no-select relative transition-colors"
            >
              <Icon
                size={20}
                className={isActive ? 'text-brand-accent' : 'text-brand-muted'}
              />
              <span
                className={`text-xs ${
                  isActive
                    ? 'text-brand-accent font-semibold'
                    : 'text-brand-muted'
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-brand-accent"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
