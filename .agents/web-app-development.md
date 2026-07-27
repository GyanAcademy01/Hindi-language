---
name: "web-app-development"
description: "વેબ એપ ડેવલપમેન્ટ — Next.js App Router + TypeScript + Tailwind + PWA થી student educational web app (Gujarat સરકારી પરીક્ષા તૈયારી) બનાવવી કે સુધારવી, નવું page/subject/chapter/MCQ ઉમેરવું, React component બનાવવો, glassmorphism UI/UX premium કરવું, responsive layout, PDF viewer, theory/test page, SEO. Use for any web app building, frontend feature, page, component, or design task."
---

# 🌐 Web App Development — Skill

**યુઝર:** નોન-ટેકનિકલ. કોડ પોતે નહીં લખે — AI એ જ નિર્ણય લઈ, કામ પૂરું કરી, **ગુજરાતીમાં** સરળ રિપોર્ટ આપવો.

> 🔗 **સાથે વાપરવી:** કામ કરવાની રીત, testing, bug fixing, coding standards માટે **`web-coding-rules`** skill વાપરવી. આ skill માં ફક્ત **શું બનાવવું** છે તે છે.

---

## 🎯 પ્રોજેક્ટ શું છે

ગુજરાત સરકારી પરીક્ષાની તૈયારી કરતા **વિદ્યાર્થીઓ** માટે educational web app.
મુખ્ય મૂલ્ય: **Theory વાંચવું → MCQ Test આપવો → PDF જોવું** — ઝડપી, ઓફલાઇન, મોબાઇલમાં પણ smooth.

**પ્રાથમિકતા ક્રમ:** Accuracy → મોબાઇલ Performance → સરળ UX → Premium દેખાવ → SEO.

---

## ⚙️ Tech Stack (નિશ્ચિત)

| Layer | Technology | નોંધ |
|:---|:---|:---|
| Framework | **Next.js (latest, App Router)** | `src/app/` structure |
| Language | **TypeScript (latest)** | strict types |
| UI | **React (latest)** | `React.lazy()` + `Suspense` |
| Styling | **Tailwind CSS (latest)** + CSS variables | OKLCH colors |
| Icons | **Lucide React** | બીજી icon library ના વાપરવી |
| PDF | **PDF.js** | `public/pdf.worker.mjs` |
| Analytics | **Firebase Analytics** + Cloudflare Analytics | |
| PWA | Service Worker + manifest | offline caching |

> ⚠️ હંમેશા **latest stable version** વાપરવું. નવી library ઉમેરતાં પહેલાં પૂછવું — bundle size વધે છે.

---

## 📂 Folder Structure (આ જ pattern જાળવવો)

```
subject-app/
├── public/
│   ├── app-logo.png / brand-logo.png
│   ├── icon-192.png / icon-512.png
│   ├── manifest.json
│   ├── pdf.worker.mjs
│   ├── sw.js
│   └── pdfs/
└── src/
    ├── app/
    │   ├── layout.tsx          ← fonts, metadata, SEO
    │   ├── page.tsx            ← Home
    │   ├── globals.css         ← theme + CSS variables
    │   ├── manifest.ts
    │   ├── pdf-viewer.css
    │   ├── about/ contact-us/ pdf-view/
    │   └── subjects/
    │       ├── page.tsx
    │       ├── [subjectId]/page.tsx
    │       └── [subjectId]/[topicId]/page.tsx
    ├── components/
    │   ├── common/   ← FontSizeControl, ThemeToggle
    │   ├── layout/   ← Topbar
    │   └── ui/       ← Button, Card, Loader
    ├── config/ data/ hooks/ lib/ types/
```

**નવો file ક્યાં મૂકવો:**

| શું | ક્યાં |
|:---|:---|
| Reusable UI | `components/ui/` |
| નવું પાનું | `app/<route>/page.tsx` |
| Subject / chapter content | `data/` |
| TypeScript interface | `types/` |
| Helper function | `lib/` |
| Custom hook | `hooks/` |

---

## 🗺️ Routes & Navigation

| Route | પાનું |
|:---|:---|
| `/` | Home — Hero + Feature cards + Stats |
| `/subjects` | વિષયોની યાદી |
| `/subjects/[id]` | પ્રકરણોની યાદી |
| `/subjects/[id]/[topicId]` | Theory + MCQ Test tabs |
| `/pdf-view?file=...` | PDF viewer |
| `/about` · `/contact-us` | About / Contact |

પ્રવાહ: Home → Subjects → Chapters → (Theory / Test / PDF)

---

## 🎨 Design System — Premium Glassmorphism

### Style
Modern **Glassmorphism + Gradient accents**, Light ☀️ + Dark 🌙 theme, 5-level font scaling (14/16/18/20/24px), micro-animations.

### Colors

