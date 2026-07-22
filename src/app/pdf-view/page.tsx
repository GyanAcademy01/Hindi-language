"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import { ShieldCheck, Eye, ArrowLeft } from "lucide-react";

function PdfViewerContent() {
  const searchParams = useSearchParams();
  const fileUrl = searchParams.get("file");
  const title = searchParams.get("title") || "PDF Viewer";
  const color = searchParams.get("color") || "#6366f1";

  // Prevent right-click, keyboard shortcuts for Print/Save/Inspect
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+P, Ctrl+S, Ctrl+U, F12, Cmd+P, Cmd+S
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "p" || e.key === "P" || e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U")
      ) {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!fileUrl) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">PDF नहीं मिला</h2>
        <Link href="/subjects" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md">
          <ArrowLeft className="h-4 w-4" />
          वापस जाएं
        </Link>
      </div>
    );
  }

  // Format PDF URL to strip toolbar/download options in native viewers
  const securePdfUrl = `${fileUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;

  return (
    <div className="w-full flex-1 flex flex-col select-none" onContextMenu={(e) => e.preventDefault()}>
      {/* Header Bar */}
      <div className="relative flex min-h-[46px] items-center justify-between shrink-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.history.back()}
            aria-label="पीछे जाएं"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] transition-all duration-75 shadow-[0_3px_8px_rgba(239,68,68,0.15)] cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </button>
          <span className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white truncate max-w-[180px] sm:max-w-[360px]">
            {title}
          </span>
        </div>

        {/* Read-Only Security Badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>सुरक्षित पठन (Read-Only)</span>
        </div>
      </div>

      {/* Embedded Secure PDF Viewer Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 w-full relative bg-zinc-900 overflow-hidden"
      >
        {/* PDF Embedded View with Native Object + Fallback */}
        <object
          data={securePdfUrl}
          type="application/pdf"
          className="w-full h-full absolute inset-0 border-0 pointer-events-auto"
        >
          <iframe
            src={securePdfUrl}
            className="w-full h-full absolute inset-0 border-0"
            title={`Secure PDF: ${title}`}
          />
        </object>

        {/* Invisible Overlay Shield to Protect Context Menu & Right Click */}
        <div
          className="absolute inset-0 pointer-events-none z-10 border-4 border-transparent"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

export default function PdfViewPage() {
  return (
    <main className="relative flex-1 flex flex-col w-full overflow-hidden">
      <Suspense fallback={<div className="flex h-full items-center justify-center bg-zinc-900 text-white"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500" /></div>}>
        <PdfViewerContent />
      </Suspense>
    </main>
  );
}
