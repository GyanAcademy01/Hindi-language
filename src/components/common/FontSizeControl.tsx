"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useFontSize,
  FONT_SIZE_ORDER,
  FONT_SIZE_CONFIG,
} from "@/hooks/useFontSize";

export function FontSizeControl() {
  const { fontSize, mounted, changeFontSize } = useFontSize();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ── Topbar Button ── */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 cursor-pointer hover:bg-zinc-200/70 dark:hover:bg-zinc-700 transition-all shadow-sm"
        aria-label="Text size settings"
        title="Text Size"
      >
        {/* Two-size "Aa" icon */}
        <span className="flex items-end gap-[1px] leading-none select-none font-black">
          <span className="text-[9px]">A</span>
          <span className="text-[12px] -mb-[1px]">A</span>
        </span>
      </motion.button>

      {/* ── Dropdown Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 z-50"
            style={{ width: "210px" }}
          >
            {/* Card Container */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-indigo-200/80 dark:border-zinc-800 shadow-xl overflow-hidden backdrop-blur-xl">
              {/* ── Header ── */}
              <div className="flex items-center gap-2.5 px-3.5 pt-3.5 pb-2.5 border-b border-zinc-100 dark:border-zinc-800">
                <div
                  className="flex items-center justify-center w-7 h-7 rounded-lg text-white text-[11px] font-black"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: "0 2px 6px rgba(99,102,241,0.4)",
                  }}
                >
                  Aa
                </div>
                <span className="text-xs font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Text Size (अક્ષર કદ)
                </span>
              </div>

              {/* ── Options ── */}
              <div className="px-2 py-2 space-y-0.5">
                {FONT_SIZE_ORDER.map((level) => {
                  const cfg = FONT_SIZE_CONFIG[level];
                  const isActive = fontSize === level;

                  const labelSize =
                    level === "xsmall"
                      ? "text-xs"
                      : level === "small"
                      ? "text-xs sm:text-sm"
                      : level === "medium"
                      ? "text-sm"
                      : level === "large"
                      ? "text-base"
                      : "text-lg";

                  return (
                    <motion.button
                      key={level}
                      onClick={() => {
                        changeFontSize(level);
                        setIsOpen(false);
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-150 text-left ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300"
                          : "hover:bg-zinc-50 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      <span className={`font-bold leading-none ${labelSize} ${isActive ? "text-indigo-600 dark:text-indigo-300 font-extrabold" : ""}`}>
                        {cfg.label}
                      </span>

                      <span
                        className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ml-2 shrink-0 ${
                          isActive
                            ? "bg-indigo-200 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                            : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                        }`}
                      >
                        {cfg.pxNum}px
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="h-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
