import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import { Topbar } from "@/components/layout/Topbar";
import "./globals.css";

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-sans",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hindi भाषा - Gyan Academy",
  description: "हिंदी भाषा सीखने के लिए Theory और Test - Gyan Academy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" className={`${notoDevanagari.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('hindi-lang-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();` }} />
      </head>
      <body className="h-full flex flex-col bg-gradient-main transition-colors duration-300">
        <Topbar />
        <div className="content-wrap flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
