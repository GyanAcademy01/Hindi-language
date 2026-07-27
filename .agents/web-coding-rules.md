---
name: "web-coding-rules"
description: "વેબ કોડિંગના ટેકનિકલ નિયમો — TypeScript/React/Next.js/CSS coding standards, web-specific bug fixing (hydration, cache, build error), impact check, npm lint/build/preview testing checklist, performance અને security નિયમો. Use for every web coding task, edit, fix, refactor, review, or build."
---

# 🛠️ Web Coding Rules — ટેકનિકલ નિયમો

**વેબ કોડ કેવી રીતે લખવો અને ચકાસવો.**

> 🔗 **Base નિયમો `chat-style` માંથી આવે છે** — ગુજરાતી ભાષા, Zero Guessing, વિકલ્પો + ભલામણ, workflow, parallel, સમરી format. અહીં ફક્ત **વેબ-specific** વાત છે.
> 🔗 **શું બનાવવું** (stack, design system, structure) → `web-app-development`
> 🔗 **બદલતાં પહેલાં backup** → `git-backup-rules`

---

## 📐 Coding Standards

### TypeScript

| નિયમ | વિગત |
|:---|:---|
| `any` | **ક્યારેય નહીં** — ખબર ના હોય તો `unknown` + narrow કરવું |
| Typing | બધા props, return values, data structures typed |
| Shared interface | હંમેશા `types/` માં — inline duplicate નહીં |
| Optional | `?` વાપરવું, `\| undefined` union નહીં |
| Enum | union literal (`'light' \| 'dark'`) પસંદ કરવું |
| `@ts-ignore` | નહીં — સાચો type લખવો |

### React / Next.js

| નિયમ | વિગત |
|:---|:---|
| Server first | જરૂર હોય ત્યાં જ `'use client'` — hook / event / browser API હોય તો |
| One job | 200+ લીટીનો component હોય તો તોડવો |
| Key | `key` માં index નહીં — સ્થિર `id` |
| useEffect | ઓછામાં ઓછો — derived value render માં જ ગણવો |
| Heavy component | `React.lazy()` + `Suspense` |
| localStorage | હંમેશા `typeof window !== 'undefined'` guard |
| Image | `next/image` — raw `<img>` નહીં |
| Naming | Component `PascalCase` · hook `useCamelCase` · file component જેવો |
| Async | `await` વગરનો promise નહીં — error catch કરવો |

### CSS / Tailwind

- **Design token જ** — random hex/px નહીં, CSS variables વાપરવા
- `globals.css` બદલો = **આખી app** પર અસર — બહુ સાવધાની
- એક જ style બે જગ્યાએ નહીં — utility કે component class બનાવવો
- Mobile-first: base = mobile, પછી `sm:` `md:` `lg:`
- `!important` ટાળવું — specificity સુધારવી
- Animation માં ફક્ત `transform` / `opacity` (layout property નહીં — jank આવે)

### Data & Content
- Content હંમેશા `data/` files માં — component માં hardcode નહીં
- ID સ્થિર રાખવા — બદલવાથી user નું saved progress તૂટે
- લખાણની ગુણવત્તા માટે → **`content-writing`** skill

### 🔒 Security
- User input render કરતાં પહેલાં sanitize — `dangerouslySetInnerHTML` ટાળવું
- API key / secret કોડમાં નહીં → `.env` માં
- `NEXT_PUBLIC_` ફક્ત ખરેખર public value માટે — secret ક્યારેય નહીં
- `.env` files `.gitignore` માં હોવી જ જોઈએ

---

## 📉 Impact Check — Edit પહેલાં

આ file બદલવાથી:

| ચકાસવું | કેમ |
|:---|:---|
| કયા pages બદલાશે? | અજાણી જગ્યાએ તૂટે નહીં |
| કયા components વાપરે છે? | ripple effect |
| `globals.css` / CSS variable? | 🛑 **આખી app** પર અસર |
| Type / interface બદલાય? | વાપરતી બધી files ચેક કરવી |
| Data ID બદલાય? | 🛑 User નું saved progress તૂટે |
| Build તૂટશે? | |

---

## 🧪 Testing — દરેક કામ પછી ફરજિયાત

```
npm run lint  →  npm run build  →  tsc type check  →  preview
```

**Checklist:**

- ✅ Build pass થાય **તો જ** કામ પૂરું ગણવું
- ✅ **PC + Mobile** બંને viewport માં preview
- ✅ **Light + Dark** બંને theme
- ✅ Console માં error/warning નથી
- ✅ Navigation બધા links કામ કરે
- ✅ localStorage વાળી feature (theme, font, progress) refresh પછી ટકે
- ❌ "કદાચ ચાલશે" — ક્યારેય નહીં

---

## 🐛 Web-Specific Bug Fixing

**મૂળ કારણ પહેલાં** (સામાન્ય ક્રમ `chat-style` માં છે). વેબમાં આ ખાસ જોવું:

| લક્ષણ | સંભવિત કારણ |
|:---|:---|
| Hydration mismatch error | Server/client અલગ render — `Date`, `Math.random`, `localStorage` render માં |
| "window is not defined" | Client-only કોડ server પર ચાલ્યો — guard કે `useEffect` જોઈએ |
| CSS લાગુ ના થાય | Specificity, purge થઈ ગયું, કે `globals.css` નું order |
| જૂનું જ દેખાય | `.next` cache — clear કરી fresh build |
| Build ચાલે, dev માં નહીં (કે ઊલટું) | Server/client boundary કે env variable |
| Layout mobile માં તૂટે | Fixed width, `vw` overflow, કે missing breakpoint |
| Page ધીમું | મોટી image, blur on mobile, બિનજરૂરી `'use client'` |
| PDF ના ખૂલે | `pdf.worker.mjs` path કે CORS |

**Deep Mode માં વેબ માટે આ પણ ચકાસવું:** Next.js version · `.next` cache · hydration · client/server boundary · CSS specificity · Service Worker જૂનું cache પકડી રાખ્યું છે?

---

## ⚡ Performance નિયમો

| ધ્યાન | નિયમ |
|:---|:---|
| Image | WebP, `next/image`, યોગ્ય size — મૂળ 4000px ના મૂકવી |
| Bundle | નવી library ઉમેરતાં પહેલાં પૂછવું |
| Client component | ઓછામાં ઓછા — દરેક `'use client'` bundle વધારે |
| Mobile | blur / orbs / hover — `<640px` પર બંધ |
| Font | જરૂરી weights જ load કરવા |
| List | લાંબી list હોય તો pagination કે virtualize |

---

## ⛔ ક્યારેય નહીં
- `any` type વાપરવો
- Random hex / hardcoded px (design token વાપરવો)
- Build ચેક કર્યા વગર "થઈ ગયું" કહેવું
- Duplicate component / duplicate CSS
- Secret કોડમાં લખવો
- Mobile માટે વિચાર્યા વગર blur/animation ઉમેરવું

## ✅ હંમેશા
- Strict TypeScript, typed props
- Impact check → પછી edit
- Lint + Build + PC/Mobile + Light/Dark verify
- Production-ready quality

