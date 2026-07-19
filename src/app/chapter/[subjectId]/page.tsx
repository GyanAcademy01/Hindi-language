"use client";

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CardContent } from "@/components/ui/card";
import { subjects } from '@/lib/data';
import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ChapterListPage(props: { params: Promise<{ subjectId: string }> }) {
  const params = use(props.params);
  const subject = subjects.find((s) => s.id === params.subjectId);

  if (!subject) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <p className="text-2xl mb-4">😕</p>
          <p className="text-muted-foreground">अध्याय नहीं मिला</p>
          <Link href="/subjects">
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">← वापस जाएं</button>
          </Link>
        </div>
      </main>
    );
  }

  const topics = subject.topics || [];
  
  const sem1Topics = topics.filter(t => t.fullTitle.includes('Sem1'));
  const sem2Topics = topics.filter(t => t.fullTitle.includes('Sem2'));
  const otherTopics = topics.filter(t => !t.fullTitle.includes('Sem1') && !t.fullTitle.includes('Sem2'));

  const renderTopics = (topicsList: typeof topics) => (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {topicsList.map((topic, idx) => {
        const cardColors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#ef4444", "#84cc16"];
        const cardColor = cardColors[idx % cardColors.length];
        const cardBgClass = 'bg-white dark:bg-zinc-900 border-slate-100 dark:border-zinc-800 hover:border-slate-200';

        return (
          <div key={topic.id} className="h-full">
            <div className={`rounded-[20px] border-2 ${cardBgClass} shadow-[0_4px_20px_-2px_rgba(0,0,0,0.13),0_2px_6px_-1px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.18),0_3px_10px_-2px_rgba(0,0,0,0.1)] transition-all duration-200 flex flex-col h-full overflow-hidden`}>
              <CardContent className="p-4.5 sm:p-5 flex flex-col h-full justify-between">
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-[14px] font-black text-xl text-white shadow-sm" style={{ backgroundColor: cardColor, backgroundImage: 'linear-gradient(rgba(255,255,255,0.15), rgba(0,0,0,0.05))' }}>
                    {topic.number}
                  </div>
                  <div className="flex flex-col justify-center min-h-[48px]">
                    <h2 className="text-sm sm:text-base font-bold text-slate-800 dark:text-zinc-100 leading-snug">{topic.title}</h2>
                  </div>
                </div>

                <div className="mt-auto pt-3 md:pt-4">
                  <div className="w-full h-[1px] bg-slate-100 dark:bg-zinc-800/60" />
                </div>

                <div className="flex items-center gap-2.5 pt-3 md:pt-4">
                  {topic.hasTheory && (
                    <Link href={`/chapter/${subject.id}/${topic.id}/theory`} className="flex-1">
                      <button
                        className="group/btn relative w-full flex items-center justify-center gap-1.5 h-9 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide text-white overflow-hidden shadow-[0_3px_10px_-1px_rgba(0,0,0,0.2),0_2px_5px_rgba(0,0,0,0.12)] hover:shadow-[0_5px_18px_-2px_rgba(0,0,0,0.25)] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                        style={{ background: `linear-gradient(135deg, ${cardColor}, ${cardColor}dd)` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10 pointer-events-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="relative opacity-80 group-hover/btn:opacity-100 transition-opacity"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                        <span className="relative">Theory</span>
                      </button>
                    </Link>
                  )}
                  {topic.hasTest && (
                    <Link href={`/chapter/${subject.id}/${topic.id}/test`} className="flex-1">
                      <button
                        className="group/btn relative w-full flex items-center justify-center gap-1.5 h-9 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide overflow-hidden bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_-2px_rgba(0,0,0,0.12)] hover:border-slate-300 dark:hover:border-zinc-600 active:scale-[0.97] transition-all duration-200 cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/btn:opacity-100 transition-opacity" style={{ color: cardColor }}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                        <span className="relative">Test</span>
                      </button>
                    </Link>
                  )}
                  {topic.pdfUrl && (
                    <Link href={`/pdf-view?file=${encodeURIComponent(topic.pdfUrl)}&title=${encodeURIComponent(topic.fullTitle)}&color=${encodeURIComponent(subject.color)}`} className="flex-1">
                      <button className="group/btn relative w-full flex items-center justify-center gap-1.5 h-9 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide overflow-hidden bg-gradient-to-b from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200/70 dark:border-rose-800/40 text-rose-600 dark:text-rose-400 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_14px_-2px_rgba(0,0,0,0.2)] hover:border-rose-300 dark:hover:border-rose-600/50 active:scale-[0.97] transition-all duration-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover/btn:opacity-100 transition-opacity"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        PDF
                      </button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <main className="relative flex-1 pt-8 pb-4 sm:pt-10 sm:pb-6 px-4 sm:px-6 overflow-x-hidden overflow-y-auto custom-scrollbar">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] sm:blur-[130px]" style={{ backgroundColor: `${subject.color}26` }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] sm:blur-[130px]" style={{ backgroundColor: `${subject.color2}26` }} />
      </div>

      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        {/* Header */}
        <div className="relative mb-5 flex min-h-[36px] items-center justify-center">
          <div className="absolute left-0">
            <Link href="/subjects">
              <button className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] active:shadow-none transition-all duration-75 cursor-pointer shadow-[0_3px_8px_rgba(239,68,68,0.15)]" aria-label="पीछे जाएं">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-lg shadow-black/15 dark:shadow-black/40">
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-xs sm:text-sm">{subject.icon}</div>
            <span className="text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight uppercase">{subject.name}</span>
            <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: subject.color }} />
              <span className="text-xs sm:text-sm font-bold" style={{ color: subject.color }}>अध्याय</span>
            </div>
          </div>
        </div>

        {/* Topics List */}
        {sem1Topics.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-zinc-200 mb-4 px-3 border-l-[4px] ml-1" style={{ borderColor: subject.color }}>Semester 1</h2>
            {renderTopics(sem1Topics)}
          </div>
        )}

        {sem2Topics.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-zinc-200 mb-4 px-3 border-l-[4px] ml-1" style={{ borderColor: subject.color2 }}>Semester 2</h2>
            {renderTopics(sem2Topics)}
          </div>
        )}

        {otherTopics.length > 0 && (
          <div className="mb-8">
            {(sem1Topics.length > 0 || sem2Topics.length > 0) && (
              <h2 className="text-xl font-extrabold text-slate-800 dark:text-zinc-200 mb-4 px-3 border-l-[4px] border-zinc-400 ml-1">Other Topics</h2>
            )}
            {renderTopics(otherTopics)}
          </div>
        )}
      </div>
    </main>
  );
}
