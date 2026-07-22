/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/lib/site";

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(siteConfig.themeStorageKey) === "dark";
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(siteConfig.themeStorageKey, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(siteConfig.themeStorageKey, "light");
    }
  }, [isDark]);

  return { isDark, mounted, toggleTheme };
}
