"use client";

import { useState, useEffect } from "react";
import { Download, Smartphone } from "lucide-react";

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already running in standalone mode (installed)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsStandalone(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback instruction if browser doesn't support beforeinstallprompt event directly
      alert("ऐप इंस्टॉल करने के लिए ब्राउज़र मेनू (Three Dots) में जा कर 'Add to Home Screen' चुनें।");
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
      setDeferredPrompt(null);
    }
  };

  if (isStandalone) return null;

  return (
    <button
      onClick={handleInstallClick}
      aria-label="ऐप इंस्टॉल करें"
      title="ऐप इंस्टॉल करें (Install App)"
      className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-2.5 py-1.5 text-xs font-extrabold text-white shadow-md shadow-indigo-600/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
    >
      <Download className="h-3.5 w-3.5 animate-bounce" />
      <span className="hidden sm:inline">ऐप इंस्टॉल करें</span>
      <span className="sm:hidden">इंस्टॉल</span>
    </button>
  );
}
