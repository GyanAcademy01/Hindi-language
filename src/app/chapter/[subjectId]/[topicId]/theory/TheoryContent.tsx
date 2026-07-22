"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Subject, Topic } from "@/lib/data";
import { TheoryData, TheorySection } from "@/types/theory";

interface TheoryContentProps {
  subject: Subject;
  topic: Topic;
  theory: TheoryData;
  subjectId: string;
  topicId: string;
}

/* ---------------- Inline icons (stroke, currentColor) ---------------- */
const ICONS = {
  book: (
    <>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </>
  ),
  list: (
    <>
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </>
  ),
  language: (
    <>
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </>
  ),
  heart: (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </>
  ),
} as const;

type IconName = keyof typeof ICONS;

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {ICONS[name]}
    </svg>
  );
}

/* ---------------- Per-section gradient + icon ---------------- */
type Accent = { from: string; to: string; label: string; icon: IconName };

const SECTION_ACCENTS: Record<string, Accent> = {
  intro: { from: "#6366f1", to: "#8b5cf6", label: "सारांश", icon: "book" },
  "main-points": { from: "#3b82f6", to: "#06b6d4", label: "मुख्य बिंदु", icon: "list" },
  vocabulary: { from: "#8b5cf6", to: "#ec4899", label: "शब्दार्थ", icon: "language" },
  qa: { from: "#f59e0b", to: "#f97316", label: "प्रश्नोत्तर", icon: "help" },
  moral: { from: "#10b981", to: "#14b8a6", label: "सीख", icon: "heart" },
};

const TYPE_ACCENTS: Record<string, Accent> = {
  text: { from: "#6366f1", to: "#8b5cf6", label: "अनुभाग", icon: "book" },
  summary: { from: "#6366f1", to: "#8b5cf6", label: "सारांश", icon: "book" },
  points: { from: "#3b82f6", to: "#06b6d4", label: "बिंदु", icon: "list" },
  table: { from: "#8b5cf6", to: "#ec4899", label: "तालिका", icon: "language" },
  qa: { from: "#f59e0b", to: "#f97316", label: "प्रश्नोत्तर", icon: "help" },
};

function getAccent(section: TheorySection): Accent {
  return (section.id ? SECTION_ACCENTS[section.id] : undefined) ?? (section.type ? TYPE_ACCENTS[section.type] : undefined) ?? TYPE_ACCENTS.text;
}

function renderFormattedText(text: string) {
  const parts = text.split("**");
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-extrabold text-slate-900 dark:text-zinc-50">
          {part}
        </strong>
      );
    }
    return part;
  });
}

