---
name: "NEW-web-development"
description: "વેબ એપ ડેવલપમેન્ટ — Next.js App Router + TypeScript + Tailwind + PWA થી student educational web app (Gujarat સરકારી પરીક્ષા તૈયારી) બનાવવી કે સુધારવી, નવું page/subject/chapter/MCQ ઉમેરવું, React component બનાવવો, glassmorphism UI/UX premium કરવું, responsive layout, PDF viewer, theory/test page, SEO — સાથે TypeScript/React/CSS coding standards, impact check, lint/build testing અને web bug fixing. Use for any web app building, frontend feature, page, component, design, coding, review, or build task."
---

# 🌐 Web Development

**યુઝર:** નોન-ટેકનિકલ. કોડ પોતે નહીં લખે — AI એ જ નિર્ણય લઈ, કામ પૂરું કરી, રિપોર્ટ આપવો.

> 🔗 ભાષા, ચોકસાઈ, output format, Git, workflow → **`coding-and-chat`**
> 🔗 લખાણની ગુણવત્તા (MCQ / theory) → **`content-writing`**

---

## 🎯 પ્રોજેક્ટ શું છે

ગુજરાત સરકારી પરીક્ષાની તૈયારી કરતા **વિદ્યાર્થીઓ** માટે educational web app.
મુખ્ય મૂલ્ય: **Theory વાંચવું → MCQ Test આપવો → PDF જોવું** — ઝડપી, ઓફલાઇન, મોબાઇલમાં smooth.

**પ્રાથમિકતા:** Accuracy → મોબાઇલ Performance → સરળ UX → Premium દેખાવ → SEO.

---

## ⚙️ Tech Stack (નિશ્ચિત)

| Layer | Technology | નોંધ |
|:---|:---|:---|
| Framework | **Next.js (latest, App Router)** | `src/app/` |
| Language | **TypeScript (latest)** | strict types |
| UI | **React (latest)** | `React.lazy()` + `Suspense` |
| Styling | **Tailwind CSS (latest)** + CSS variables | OKLCH colors |
| Icons | **Lucide React** | બીજી icon library નહીં |
| PDF | **PDF.js** | `public/pdf.worker.mjs` |
| Analytics | Firebase + Cloudflare | |
| PWA | Service Worker + manifest | offline caching |

> ⚠️ હંમેશા **latest stable**. નવી library ઉમેરતાં પહેલાં પૂછવું — bundle size વધે છે.

---

## 📂 Folder Structure