| રંગ | Value | વપરાશ |
|:---|:---|:---|
| 💜 Violet | `#7c3aed` / `oklch(0.55 0.24 280)` | Primary, CTA, gradient start |
| 💙 Blue | `#3b82f6` / `oklch(0.60 0.18 195)` | Links, badges |
| 💗 Pink | `#ec4899` / `#db2777` | Gradient middle |
| 🧡 Orange | `#f97316` / `#f59e0b` | Gradient end, warning |
| 💚 Emerald | `#10b981` | ✅ સાચો જવાબ |
| ❤️ Red | `#ef4444` | ❌ ખોટો જવાબ |
| 🩵 Cyan `#06b6d4` · 💜 Indigo `#6366f1` | | Highlights / secondary |

**Background:** Light `oklch(0.98 0.01 220)` · Dark `oklch(0.15 0.01 250)`
**Card BG:** Light `rgba(255,255,255,0.7–0.95)` · Dark `rgba(30,41,59,0.7–0.9)`

```css
/* CTA / Hero gradient */
linear-gradient(135deg, #7c3aed 0%, #ec4899 55%, #f97316 100%)
/* Text gradient */
linear-gradient(135deg, oklch(0.50 0.24 280), oklch(0.55 0.18 195))
```

### Glass Card (standard)
```css
background: rgba(255,255,255,0.7);
backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.6);
border-radius: 20px;              /* mobile: 16px */
padding: 1.75rem;                 /* mobile: 1.25rem */
box-shadow: 0 8px 32px rgba(31,38,135,0.07);
transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
/* hover: translateY(-4px) + shadow 0 12px 40px rgba(0,0,0,0.1) */
```

### Typography
Headings `'Outfit', 'Inter'` · Body `'Poppins', 'Inter'` · ગુજરાતી `'Noto Sans Gujarati'` · Code `monospace`

### Animations

| નામ | વપરાશ | સમય |
|:---|:---|:---|
| `orb-drift` | background floating orbs | 15–25s ∞ |
| `float` / `pulse-glow` / `shimmer` | floating / glow / CTA sweep | 6s / 2s / 3s ∞ |
| `correct-bounce` / `wrong-shake` | જવાબ feedback | 0.5s once |
| `ring-draw` | score ring | 1.5s once |
| `fadeUp` / `contactCardIn` | card entrance (staggered 0.1s) | 0.5–0.6s |

### Spacing & Radius
`--spacing-xs 4px · sm 8px · md 12px · lg 16px · xl 20px · 2xl 24px · 3xl 30px`
Radius: small 7–8px · medium 12–14px · large 16–20px · pill 9999px

---

## 📱💻 PC અને Mobile — અલગ વિચારવું (ફરજિયાત)

**Breakpoints:** 480 / 640 / 768 / 1024 / 1280px — mobile-first.

### 🛑 Mobile (<640px) પર આ બંધ કરવું — performance માટે
- `backdrop-filter: blur()` → disabled
- Animated orbs / floating particles → `display: none`
- Hover effects → disabled (touch screen પર useless)

### દરેક પાનાના device sizes

**🏠 Home**

| Element | 🖥️ PC >1024 | 📱 Tablet 640–1024 | 📲 Mobile <640 |
|:---|:---|:---|:---|
| Container | max-w `1400px`, pad `0 16px` | 100% | 100%, pad `0` |
| Logo | `200×80` (top `-15px`) | scaled | `160×60` (top `0`) |
| Hero Title | `2.4rem` w900 | `2rem` | `1.9rem` |
| Tagline | `0.95rem` | `0.9rem` | `0.82rem` |
| Stats Bar | pad `16px 12px`, blur 20px | standard | pad `14px 6px`, **blur off** |
| Feature Card | pad `14px 18px`, icon `44×44` | standard | pad `12px 14px`, icon `38×38` |
| CTA Button | pad `16px 24px`, `1.15rem` | standard | pad `14px 20px`, `1.05rem` |
| Orbs / Hover | ✅ | ✅ | 🛑 બંધ |

**📚 Chapter List**

| Element | PC | Tablet | Mobile |
|:---|:---|:---|:---|
| Grid | **3 col** | **2 col** | **1 col** |
| Gap | `20px` | `16px` | `8px` |
| Card | pad `1.8rem`, r `20px` | `1.5rem` | `1.3rem`, r `18px` |
| Number badge | `45×45`, `1.3rem` | `36×36` | `30×30`, `1rem` |
| Action button | min-w `80px`, `0.85rem` | standard | min-w `65px`, `0.75rem` |

**📖 Theory**

| Element | PC | Tablet | Mobile |
|:---|:---|:---|:---|
| Wrapper | max-w `900px`, w `95%` | `900px` | w `99%` |
| Card | pad `18px`, r `16px` | `16px` | `6–10px`, r `8px` |
| Title / Content | `1.5rem` / `1.05rem` lh 1.7 | `1.3rem` / `1rem` | `1.3rem` / `0.95rem` |
| Inner grid | 2 col | 2 col | **1 col** |