export default function TheoryContent({ subject, topic, theory, subjectId, topicId }: TheoryContentProps) {
  const renderSection = (section: TheorySection, index: number) => {
    const a = getAccent(section);
    const gradient = `linear-gradient(135deg, ${a.from}, ${a.to})`;

    return (
      <section
        key={section.id || `section-${index}`}
        className="overflow-hidden rounded-[26px] border border-zinc-200/60 dark:border-zinc-850 shadow-[0_25px_55px_-12px_rgba(0,0,0,0.26),0_12px_24px_-10px_rgba(0,0,0,0.2)]"
      >
        {/* Gradient header banner - Sleek Compact Height */}
        <div className="relative px-4 py-2.5 sm:px-5 sm:py-3" style={{ background: gradient }}>
          <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-white/15 blur-lg" />
          <div className="pointer-events-none absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-white/10 blur-lg" />
          <div className="relative flex items-center gap-3">
            <span
              className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/25 text-white ring-1 ring-white/30 backdrop-blur-sm"
              style={{ boxShadow: "0 4px 12px -3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              <Icon name={a.icon} className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/80 leading-none mb-0.5">{a.label}</div>
              <h3 className="text-sm sm:text-base font-extrabold leading-snug text-white drop-shadow-sm">{section.title}</h3>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="bg-white px-5 py-6 sm:px-7 sm:py-7 dark:bg-zinc-900">
          {/* Text / Summary */}
          {(!section.type || section.type === "text" || section.type === "summary") && section.content && (
            <div className="space-y-4 text-[15.5px] leading-[1.9] text-slate-700 sm:text-base dark:text-zinc-300">
              {section.content.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} className={para.trim().match(/^[0-9]+\.|^-/) ? "ml-4 mb-2" : "mb-3"}>
                  {renderFormattedText(para)}
                </p>
              ))}
            </div>
          )}

          {/* Points */}
          {(!section.type || section.type === "points") && section.points && (
            <ol className="space-y-4">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl text-[13px] font-extrabold text-white"
                    style={{ background: gradient, boxShadow: `0 6px 14px -3px ${a.from}80` }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-[15.5px] leading-[1.75] text-slate-700 sm:text-base dark:text-zinc-300">{renderFormattedText(point)}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Table */}
          {(!section.type || section.type === "table") && section.tableData && (
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/70 dark:ring-white/[0.08]">
              <table className="w-full border-collapse text-left text-sm sm:text-[15px]">
                <thead>
                  <tr style={{ background: gradient }}>
                    {section.tableData.headers.map((header, i) => (
                      <th key={i} className="px-5 py-3.5 font-bold text-white">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 transition-colors hover:bg-slate-50 dark:border-white/[0.05] dark:hover:bg-white/[0.03]"
                      style={i % 2 === 1 ? { backgroundColor: `${a.from}08` } : undefined}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-5 py-3.5 align-top text-slate-700 dark:text-zinc-300 ${j === 0 ? "font-bold" : ""}`}
                          style={j === 0 ? { color: a.from } : undefined}
                        >
                          {renderFormattedText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Q & A */}
          {(!section.type || section.type === "qa") && section.qa && (
            <div className="space-y-4">
              {section.qa.map((qa, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 sm:p-5"
                  style={{ background: `${a.from}0C`, border: `1px solid ${a.from}26` }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl text-[12px] font-extrabold text-white"
                      style={{ background: gradient, boxShadow: `0 5px 12px -3px ${a.from}80` }}
                    >
                      प्र.
                    </span>
                    <p className="pt-1 font-bold leading-snug text-slate-900 dark:text-zinc-100">{renderFormattedText(qa.q)}</p>
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200 text-[12px] font-extrabold text-slate-600 dark:bg-white/10 dark:text-zinc-300">
                      उ.
                    </span>
                    <p className="pt-1 leading-[1.7] text-slate-700 dark:text-zinc-300">{renderFormattedText(qa.a)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subsections (for nested content like ch7) */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="space-y-4 mt-4">
              {section.subsections.map((sub, i) => (
                <div
                  key={sub.id || `sub-${i}`}
                  className="rounded-2xl p-4 sm:p-5"
                  style={{ background: `${a.from}08`, border: `1px solid ${a.from}18` }}
                >
                  <h4 className="mb-2 text-[15px] font-bold text-slate-900 dark:text-zinc-100">{sub.title}</h4>
                  <div className="space-y-2 text-[15px] leading-[1.85] text-slate-700 dark:text-zinc-300">
                    {sub.content.split("\n").filter(Boolean).map((line, j) => (
                      <p key={j} className={line.trim().match(/^[0-9]+\.|^-/) ? "ml-4 mb-1" : "mb-2"}>
                        {renderFormattedText(line)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };

  const subjectGradient = `linear-gradient(135deg, ${subject.color}, ${subject.color2})`;

  return (
    <main className="relative flex-1 overflow-x-hidden overflow-y-auto px-4 pb-24 pt-6 sm:px-6 sm:pb-12 sm:pt-10 custom-scrollbar">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[440px] w-[860px] max-w-[95vw] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: `radial-gradient(closest-side, ${subject.color}, transparent)` }} />
        <div className="absolute top-1/3 right-[-8%] h-[380px] w-[380px] rounded-full opacity-[0.16] blur-[120px]" style={{ backgroundColor: subject.color2 }} />
        <div className="absolute bottom-[-6%] left-[-6%] h-[320px] w-[320px] rounded-full opacity-[0.12] blur-[120px]" style={{ backgroundColor: "#f59e0b" }} />
      </div>

      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        {/* Header */}
        <div
          className="mb-8 flex items-center justify-between gap-4 rounded-[24px] border border-white/40 bg-white/70 px-5 py-4 backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-900/60"
          style={{ boxShadow: "0 10px 34px -18px rgba(15,23,42,0.35)" }}
        >
          {/* Back Link Left */}
          <div className="flex-shrink-0">
            <Link href={`/chapter/${subjectId}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:-translate-x-0.5" style={{ background: subjectGradient, boxShadow: `0 8px 18px -6px ${subject.color}99` }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Centered Chapter Title */}
          <div className="flex-1 min-w-0 text-center flex flex-col items-center justify-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white" style={{ background: subjectGradient }}>{subject.name}</span>
              <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500">अध्याय {topic.number}</span>
            </div>
            <h1 className="truncate w-full text-xl font-black tracking-tight text-slate-900 sm:text-2xl dark:text-zinc-50">{theory.chapterTitle}</h1>
          </div>

          {/* Test Link Right */}
          <div className="flex-shrink-0">
            <Link href={`/chapter/${subjectId}/${topicId}/test`}>
              <span className="inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" style={{ background: subjectGradient, boxShadow: `0 12px 24px -8px ${subject.color}aa` }}>
                टेस्ट दें
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Intro / description */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 overflow-hidden rounded-[24px] p-6 sm:p-7"
          style={{ background: `linear-gradient(135deg, ${subject.color}14, ${subject.color2}10)`, border: `1px solid ${subject.color}2e` }}
        >
          <span className="absolute bottom-5 left-0 top-5 w-1.5 rounded-full" style={{ background: subjectGradient }} />
          <p className="pl-5 text-[15.5px] font-medium italic leading-[1.85] text-slate-700 sm:text-[17px] dark:text-zinc-200">{theory.description}</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">{theory.sections.map((section, index) => renderSection(section, index))}</div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <Link href={`/chapter/${subjectId}/${topicId}/test`}>
            <motion.span
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full px-9 py-3.5 text-[15px] font-extrabold text-white"
              style={{ background: subjectGradient, boxShadow: `0 20px 40px -12px ${subject.color}b3` }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2l2.09 6.26L20 9l-5 3.9L16.18 20 12 16.2 7.82 20 9 12.9 4 9l5.91-.74z" /></svg>
              अब टेस्ट शुरू करें
            </motion.span>
          </Link>
          <p className="text-xs font-medium text-slate-400 dark:text-zinc-500">थ्योरी पूरी? अब अपनी तैयारी जांचें</p>
        </div>
      </div>
    </main>
  );
}
