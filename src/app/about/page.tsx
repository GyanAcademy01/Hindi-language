import Link from "next/link";
import Image from "next/image";
import { BookOpen, CheckCircle, FileText, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative flex-1 overflow-x-hidden overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-16 h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-600/15" />
        <div className="absolute right-[-8%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/15 blur-[120px] dark:bg-violet-600/12" />
        <div className="absolute bottom-[-6%] left-1/4 h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[120px] dark:bg-cyan-500/10" />
        <div className="home-bg-grid" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="relative mb-6 flex min-h-[36px] items-center justify-center">
          <div className="absolute left-0">
            <Link href="/" prefetch>
              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] transition-all duration-75 cursor-pointer shadow-[0_3px_8px_rgba(239,68,68,0.15)]" aria-label="पीछे जाएं">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-md shadow-black/5 dark:shadow-black/20">
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight">हमारे बारे में</span>
          </div>
        </div>

        {/* Hero Banner Card */}
        <div className="relative overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20">
              <Image src="/logos/web_logo.png" alt="Gyan Academy Logo" width={80} height={80} className="object-cover" priority />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <GraduationCap className="h-3.5 w-3.5" />
                ज्ञान अकादमी (Gyan Academy)
              </span>
              <h1 className="mt-2 text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                हिंदी भाषा शिक्षण प्लेटफ़ॉर्म
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                कक्षा 6 से 8 तक की हिंदी भाषा, व्याकरण और पद्धतिशास्त्र सामग्री—पढ़ने, समझने और अभ्यास करने के लिए एक आधुनिक शिक्षण प्लेटफ़ॉर्म।
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-[20px] border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">समृद्ध थ्योरी नोट्स</h2>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              प्रत्येक अध्याय के मुख्य बिंदुओं, व्याकरण नियमों और उदाहरणों का सरल हिंदी में स्पष्ट विश्लेषण।
            </p>
          </div>

          <div className="rounded-[20px] border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h2 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">ऑनलाइन टेस्ट और अभ्यास</h2>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              आत्म-मूल्यांकन के लिए त्वरित परिणाम और स्कोरबोर्ड के साथ अध्यायवार एमसीक्यू टेस्ट।
            </p>
          </div>

          <div className="rounded-[20px] border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">फ्री पीडीएफ अध्ययन सामग्री</h2>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ऐप में ही बिल्ट-इन व्यूअर के साथ पीडीएफ फाइलें पढ़ने की सुचारू सुविधा।
            </p>
          </div>

          <div className="rounded-[20px] border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">फास्ट और सुरक्षित</h2>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Next.js 16 Server Components और Edge CDN तकनीक के साथ 0ms अतिरिक्त विसंगति लोड समय।
            </p>
          </div>
        </div>

        {/* Bottom Academy Footer Note */}
        <div className="mt-6 rounded-[20px] border border-indigo-500/20 bg-indigo-50/50 p-5 text-center dark:bg-indigo-950/20">
          <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            ज्ञान अकादमी (Gyan Academy) — गांधीनगर, गुजरात
          </p>
          <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
            TET, TAT, Competitive Exams & School Subject Learning Series
          </p>
        </div>
      </div>
    </main>
  );
}
