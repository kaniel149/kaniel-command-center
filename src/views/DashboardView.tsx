import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../store/AppContext';
import ProgressRing from '../components/ProgressRing';
import TaskItem from '../components/TaskItem';
import type { Task, TaskCategory } from '../types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const PRIORITY_ORDER: Record<Task['priority'], number> = {
  high: 0,
  medium: 1,
  low: 2,
};

const STATUS_ORDER: Record<Task['status'], number> = {
  todo: 0,
  'in-progress': 1,
  done: 2,
};

const CATEGORY_META: Record<TaskCategory, { emoji: string; label: string }> = {
  launch: { emoji: '\uD83D\uDE80', label: '\u05D4\u05E9\u05E7\u05D4' },
  marketing: { emoji: '\uD83D\uDCB0', label: '\u05E9\u05D9\u05D5\u05D5\u05E7' },
  technical: { emoji: '\uD83D\uDD27', label: '\u05D8\u05DB\u05E0\u05D9' },
};

export default function DashboardView() {
  const { state } = useAppContext();
  const { videos, tasks, ideas } = state;

  // ---------- Stats ----------
  const totalVideoStages = videos.length * 4;
  const completedVideoStages = videos.reduce(
    (sum, v) =>
      sum +
      Number(v.stages.script) +
      Number(v.stages.film) +
      Number(v.stages.edit) +
      Number(v.stages.publish),
    0
  );

  const doneTasks = tasks.filter((t) => t.status === 'done').length;
  const totalTasks = tasks.length;

  const completedVideos = videos.filter(
    (v) => v.stages.script && v.stages.film && v.stages.edit && v.stages.publish
  ).length;

  const overallPercent =
    totalTasks + totalVideoStages > 0
      ? Math.round(
          ((doneTasks + completedVideoStages) /
            (totalTasks + totalVideoStages)) *
            100
        )
      : 0;

  // ---------- Today's Focus ----------
  const topTasks = useMemo(() => {
    return tasks
      .filter((t) => t.status !== 'done')
      .sort((a, b) => {
        const pDiff = PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
        if (pDiff !== 0) return pDiff;
        return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
      })
      .slice(0, 3);
  }, [tasks]);

  // ---------- Pipeline counts ----------
  const pipelineCounts = useMemo(() => {
    const stages: (keyof typeof videos[0]['stages'])[] = [
      'script',
      'film',
      'edit',
      'publish',
    ];
    return stages.map((stage) => ({
      stage,
      done: videos.filter((v) => v.stages[stage]).length,
      total: videos.length,
    }));
  }, [videos]);

  const stageLabels: Record<string, string> = {
    script: '\u05EA\u05E1\u05E8\u05D9\u05D8',
    film: '\u05E6\u05D9\u05DC\u05D5\u05DD',
    edit: '\u05E2\u05E8\u05D9\u05DB\u05D4',
    publish: '\u05E4\u05E8\u05E1\u05D5\u05DD',
  };

  // ---------- Category progress ----------
  const categoryProgress = useMemo(() => {
    return (['launch', 'marketing', 'technical'] as TaskCategory[]).map(
      (cat) => {
        const catTasks = tasks.filter((t) => t.category === cat);
        const catDone = catTasks.filter((t) => t.status === 'done').length;
        return {
          category: cat,
          done: catDone,
          total: catTasks.length,
          percent:
            catTasks.length > 0
              ? Math.round((catDone / catTasks.length) * 100)
              : 0,
        };
      }
    );
  }, [tasks]);

  return (
    <motion.div
      className="px-4 py-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Section 1: Hero stats */}
      <motion.div variants={item} className="flex flex-col items-center gap-4">
        <ProgressRing
          percent={overallPercent}
          size={140}
          strokeWidth={10}
          label="\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05EA"
        />

        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="bg-brand-card rounded-xl p-3 text-center border border-brand-border">
            <div className="text-2xl mb-1">{'\uD83C\uDFAC'}</div>
            <div className="text-lg font-bold text-brand-text">
              {completedVideos}/{videos.length}
            </div>
            <div className="text-xs text-brand-muted">
              {'\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD'}
            </div>
          </div>

          <div className="bg-brand-card rounded-xl p-3 text-center border border-brand-border">
            <div className="text-2xl mb-1">{'\u2705'}</div>
            <div className="text-lg font-bold text-brand-text">
              {doneTasks}/{totalTasks}
            </div>
            <div className="text-xs text-brand-muted">
              {'\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA'}
            </div>
          </div>

          <div className="bg-brand-card rounded-xl p-3 text-center border border-brand-border">
            <div className="text-2xl mb-1">{'\uD83D\uDCA1'}</div>
            <div className="text-lg font-bold text-brand-text">
              {ideas.length}
            </div>
            <div className="text-xs text-brand-muted">
              {'\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA'}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Today's Focus */}
      <motion.div variants={item}>
        <h2 className="text-base font-bold mb-3">
          {'\uD83D\uDD25'}{' '}
          {'\u05DE\u05D4 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD'}
        </h2>

        {topTasks.length > 0 ? (
          <div className="space-y-2">
            {topTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="bg-brand-card rounded-xl p-4 text-center border border-brand-border">
            <p className="text-brand-muted">
              {'\uD83C\uDF89'}{' '}
              {'\u05D0\u05D9\u05DF \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D3\u05D7\u05D5\u05E4\u05D5\u05EA!'}
            </p>
          </div>
        )}
      </motion.div>

      {/* Section 3: Content Pipeline */}
      <motion.div variants={item}>
        <h2 className="text-base font-bold mb-3">
          {'\uD83C\uDFAC'}{' '}
          {'\u05E6\u05D9\u05E0\u05D5\u05E8 \u05EA\u05D5\u05DB\u05DF'}
        </h2>

        <div className="grid grid-cols-4 gap-2">
          {pipelineCounts.map(({ stage, done, total }) => {
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            return (
              <div
                key={stage}
                className="bg-brand-card rounded-xl p-3 text-center border border-brand-border"
              >
                <div className="text-sm font-semibold text-brand-text mb-1">
                  {done}/{total}
                </div>
                <div className="text-xs text-brand-muted mb-2">
                  {stageLabels[stage]}
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Section 4: Tasks by Category */}
      <motion.div variants={item}>
        <h2 className="text-base font-bold mb-3">
          {'\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4'}
        </h2>

        <div className="space-y-2">
          {categoryProgress.map(({ category, done, total, percent }) => {
            const meta = CATEGORY_META[category];
            return (
              <div
                key={category}
                className="bg-brand-card rounded-xl p-3 border border-brand-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">
                    {meta.emoji} {meta.label}
                  </span>
                  <span className="text-xs text-brand-muted">
                    {done}/{total}
                  </span>
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