```
subject-app/
├── public/
│   ├── app-logo.png / brand-logo.png
│   ├── icon-192.png / icon-512.png
│   ├── manifest.json · pdf.worker.mjs · sw.js
│   └── pdfs/
└── src/
    ├── app/
    │   ├── layout.tsx          ← fonts, metadata, SEO
    │   ├── page.tsx            ← Home
    │   ├── globals.css         ← theme + CSS variables
    │   ├── manifest.ts · pdf-viewer.css
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

| શું | ક્યાં |
|:---|:---|
| Reusable UI | `components/ui/` |
| નવું પાનું | `app/<route>/page.tsx` |
| Subject / chapter content | `data/` |
| TypeScript interface | `types/` |
| Helper function | `lib/` |
| Custom hook | `hooks/` |

---

## 🗺️ Routes

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

Modern **Glassmorphism + Gradient accents**, Light ☀️ + Dark 🌙, 5-level font scaling
(14/16/18/20/24px), micro-animations.

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
Headings `'Outfit', 'Inter'` · Body `'Poppins', 'Inter'` · ગુજરાતી `'Noto Sans Gujarati'` ·
Code `monospace`

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

### 🛑 Mobile (<640px) પર બંધ કરવું — performance માટે
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
**📞 Contact** — PC: max-w `900px`, grid **2 col**, social **2 col**, title `2.25rem`.
Mobile: **1 col**, social **1 col**, title `1.5rem`.

---

## 🧩 Reusable Components

`Topbar` · `ThemeToggle` · `FontSizeControl` · `Loader` · `BackArrow` · `BackgroundBlobs` ·
`InstallButton` · `ScrollToTop` · `SettingsModal` · `ErrorBoundary` · `AnalyticsTracker` ·
`Button` · `Card`

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

## 📐 Coding Standards

### TypeScript

| નિયમ | વિગત |
|:---|:---|
| `any` | **ક્યારેય નહીં** — `unknown` + narrow કરવું |
| Typing | બધા props, return values, data structures typed |
| Shared interface | હંમેશા `types/` માં — inline duplicate નહીં |
| Optional | `?` વાપરવું, `\| undefined` union નહીં |
| Enum | union literal (`'light' \| 'dark'`) |
| `@ts-ignore` | નહીં — સાચો type લખવો |

### React / Next.js

| નિયમ | વિગત |
|:---|:---|
| Server first | જરૂર હોય ત્યાં જ `'use client'` |
| One job | 200+ લીટીનો component તોડવો |
| Key | `key` માં index નહીં — સ્થિર `id` |
| useEffect | ઓછામાં ઓછો — derived value render માં ગણવો |
| Heavy component | `React.lazy()` + `Suspense` |
| localStorage | `typeof window !== 'undefined'` guard |
| Image | `next/image` — raw `<img>` નહીં |
| Naming | Component `PascalCase` · hook `useCamelCase` |
| Async | `await` વગરનો promise નહીં — error catch કરવો |

### CSS / Tailwind
- **Design token જ** — random hex/px નહીં
- `globals.css` બદલો = **આખી app** પર અસર — બહુ સાવધાની
- એક જ style બે જગ્યાએ નહીં
- Mobile-first: base = mobile, પછી `sm:` `md:` `lg:`
- `!important` ટાળવું
- Animation માં ફક્ત `transform` / `opacity` (layout property નહીં — jank આવે)

### Data & Content
- Content હંમેશા `data/` files માં — component માં hardcode નહીં
- ID સ્થિર રાખવા — બદલવાથી user નું saved progress તૂટે

### 🔒 Security
- User input sanitize — `dangerouslySetInnerHTML` ટાળવું
- API key / secret કોડમાં નહીં → `.env`
- `NEXT_PUBLIC_` ફક્ત ખરેખર public value માટે
- `.env` `.gitignore` માં હોવી જ જોઈએ

---

## 📉 Impact Check — Edit પહેલાં

| ચકાસવું | કેમ |
|:---|:---|
| કયા pages બદલાશે? | અજાણી જગ્યાએ તૂટે નહીં |
| કયા components વાપરે છે? | ripple effect |
| `globals.css` / CSS variable? | 🛑 **આખી app** પર અસર |
| Type / interface બદલાય? | વાપરતી બધી files ચેક |
| Data ID બદલાય? | 🛑 User નું saved progress તૂટે |

---

## 🤖 Parallel Agents (Subagents)

મોટા વેબ કામને સ્વતંત્ર ભાગમાં વહેંચીને એકસાથે ચલાવવા.
Agent = અલગ સહાયક જે પોતાનું કામ જાતે કરીને પરિણામ પાછું આપે.

### ક્યારે વાપરવો

| ✅ વાપરવો | ❌ નહીં વાપરવો |
|:---|:---|
| યુઝર કહે ("parallel agents થી કરો") | નાનું કામ (1–2 file) |
| 2+ ભાગ સાવ સ્વતંત્ર — અલગ folder/file | ભાગો એકબીજા પર આધારિત હોય |
| યાંત્રિક કામ (PDF copy, icon બનાવવા, convert) | જે કામમાં **મારી પાસેની માહિતી** જ મુખ્ય મૂડી હોય |
| ટેકનિકલી અલગ ટુકડો (PDF viewer, build script) | Design / theme નિર્ણય — એકસૂત્રતા તૂટે |

> ⚠️ **Agent ઠંડો શરૂ થાય છે** — એને project ની કંઈ ખબર નથી. મેં જે લખાણ કે data મહેનતે
> ભેગું કર્યું હોય એ કામ **મારે જ કરવું** — agent ને આપીશ તો એ ફરી શોધશે, સમય વધશે.

**કેટલા:** સામાન્ય રીતે 2–4 agents · **મહત્તમ 10**.
નાનું કામ → 0 · મધ્યમ (2–4 સ્વતંત્ર ભાગ) → 2–4 · મોટું (આખો નવો પ્રોજેક્ટ) → 5–10.

> ⚠️ ભાગ ખરેખર સ્વતંત્ર હોય તો જ સંખ્યા વધારવી — વધુ agents = વધુ ખર્ચ અને મેળવણી અઘરી.

### 🚫 ભાગ પાડવાનો સોનેરી નિયમ

**બે agent ક્યારેય એક જ file ને ના અડે.** ભાગ **file પ્રમાણે** પાડવા, કામ પ્રમાણે નહીં.

| ✅ સાચી વહેંચણી | ❌ ખોટી વહેંચણી |
|:---|:---|
| Agent A → `public/` · Agent B → `app/pdf-view/` | Agent A → "UI સુધારો" · Agent B → "bug fix" |

### 📂 વેબમાં શું વહેંચાય, શું નહીં

| ભાગ | Agent ને આપવો? | કારણ |
|:---|:---:|:---|
| `public/` — PDF, icons, `pdf.worker.mjs` | ✅ સૌથી સારો | સાવ સ્વતંત્ર, યાંત્રિક |
| `app/pdf-view/` — PDF viewer | ✅ | ટેકનિકલી અલગ ટુકડો |
| `app/about/` · `app/contact-us/` | ✅ | સ્વતંત્ર pages |
| નવો એકલો component | ✅ | બીજું કંઈ વાપરતું નથી |
| `data/` — theory, MCQ | 🛑 | લખાણ મારી પાસે છે — હું જ લખું |
| `globals.css` | 🛑 | આખી app પર અસર |
| `lib/data.ts` · `types/` | 🛑 | બધી files વાપરે છે |
| Design system / theme | 🛑 | બે agent = બે અલગ style |
| `layout.tsx` · `package.json` | 🛑 | બધા અડે તો conflict |

### 📝 વેબ agent ને શું આપવું — ફરજિયાત

| # | શું |
|:-:|:---|
| 1 | **પૂરો absolute path** (Windows path, space સાથે) |
| 2 | **બરાબર કઈ files** બનાવવી — "બીજી કોઈ file ને અડવું નહીં" |
| 3 | Next.js version · App Router · TypeScript strict · Tailwind v4 |
| 4 | વાપરવાના CSS variables અને હાલના components ની યાદી |
| 5 | ⛔ નવી library નહીં · icons ફક્ત Lucide |
| 6 | Verify: `npm run lint` + `npx tsc --noEmit` |
| 7 | શું report કરવું — બનાવેલી files + errors |

### ✅ પૂરું થાય પછી

- Agent ના report પર **આંધળો ભરોસો નહીં** — પોતે `npm run build` ચલાવવો
- Agent એ બનાવેલી files જાતે ખોલીને જોવી (design token વાપર્યા છે? `any` તો નથી?)
- Browser માં એ પાનું જાતે ચકાસવું — PC + Mobile બંને
- Progress table માં agent નું કામ પણ એક row

### ⛔ ક્યારેય નહીં
- ❌ બે agent ને એક જ file
- ❌ `globals.css`, `layout.tsx`, `lib/data.ts`, `types/` agent ને
- ❌ Agent ચાલુ હોય ત્યારે એની જ files હું પણ બદલું
- ❌ Agent "થઈ ગયું" કહે એટલે build ચકાસ્યા વગર માની લેવું

---

## 🧪 Testing — દરેક કામ પછી ફરજિયાત

```
npm run lint  →  npm run build  →  tsc type check  →  preview
```

- ✅ Build pass થાય **તો જ** કામ પૂરું
- ✅ **PC + Mobile** બંને viewport
- ✅ **Light + Dark** બંને theme
- ✅ Console માં error/warning નથી
- ✅ બધા links કામ કરે
- ✅ localStorage વાળી feature (theme, font, progress) refresh પછી ટકે
- ❌ "કદાચ ચાલશે" — ક્યારેય નહીં

---

## 🐛 Web-Specific લક્ષણો

સામાન્ય root-cause ક્રમ `coding-and-chat` §7 માં છે. વેબમાં આ ખાસ જોવું:

| લક્ષણ | સંભવિત કારણ |
|:---|:---|
| Hydration mismatch | Server/client અલગ render — `Date`, `Math.random`, `localStorage` render માં |
| "window is not defined" | Client-only કોડ server પર — guard કે `useEffect` |
| CSS લાગુ ના થાય | Specificity, purge, કે `globals.css` order |
| જૂનું જ દેખાય | `.next` cache — clear કરી fresh build |
| Build ચાલે, dev માં નહીં | Server/client boundary કે env variable |
| Layout mobile માં તૂટે | Fixed width, `vw` overflow, missing breakpoint |
| Page ધીમું | મોટી image, blur on mobile, બિનજરૂરી `'use client'` |
| PDF ના ખૂલે | `pdf.worker.mjs` path કે CORS |

**Deep Mode માં આ પણ:** Next.js version · `.next` cache · hydration · client/server boundary ·
CSS specificity · Service Worker જૂનું cache પકડી રાખ્યું છે?

---

## ⚡ Performance

| ધ્યાન | નિયમ |
|:---|:---|
| Image | WebP, `next/image`, યોગ્ય size — મૂળ 4000px નહીં |
| Bundle | નવી library ઉમેરતાં પહેલાં પૂછવું |
| Client component | ઓછામાં ઓછા — દરેક `'use client'` bundle વધારે |
| Mobile | blur / orbs / hover — `<640px` પર બંધ |
| Font | જરૂરી weights જ |
| List | લાંબી હોય તો pagination કે virtualize |

---

## ➕ નવું ઉમેરવાની Checklist

**નવો Subject:** `data/` માં entry → icon/color/color2 → topicCount → `/subjects` પર verify.
**નવું Chapter:** `Topic` interface મુજબ entry → `hasTheory`/`hasTest`/`pdfUrl` → theory + test files.
**નવા MCQ:** `TestQuestion` — 4 options, `correctAnswer` 0–3, **explanation ફરજિયાત**,
`totalQuestions` update.
**નવું Page:** `app/<route>/page.tsx` → metadata → Topbar + BackArrow → PC/Mobile responsive.
**નવો Component:** ઉપરની list ચેક → `components/ui/` → props typed → dark mode + mobile ચેક.

---

## ⛔ વેબમાં ક્યારેય નહીં
- `any` type · `@ts-ignore`
- Random hex / hardcoded px (design token વાપરવો)
- Duplicate component કે duplicate CSS
- Lucide સિવાયની icon library
- Mobile માટે વિચાર્યા વગર blur / animation
- Build ચેક કર્યા વગર "થઈ ગયું"
- Agent ને `globals.css`, `layout.tsx`, `types/` કે shared data file
