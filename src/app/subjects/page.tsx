"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { subjects } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function SubjectsPage() {
  return (
    <main className="relative flex-1 overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-16 h-[380px] w-[380px] rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-600/15" />
        <div className="absolute right-[-8%] top-1/3 h-[360px] w-[360px] rounded-full bg-fuchsia-400/15 blur-[120px] dark:bg-fuchsia-600/12" />
        <div className="absolute bottom-[-6%] left-1/4 h-[320px] w-[320px] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-500/10" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <section className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="relative mb-5 flex min-h-[36px] items-center justify-center">
          <div className="absolute left-0">
            <Link href="/">
              <button className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] active:shadow-none transition-all duration-75 cursor-pointer shadow-[0_3px_8px_rgba(239,68,68,0.15)]" aria-label="पीछे जाएं">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-lg shadow-black/15 dark:shadow-black/40">
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-500 text-xs sm:text-sm">📚</div>
            <span className="text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight uppercase">Hindi भाषा</span>
            <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-blue-500">विषय</span>
            </div>
          </div>
        </div>

        {/* Subject cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="mt-6 grid grid-cols-1 gap-4">
          {subjects.map((subject) => {
            return (
              <motion.div key={subject.id} variants={itemVariants}>
                <Link href={`/chapter/${subject.id}`}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: `0 10px 24px -4px rgba(0,0,0,0.22), 0 22px 46px -14px rgba(0,0,0,0.32)` }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group relative cursor-pointer overflow-hidden rounded-[22px] border border-zinc-200/60 bg-white dark:border-white/[0.06] dark:bg-zinc-900"
                    style={{ boxShadow: "0 4px 12px -2px rgba(0,0,0,0.10), 0 12px 30px -14px rgba(0,0,0,0.20)" }}
                  >
                    {/* soft color wash */}
                    <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundColor: `${subject.color}0D` }} />
                    {/* left color spine */}
                    <span className="absolute bottom-4 left-0 top-4 w-1.5 rounded-full" style={{ backgroundColor: subject.color }} />

                    <div className="relative flex items-center gap-4 py-4 pl-6 pr-4 sm:py-5">
                      {/* solid color icon tile */}
                      <div className="relative shrink-0">
                        <div
                          className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-[26px] transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: subject.color, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), 0 8px 18px -6px rgba(0,0,0,0.28)" }}
                        >
                          <span className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.25))]">{subject.icon}</span>
                        </div>
                      </div>

                      {/* text */}
                      <div className="min-w-0 flex-1">
                        <h2 className="truncate text-lg font-black tracking-tight text-zinc-800 dark:text-zinc-100">{subject.name}</h2>
                        <p className="mt-0.5 truncate text-xs font-medium leading-snug text-zinc-500 dark:text-zinc-400 sm:text-sm">{subject.description}</p>
                      </div>

                      {/* count pill */}
                      <span
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: subject.color, boxShadow: "0 4px 10px -3px rgba(0,0,0,0.20)" }}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/85" />
                        {subject.topicCount}
                      </span>

                      {/* chevron */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5" style={{ backgroundColor: `${subject.color}14`, color: subject.color }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}
