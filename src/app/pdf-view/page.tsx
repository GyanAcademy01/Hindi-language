"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

function PdfViewerContent() {
  const searchParams = useSearchParams();
  const fileUrl = searchParams.get('file');
  const title = searchParams.get('title') || 'PDF Viewer';
  const color = searchParams.get('color') || '#3b82f6';

  if (!fileUrl) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-bold">PDF नहीं मिला</h2>
        <Link href="/subjects" className="text-primary mt-4 inline-block">← वापस जाएं</Link>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Header Row */}
      <div className="relative flex min-h-[44px] items-center justify-center shrink-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute left-2">
          <button
            onClick={() => window.history.back()}
            className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] transition-all duration-75 shadow-[0_3px_8px_rgba(239,68,68,0.15)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </button>
        </div>

        {/* Capsule Title */}
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 truncate max-w-[200px] sm:max-w-[400px]">
            {title}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>
          <span className="text-sm font-bold" style={{ color: color }}>पठन</span>
        </div>
      </div>

      {/* Viewer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-900"
      >
        <iframe src={`${fileUrl}#view=FitH`} className="w-full h-full absolute inset-0 border-0" title={`PDF: ${title}`} />
      </motion.div>
    </div>
  );
}

export default function PdfViewPage() {
  return (
    <main className="relative flex-1 flex flex-col w-full overflow-hidden">
      <Suspense fallback={<div className="flex h-full items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" /></div>}>
        <PdfViewerContent />
      </Suspense>
    </main>
  );
}
