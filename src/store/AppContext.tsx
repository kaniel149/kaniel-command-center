import React, { createContext, useContext, useCallback, useMemo } from 'react';
import type { Video, Task, Idea, AppState, TaskStatus } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialVideos, initialTasks, initialIdeas } from '../data/initialData';

interface AppContextType {
  state: AppState;
  // Video actions
  toggleVideoStage: (videoId: string, stage: keyof Video['stages']) => void;
  updateVideoNotes: (videoId: string, notes: string) => void;
  addVideo: (video: Omit<Video, 'id'>) => void;
  deleteVideo: (videoId: string) => void;
  // Task actions
  cycleTaskStatus: (taskId: string) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  // Idea actions
  addIdea: (idea: Omit<Idea, 'id' | 'createdAt'>) => void;
  deleteIdea: (ideaId: string) => void;
  // Sync
  exportState: () => string;
  importState: (json: string) => boolean;
  resetState: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const STATUS_CYCLE: Record<TaskStatus, TaskStatus> = {
  'todo': 'in-progress',
  'in-progress': 'done',
  'done': 'todo',
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [videos, setVideos] = useLocalStorage<Video[]>('videos', initialVideos);
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', initialTasks);
  const [ideas, setIdeas] = useLocalStorage<Idea[]>('ideas', initialIdeas);
  const [lastSync, setLastSync] = useLocalStorage<string>('lastSync', new Date().toISOString());

  // --- Video actions ---

  const toggleVideoStage = useCallback(
    (videoId: string, stage: keyof Video['stages']) => {
      setVideos((prev) =>
        prev.map((v) =>
          v.id === videoId
            ? { ...v, stages: { ...v.stages, [stage]: !v.stages[stage] } }
            : v
        )
      );
      setLastSync(new Date().toISOString());
    },
    [setVideos, setLastSync]
  );

  const updateVideoNotes = useCallback(
    (videoId: string, notes: string) => {
      setVideos((prev) =>
        prev.map((v) => (v.id === videoId ? { ...v, notes } : v))
      );
      setLastSync(new Date().toISOString());
    },
    [setVideos, setLastSync]
  );

  const addVideo = useCallback(
    (video: Omit<Video, 'id'>) => {
      const newVideo: Video = {
        ...video,
        id: crypto.randomUUID(),
      };
      setVideos((prev) => [...prev, newVideo]);
      setLastSync(new Date().toISOString());
    },
    [setVideos, setLastSync]
  );

  const deleteVideo = useCallback(
    (videoId: string) => {
      setVideos((prev) => prev.filter((v) => v.id !== videoId));
      setLastSync(new Date().toISOString());
    },
    [setVideos, setLastSync]
  );

  // --- Task actions ---

  const cycleTaskStatus = useCallback(
    (taskId: string) => {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId ? { ...t, status: STATUS_CYCLE[t.status] } : t
        )
      );
      setLastSync(new Date().toISOString());
    },
    [setTasks, setLastSync]
  );

  const addTask = useCallback(
    (task: Omit<Task, 'id'>) => {
      const newTask: Task = {
        ...task,
        id: crypto.randomUUID(),
      };
      setTasks((prev) => [...prev, newTask]);
      setLastSync(new Date().toISOString());
    },
    [setTasks, setLastSync]
  );

  const deleteTask = useCallback(
    (taskId: string) => {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
      setLastSync(new Date().toISOString());
    },
    [setTasks, setLastSync]
  );

  const updateTask = useCallback(
    (taskId: string, updates: Partial<Task>) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, ...updates } : t))
      );
      setLastSync(new Date().toISOString());
    },
    [setTasks, setLastSync]
  );

  // --- Idea actions ---

  const addIdea = useCallback(
    (idea: Omit<Idea, 'id' | 'createdAt'>) => {
      const newIdea: Idea = {
        ...idea,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setIdeas((prev) => [newIdea, ...prev]);
      setLastSync(new Date().toISOString());
    },
    [setIdeas, setLastSync]
  );

  const deleteIdea = useCallback(
    (ideaId: string) => {
      setIdeas((prev) => prev.filter((i) => i.id !== ideaId));
      setLastSync(new Date().toISOString());
    },
    [setIdeas, setLastSync]
  );

  // --- Sync ---

  const exportState = useCallback((): string => {
    const exportData: AppState = {
      videos,
      tasks,
      ideas,
      lastSync: new Date().toISOString(),
    };
    return JSON.stringify(exportData, null, 2);
  }, [videos, tasks, ideas]);

  const importState = useCallback(
    (json: string): boolean => {
      try {
        const data = JSON.parse(json) as AppState;

        if (!data.videos || !data.tasks || !data.ideas) {
          console.warn('Import failed: missing required fields');
          return false;
        }

        if (!Array.isArray(data.videos) || !Array.isArray(data.tasks) || !Array.isArray(data.ideas)) {
          console.warn('Import failed: videos, tasks, and ideas must be arrays');
          return false;
        }

        setVideos(data.videos);
        setTasks(data.tasks);
        setIdeas(data.ideas);
        setLastSync(data.lastSync || new Date().toISOString());
        return true;
      } catch (error) {
        console.warn('Import failed: invalid JSON', error);
        return false;
      }
    },
    [setVideos, setTasks, setIdeas, setLastSync]
  );

  const resetState = useCallback(() => {
    setVideos(initialVideos);
    setTasks(initialTasks);
    setIdeas(initialIdeas);
    setLastSync(new Date().toISOString());
  }, [setVideos, setTasks, setIdeas, setLastSync]);

  // --- Build state & context value ---

  const state: AppState = useMemo(
    () => ({ videos, tasks, ideas, lastSync }),
    [videos, tasks, ideas, lastSync]
  );

  const contextValue: AppContextType = useMemo(
    () => ({
      state,
      toggleVideoStage,
      updateVideoNotes,
      addVideo,
      deleteVideo,
      cycleTaskStatus,
      addTask,
      deleteTask,
      updateTask,
      addIdea,
      deleteIdea,
      exportState,
      importState,
      resetState,
    }),
    [
      state,
      toggleVideoStage,
      updateVideoNotes,
      addVideo,
      deleteVideo,
      cycleTaskStatus,
      addTask,
      deleteTask,
      updateTask,
      addIdea,
      deleteIdea,
      exportState,
      importState,
      resetState,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
