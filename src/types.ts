export interface Video {
  id: string;
  number: number;
  title: string;
  titleHe: string;
  stages: {
    script: boolean;
    film: boolean;
    edit: boolean;
    publish: boolean;
  };
  notes: string;
}

export type TaskCategory = 'launch' | 'marketing' | 'technical';
export type TaskPriority = 'high' | 'medium' | 'low';
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  notes: string;
}

export type ContentPillar = 'ai-first' | 'systems' | 'survival-abundance' | 'lifestyle' | 'personal';

export interface Idea {
  id: string;
  text: string;
  pillar: ContentPillar;
  createdAt: string;
}

export interface AppState {
  videos: Video[];
  tasks: Task[];
  ideas: Idea[];
  lastSync: string;
}

export type Tab = 'dashboard' | 'content' | 'tasks' | 'ideas';
