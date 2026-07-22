import type { Metadata, Viewport } from "next";
import { Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import { Topbar } from "@/components/layout/Topbar";
import "./globals.css";

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-sans",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Hindi भाषा WebApp",
    template: "%s | Hindi Language",
  },
  description: "हिंदी भाषा सीखने के लिए Theory और Test - कक्षा 6 से 8 · व्याकरण · पद्धतिशास्त्र",
  keywords: ["Hindi Language", "हिंदी व्याकरण", "भाषा", "पद्धतिशास्त्र"],
  authors: [{ name: "Hindi Language" }],
  creator: "Hindi Language",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" className={`${notoDevanagari.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('hindi-lang-theme');
                  if (t === 'dark') { document.documentElement.classList.add('dark'); }
                  var fsSizes = {xsmall:'14px',small:'15px',medium:'16px',large:'18px',xlarge:'22px'};
                  var fs = localStorage.getItem('hindi-lang-font-size');
                  var activePx = (fs && fsSizes[fs]) ? fsSizes[fs] : (window.innerWidth < 768 ? '15px' : '16px');
                  document.documentElement.setAttribute('data-font-size', fs || (window.innerWidth < 768 ? 'small' : 'medium'));
                  document.documentElement.style.setProperty('--content-font-size', activePx);
                  document.documentElement.style.fontSize = activePx;
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="h-full flex flex-col bg-gradient-main transition-colors duration-300">
        <Topbar />
        <div style={{ fontSize: "var(--content-font-size, 16px)" }} className="content-wrap flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
