import Link from "next/link";
import { subjects } from "@/lib/data";

/* ---------------- Inline icons ---------------- */
const ICONS: Record<string, React.ReactNode> = {
  book: (<><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></>),
  file: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></>),
  check: (<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>),
  language: (<><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></>),
  monitor: (<><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>),
  star: (<path d="M12 2l2.09 6.26L20 9l-5 3.9L16.18 20 12 16.2 7.82 20 9 12.9 4 9l5.91-.74z" />),
  layers: (<><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></>),
  arrow: (<path d="M5 12h14M13 5l7 7-7 7" />),
  chevron: (<path d="m9 18 6-6-6-6" />),
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {ICONS[name]}
    </svg>
  );
}

const BLACK_SM = "0 4px 12px -2px rgba(0,0,0,0.10), 0 12px 30px -14px rgba(0,0,0,0.20)";

export default function HomePage() {
  const allTopics = subjects.flatMap((s) => s.topics);
  const totalTheory = allTopics.filter((t) => t.hasTheory).length;
  const totalTests = allTopics.filter((t) => t.hasTest).length;

  const stats = [
    { icon: "layers", color: "#6366f1", value: `${subjects.length}`, label: "विषय" },
    { icon: "book", color: "#10b981", value: `${totalTheory}`, label: "थियरी" },
    { icon: "check", color: "#8b5cf6", value: `${totalTests}`, label: "टेस्ट" },
  ];

  return (
    <main className="relative flex-1 overflow-hidden flex flex-col justify-between">
      {/* Ambient background - Pure CSS Static Render */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute bottom-0 left-[30%] h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="home-bg-grid" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/70 bg-indigo-50 px-3 py-1 text-[11px] font-bold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
            कक्षा 6 से 8 · व्याकरण · पद्धतिशास्त्र
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.12] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            हिंदी सीखने का
            <span className="mt-2 block text-indigo-600 dark:text-indigo-400">बेहतर और सुंदर तरीका।</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
            कक्षा 6 से 8 तक की हिंदी भाषा, व्याकरण और पद्धतिशास्त्र सामग्री—पढ़ने, समझने और अभ्यास करने के लिए एक ही जगह।
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link href="/subjects" prefetch>
              <span
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold text-white transition-transform duration-200 hover:-translate-y-1 active:scale-95"
                style={{ backgroundColor: "#6366f1", boxShadow: BLACK_SM }}
              >
                पढ़ाई शुरू करें
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 cv-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[20px] border border-zinc-200/60 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 dark:border-white/[0.06] dark:bg-zinc-900"
              style={{ boxShadow: BLACK_SM }}
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: s.color }}>
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">{s.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">{s.label}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Bottom Footer - Child-Development Pattern */}
      <footer className="mt-12 pb-6 text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 z-20">
        <div className="flex items-center justify-center gap-4">
          <Link href="/about" prefetch className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            About Us
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <Link href="/contact-us" prefetch className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Contact Us
          </Link>
        </div>
      </footer>
    </main>
  );
}