**📝 MCQ Test**

| Element | PC | Tablet | Mobile |
|:---|:---|:---|:---|
| Test-select grid | **5 col** | **3 col** | **2 col** |
| Shell | `min(100%,800px)`, r `26px` | pad `16px`, r `24px` | pad `14px`, r `18px` |
| Question | `1.08rem` (num `2.8rem`) | standard | `0.88rem` (num `1.95rem`) |
| Options grid | **2 col**, gap 12px | **1 col** | **1 col**, gap 8px |
| Footer | `46px 0.9fr 1.15fr`, h `46px` | `46px 1fr 1fr` | min-h `40px`, r `13px` |
| Score circle / stats | standard / 3 col | 1 col | `120×120` / 1 col |

**📄 PDF Viewer** — PC: full canvas + zoom pill bar. Mobile: compact topbar + pinch-to-zoom.
**ℹ️ About** — PC: max-w `800px`, features **2 col**. Mobile: pad `20px 16px`, **1 col**.
**📞 Contact** — PC: max-w `900px`, grid **2 col**, social **2 col**, title `2.25rem`. Mobile: **1 col**, social **1 col**, title `1.5rem`.

---

## 🧩 Reusable Components

`Topbar` · `ThemeToggle` · `FontSizeControl` · `Loader` · `BackArrow` · `BackgroundBlobs` · `InstallButton` · `ScrollToTop` · `SettingsModal` · `ErrorBoundary` · `AnalyticsTracker` · `Button` · `Card`

> નવું UI બનાવતાં પહેલાં **પહેલાં આ list ચેક કરવી** — duplicate component ના બનાવવો.

---

## 📊 Data Types (આ interfaces જ વાપરવા)

```typescript
interface Subject {
  id: string; name: string; icon: string;      // emoji
  topicCount: number; color: string; color2: string; description: string;
}
interface Topic {
  id: string; number: string;                   // "01"
  title: string; fullTitle: string;
  hasTheory: boolean; hasTest: boolean; pdfUrl?: string;
}
interface TheoryData {
  chapterId?: string; chapterTitle: string; description?: string;
  sections: TheorySection[]; mindMap?: MindMapSection[];
}
interface TheorySection {
  icon?: string; title: string;
  content?: TheoryContentBlock[];               // string | {text,isBold} | {title,points,table}
  table?: TheoryTable; imageUrl?: string; illustration?: string;
}
interface TheoryTable { headers: string[]; rows: (string[] | { cells: string[] })[]; }
interface MindMapSection { id?: string; title?: string; description?: string; nodes?: MindMapNode[]; }
interface MindMapNode { title: string; points: { text: string; isBold?: boolean }[]; }
interface TestData { chapterId: string; chapterTitle: string; totalQuestions: number; questions: TestQuestion[]; }
interface TestQuestion {
  id: number; question: string; options: string[];   // 4
  correctAnswer: number;                              // 0–3
  explanation: string;
}
```

---

## 🎯 UX Patterns (જાળવવા)

| Pattern | રીત |
|:---|:---|
| Code splitting | `React.lazy()` + `Suspense` |
| Dark mode | CSS variables toggle |
| Font scaling | 5 levels, `localStorage` માં save |
| Progress tracking | `localStorage` — chapter/quiz progress |
| Offline | Service Worker caching |
| SEO | metadata, JSON-LD, sitemap, robots.txt |
| Accessibility | `prefers-reduced-motion`, print media query |
| Images | WebP · thumbnails ~300×300 · logos ~200×200 |

---

## ➕ નવું ઉમેરવાની Checklist

**નવો Subject:** `data/` માં subject entry → icon/color/color2 → topicCount → `/subjects` પર દેખાય તે verify.
**નવું Chapter (Topic):** `Topic` interface મુજબ entry → `hasTheory` / `hasTest` / `pdfUrl` સેટ → theory + test data files.
**નવા MCQ:** `TestQuestion` — 4 options, `correctAnswer` 0–3, **explanation ફરજિયાત**, `totalQuestions` update કરવો.
**નવું Page:** `app/<route>/page.tsx` → metadata → Topbar + BackArrow → PC/Mobile બંને responsive.
**નવો Component:** પહેલાં ઉપરની list ચેક કરવી → `components/ui/` માં → props typed → dark mode + mobile ચેક.

---

## ⛔ ક્યારેય નહીં (design/build)
- Duplicate component કે duplicate CSS બનાવવો
- Mobile માટે વિચાર્યા વગર blur / animation ઉમેરવું
- Lucide સિવાયની icon library વાપરવી
- Design system બહારના random રંગ વાપરવા
- એક જ રસ્તો બતાવી છોડી દેવું — હંમેશા વિકલ્પ + ભલામણ

