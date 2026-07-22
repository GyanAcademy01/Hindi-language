"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { FontSizeControl } from "@/components/common/FontSizeControl";
import { InstallButton } from "@/components/common/InstallButton";

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
        <Link href="/" className="group flex items-center gap-2.5" aria-label="हिंदी भाषा होम">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-slate-900 border border-indigo-500/40 shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
            <Image src="/logos/web_logo.png" alt="Hindi Language Logo" fill className="object-cover" priority />
          </div>
          <span className="text-base font-black tracking-tight text-zinc-900 dark:text-white">हिंदी भाषा</span>
        </Link>

        <nav aria-label="मुख्य नेविगेशन" className="hidden sm:flex items-center rounded-xl bg-zinc-100/80 p-1 dark:bg-zinc-900">
          {navigationItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href === "/subjects" && pathname.startsWith("/chapter"));

            return (
              <Link
                key={href}
                href={href}
                prefetch
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
          <InstallButton />
          <FontSizeControl />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
