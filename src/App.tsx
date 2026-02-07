import { useState } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SyncModal from './components/SyncModal';
import DashboardView from './views/DashboardView';
import ContentView from './views/ContentView';
import TasksView from './views/TasksView';
import IdeasView from './views/IdeasView';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [syncOpen, setSyncOpen] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'content':
        return <ContentView />;
      case 'tasks':
        return <TasksView />;
      case 'ideas':
        return <IdeasView />;
    }
  };

  return (
    <div dir="rtl" className="h-screen flex flex-col bg-brand-bg text-brand-text">
      <Header onSyncClick={() => setSyncOpen(true)} />

      <main className="flex-1 overflow-y-auto pt-14 pb-24 scrollbar-thin">
        {renderView()}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      <SyncModal isOpen={syncOpen} onClose={() => setSyncOpen(false)} />
    </div>
  );
}
