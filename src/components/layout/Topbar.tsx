"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, LayoutGrid, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const navigationItems = [
  { href: "/", label: "होम", icon: Home },
  { href: "/subjects", label: "विषय", icon: LayoutGrid },
];

export function Topbar() {
  const pathname = usePathname();

  if (pathname === "/pdf-view") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="ज्ञान अकादमी होम">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
            <BookOpen className="h-4 w-4" />
          </span>
          <span className="hidden sm:block">
            <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.12em] text-indigo-600 dark:text-indigo-300">
              <Sparkles className="h-3 w-3" />
              ज्ञान अकादमी
            </span>
            <span className="mt-0.5 block text-sm font-black tracking-tight text-zinc-900 dark:text-white">हिंदी भाषा</span>
          </span>
          <span className="text-sm font-black text-zinc-900 sm:hidden dark:text-white">हिंदी भाषा</span>
        </Link>

        <nav aria-label="मुख्य नेविगेशन" className="hidden items-center rounded-xl bg-zinc-100/80 p-1 dark:bg-zinc-900 md:flex">
          {navigationItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href === "/subjects" && pathname.startsWith("/chapter"));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition-all ${
                  isActive
                    ? "bg-white text-indigo-600 shadow-sm dark:bg-zinc-800 dark:text-indigo-300"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700 sm:inline-flex dark:bg-emerald-500/10 dark:text-emerald-300">
            सीखना जारी रखें
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
