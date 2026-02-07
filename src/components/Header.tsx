import { RefreshCw } from 'lucide-react';

interface HeaderProps {
  onSyncClick: () => void;
}

export default function Header({ onSyncClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full h-14 z-50 bg-brand-bg border-b border-brand-border flex items-center justify-between px-4">
      <h1 className="text-lg font-bold tracking-tight">
        <span className="ml-1.5">&#127919;</span>
        מרכז פיקוד
      </h1>

      <button
        onClick={onSyncClick}
        className="p-2 rounded-lg text-brand-muted hover:text-brand-accent active:scale-90 transition-all"
        aria-label="סנכרון"
      >
        <RefreshCw size={20} />
      </button>
    </header>
  );
}
