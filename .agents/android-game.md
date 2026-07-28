---
name: "android-game"
description: "Android native 2D/2.5D ગેમ બનાવવી કે સુધારવી — Kotlin + Android Studio, rendering પસંદગી, game loop, entity/system architecture, sprite/animation, physics, touch controls, premium game UI/UX અને juice, assets, sound, 60 FPS optimization, crash fix, APK/AAB build, Play Store publish. Use for any Android game development, game logic, game asset, or mobile game task."
---

# 🎮 Android Game Development

**ધ્યેય:** માત્ર કોડ નહીં — **સંપૂર્ણ ગેમ** (gameplay + feel + polish + Play Store ready).

**યુઝર નોન-ટેકનિકલ છે** — AI એ **પોતાની સમજથી** engine, logic, assets, UI/UX, optimization
નક્કી કરી કામ પૂરું કરવું.

> 🔗 ભાષા, ચોકસાઈ, output format, Git, workflow → **`coding-and-chat`**

**ગેમ-specific Zero Guessing:** SDK/Gradle/library version → 🔍 web search · કોડ ચાલશે? →
🧪 **real device પર run** · FPS/memory/battery નો દાવો → 📊 **Profiler થી માપવું**, અંદાજ નહીં.

---

## 🛠️ Tech Approach — Native Android

**મુખ્ય:** Kotlin (latest) + Android Studio · min SDK 24 · target SDK latest · Gradle Kotlin DSL

### રેન્ડરિંગ કઈ રીતે — AI પોતે નક્કી કરે

| ગેમનો પ્રકાર | રીત | ક્યારે |
|:---|:---|:---|
| સાદી 2D (puzzle, card, quiz, board) | **Jetpack Compose Canvas** | UI-heavy, ઓછા moving objects |
| 2D action (platformer, runner, shooter) | **SurfaceView + Canvas** + custom game loop | 60 FPS, ઘણા sprites |
| ભારે 2D / 2.5D (isometric, parallax, lighting) | **GLSurfaceView + OpenGL ES 3.0** | shaders, batching, 500+ sprites |
| ઝડપી development, physics જોઈએ | **LibGDX** (native જ રહે) | physics, particle, tilemap તૈયાર |

**પૂછવું નહીં — પોતે પસંદ કરી, ગુજરાતીમાં 2 લીટીમાં કારણ સમજાવવું.** પછી user ના પાડે તો બદલવું.

### 2.5D એટલે શું (સરળ ભાષામાં)
2D sprites ને depth નો ભ્રમ — isometric grid, parallax layers, Y-sorting (નીચેનું object આગળ),
shadow, scale-by-depth. સાચું 3D નહીં, પણ દેખાય 3D જેવું.

---

## 📂 Project Structure

```
game/
├── app/src/main/
│   ├── java/com/<pkg>/
│   │   ├── MainActivity.kt
│   │   ├── core/          ← GameLoop, GameView, Renderer, Time
│   │   ├── entity/        ← Player, Enemy, Projectile, Base entity
│   │   ├── system/        ← Physics, Collision, Spawner, AI, Score
│   │   ├── input/         ← TouchController, Joystick, GestureHandler
│   │   ├── graphics/      ← SpriteSheet, Animator, Camera, ParticleSystem
│   │   ├── audio/         ← SoundPool manager, MusicPlayer
│   │   ├── ui/            ← Compose menus, HUD, dialogs
│   │   ├── data/          ← SaveManager (DataStore), Settings
│   │   └── level/         ← LevelLoader, LevelData
│   ├── res/
│   │   ├── drawable*/     ← mdpi→xxxhdpi
│   │   └── raw/           ← sfx, music
│   └── assets/            ← sprite atlas, tilemap JSON, fonts
└── build.gradle.kts
```

---

## ⚙️ Core Architecture

### Game Loop (fixed timestep — ફરજિયાત pattern)
```
દર frame:
  1. Input વાંચવો
  2. Update (fixed dt = 1/60s, accumulator થી catch-up)
  3. Render (interpolated alpha સાથે)
  4. Frame pacing (Choreographer / vsync)
```
> ⚠️ `deltaTime` વગર update ક્યારેય નહીં — નહીં તો ધીમા ફોનમાં ગેમ slow-motion થાય.

### Entity Pattern
`Entity` base → position, velocity, bounds, sprite, `update(dt)`, `draw(canvas)`
Systems (Physics / Collision / AI) entity list પર ચાલે. Entity માં game logic ના ભરવો.

### State Machine
`SPLASH → MENU → PLAYING → PAUSED → GAME_OVER → RESULT`
દરેક state નું પોતાનું update/render. **Back button = PAUSE** (exit નહીં).

### Collision — સસ્તાથી મોંઘું
1. Spatial grid / quadtree થી broad-phase
2. AABB (rectangle) check
3. જરૂર હોય તો જ circle / pixel-perfect

---

## 🎨 Game UI/UX — Premium, Modern

### સિદ્ધાંતો

| નિયમ | વિગત |
|:---|:---|
| **3-tap rule** | App ખૂલે થી gameplay સુધી max 3 tap |
| **Juice** | દરેક action પર feedback — scale bounce, particle, screen shake, sound, haptic |
| **Readability** | HUD text મોટું, contrast ઊંચો, તડકામાં પણ વંચાય |
| **Thumb zone** | બધા buttons નીચેના 40% અને ખૂણામાં — ઉપર-મધ્યમાં નહીં |
| **Touch target** | ઓછામાં ઓછું **48×48dp** |
| **Safe area** | Notch / punch-hole / gesture bar થી બચવું (`WindowInsets`) |
| **No dead time** | Loading પર animation/tip બતાવવું, ખાલી screen નહીં |

### Visual Style
- **Palette:** 1 primary + 1 accent + neutral dark base. ઘણા રંગ = સસ્તું દેખાય
- **Depth:** soft shadow + subtle gradient + rim light on hero sprite
- **Font:** display font (heading) + clean sans (numbers/HUD)
- **Buttons:** rounded, gradient fill, press થાય ત્યારે `scale 0.94` + shadow ઘટે
- **Transition:** 200–300ms ease-out. 400ms થી વધુ = ધીમું લાગે
- **Particles:** coin collect, hit spark, level-up burst — સંયમથી

### HUD Layout
Score/coins → ઉપર-ડાબે · Pause → ઉપર-જમણે · Health/timer → ઉપર-મધ્યમાં
Controls → નીચે-ડાબે (movement) + નીચે-જમણે (action)

### Screens ફરજિયાત
Splash · Main Menu · Level Select · Gameplay + HUD · Pause · Game Over + score ·
Settings (sound/music/vibration) · Shop/Skins (હોય તો)

---

## 📱 Phone vs Tablet — અલગ વિચારવું

| બાબત | 📲 Phone | 📱 Tablet / મોટી screen |
|:---|:---|:---|
| Aspect ratio | 19.5:9, 20:9 | 16:10, 4:3 |
| Camera | ચુસ્ત zoom | વધુ world દેખાય, letterbox નહીં |
| Controls | મોટા, thumb-reach માં | ખૂણા તરફ ખસેડવા |
| HUD | compact | વધુ spacing, મોટા icons |
| UI scale | dp | `sw600dp` layout qualifier |

**નિયમ:** design **reference resolution** (દા.ત. 1080×1920) પર બનાવવો, પછી viewport scale
કરવો. Hard-coded pixel ક્યારેય નહીં — હંમેશા `dp` કે world-unit.

---

## 🎨 Assets

| પ્રકાર | Format | નિયમ |
|:---|:---|:---|
| Sprites | **WebP** (PNG fallback) | એક **texture atlas** માં ભેગા — draw calls ઘટે |
| Density | mdpi→xxxhdpi | અથવા એક xxxhdpi + downscale |
| Audio SFX | **OGG**, <100KB | `SoundPool` થી વગાડવા |
| Music | **OGG**, stream | `MediaPlayer`, loop |
| Fonts | TTF, subset | બિનજરૂરી glyphs કાઢવા |
| Tilemap | JSON (Tiled) | `assets/` માં |

**કુલ APK size લક્ષ્ય:** <50MB. વધુ હોય તો AAB + Play Asset Delivery.

---

## ⚡ Performance — 60 FPS ટકાવવો

| સમસ્યા | ઉકેલ |
|:---|:---|
| Frame drop / stutter | GC pressure — game loop માં **object allocation બંધ** |
| Bullets/enemies વારંવાર બને | **Object pooling** |
| ઘણા draw calls | Texture atlas + sprite batching |
| ધીમા ફોનમાં lag | Particle count, shadow quality auto-reduce |
| બેટરી ઝડપથી ઊતરે | Background માં loop pause, frame rate cap |
| Memory leak | Bitmap `recycle()`, listener unregister, Activity reference ના પકડવો |
| Overdraw | Developer Options → Overdraw debug |

**માપવું:** Android Studio Profiler (CPU / Memory / Energy) + on-screen FPS counter (debug build).
**લક્ષ્ય:** 60 FPS stable · frame time <16.6ms · memory flat.

---

## 💾 Save, Sound, Input

- **Save:** Jetpack **DataStore** (SharedPreferences નહીં) — progress, coins, settings, high score
- **Sound:** `SoundPool` (SFX, ≤10 streams) + `MediaPlayer` (music). Settings માં અલગ toggle.
  Phone call આવે તો auto-pause (`AudioFocus`)
- **Haptic:** `VibrationEffect` — hit, collect, game over પર ટૂંકો pulse. Settings માં બંધ કરી શકાય
- **Input:** `onTouchEvent` — multi-touch (`pointerId` track), virtual joystick dead-zone ~15%,
  swipe/tap gesture threshold

---

## 🎯 નવી ગેમનો ક્રમ

**Core loop રમાય એવું prototype → polish → content/levels → છેલ્લે monetization**

> ⚠️ પહેલા દિવસે menu/shop/ads ના બનાવવા — પહેલાં **ગેમ મજા આવે છે કે નહીં** તે ચકાસવું.

---

## 🐛 Game-Specific લક્ષણો

**Logcat પૂરું વાંચવું** — exception type + stack trace + કઈ thread. Crash / ANR / wrong
behaviour અલગ પાડવું. (સામાન્ય root-cause ક્રમ `coding-and-chat` §7 માં છે.)

| લક્ષણ | સંભવિત કારણ |
|:---|:---|
| Frame drop | Game loop માં allocation |
| Touch ના ચાલે | ખોટો coordinate space |
| Sprite ના દેખાય | Camera position કે z-order |
| Sound delay | SoundPool preload નથી |
| Rotation પર crash | State save નથી |
| App પાછું આવે ને freeze | `onPause`/`onResume` માં loop handle નથી |
| Random crash | UI thread vs game thread race condition |

**Deep Mode માં આ ચકાસવું:** thread issue · lifecycle · race condition · rotation પર null ·
`./gradlew clean` + `.gradle`/`build` cache clear · એ ચોક્કસ device/SDK નો issue?

---

## 📉 Impact Check — Edit પહેલાં
- આ entity/system બદલવાથી કઈ બીજી systems અસર પામશે?
- **Game loop કે Renderer** બદલો → 🛑 આખી ગેમ પર અસર
- **Save data structure** બદલો → 🛑 જૂના users નું progress તૂટે — migration જોઈએ
- Build તૂટશે?

---

## 🤖 Parallel Agents (Subagents)

મોટા કામને સ્વતંત્ર ભાગમાં વહેંચીને એકસાથે ચલાવવા.
Agent = અલગ સહાયક જે પોતાનું કામ જાતે કરીને પરિણામ પાછું આપે.

### ક્યારે વાપરવો

| ✅ વાપરવો | ❌ નહીં વાપરવો |
|:---|:---|
| યુઝર કહે ("parallel agents થી કરો") | નાનું કામ (1–2 file) |
| 2+ ભાગ સાવ સ્વતંત્ર — અલગ folder/file | ભાગો એકબીજા પર આધારિત હોય |
| યાંત્રિક કામ (sprite resize, sound convert) | જે કામમાં **મારી પાસેની માહિતી** જ મુખ્ય મૂડી હોય |
| ટેકનિકલી અલગ ટુકડો (build script, Store metadata) | Gameplay / balance નિર્ણય — એકસૂત્રતા તૂટે |

> ⚠️ **Agent ઠંડો શરૂ થાય છે** — એને ગેમની architecture ની કંઈ ખબર નથી. Game loop, entity
> અને state machine એકબીજા સાથે ગૂંથાયેલા છે — એ કામ **મારે જ કરવું**.

**કેટલા:** સામાન્ય રીતે 2–4 agents · **મહત્તમ 10**.
નાનું કામ → 0 · મધ્યમ (2–4 સ્વતંત્ર ભાગ) → 2–4 · મોટું (આખી નવી ગેમ) → 5–10.

> ⚠️ ભાગ ખરેખર સ્વતંત્ર હોય તો જ સંખ્યા વધારવી — વધુ agents = વધુ ખર્ચ અને મેળવણી અઘરી.

### 🚫 ભાગ પાડવાનો સોનેરી નિયમ

**બે agent ક્યારેય એક જ file ને ના અડે.** ભાગ **file પ્રમાણે** પાડવા, કામ પ્રમાણે નહીં.

| ✅ સાચી વહેંચણી | ❌ ખોટી વહેંચણી |
|:---|:---|
| Agent A → `assets/` · Agent B → `SettingsScreen.kt` | Agent A → "ગેમ સુધારો" · Agent B → "bug fix" |

### 📂 ગેમમાં શું વહેંચાય, શું નહીં

| ભાગ | Agent ને આપવો? | કારણ |
|:---|:---:|:---|
| `assets/` — sprite resize, WebP convert, sound | ✅ સૌથી સારો | સાવ સ્વતંત્ર, યાંત્રિક |
| નવી એકલી screen (Settings / About / Credits) | ✅ | બીજું કંઈ વાપરતું નથી |
| Play Store metadata, screenshots, વર્ણન | ✅ | કોડને અડતું નથી |
| એકલો utility class (SoundManager, Prefs) | ✅ | સ્વતંત્ર file |
| **Game Loop / Renderer** | 🛑 | આખી ગેમનું હૃદય |
| **Entity / State machine** | 🛑 | બધું એકબીજા સાથે ગૂંથાયેલું |
| **Save data structure** | 🛑 | જૂના users નું progress તૂટે |
| `build.gradle` · `AndroidManifest.xml` | 🛑 | બે agent અડે તો conflict |
| Collision / physics | 🛑 | Game loop સાથે જોડાયેલું |

### 📝 ગેમ agent ને શું આપવું — ફરજિયાત

| # | શું |
|:-:|:---|
| 1 | **પૂરો absolute path** (Windows path, space સાથે) |
| 2 | **બરાબર કઈ files** બનાવવી — "બીજી કોઈ file ને અડવું નહીં" |
| 3 | Kotlin · minSdk / targetSdk · package name |
| 4 | Rendering approach (Canvas / SurfaceView) અને હાલના classes |
| 5 | ⛔ નવી dependency નહીં · `build.gradle` ને અડવું નહીં |
| 6 | Verify: `./gradlew assembleDebug` |
| 7 | શું report કરવું — બનાવેલી files + errors |

### ✅ પૂરું થાય પછી

- Agent ના report પર **આંધળો ભરોસો નહીં** — પોતે `./gradlew assembleDebug` ચલાવવો
- Agent એ બનાવેલી files જાતે ખોલીને જોવી
- **Real device પર** ચલાવીને FPS અને crash ચકાસવા
- Progress table માં agent નું કામ પણ એક row

### ⛔ ક્યારેય નહીં
- ❌ બે agent ને એક જ file
- ❌ Game loop, entity, save structure, `build.gradle` agent ને
- ❌ Agent ચાલુ હોય ત્યારે એની જ files હું પણ બદલું
- ❌ Agent "થઈ ગયું" કહે એટલે device પર ચકાસ્યા વગર માની લેવું

---

## 🧪 Testing — દરેક કામ પછી ફરજિયાત

```
./gradlew lint  →  ./gradlew assembleDebug  →  real device પર install & run
```

- ✅ Build pass · ✅ Crash વગર 2 મિનિટ રમાય
- ✅ **Phone + Tablet** બંને size
- ✅ **Portrait + Landscape** બંને orientation
- ✅ Rotation / minimize→restore પર state ટકે
- ✅ FPS 60 આસપાસ, memory વધતું ના જાય
- ✅ Sound on/off, vibration on/off કામ કરે
- ✅ Back button = pause (exit નહીં)
- ✅ Release build (`assembleRelease` + R8/ProGuard) પણ ચાલે
- ❌ Emulator પર જ ટેસ્ટ કરી "થઈ ગયું" ના કહેવું — emulator નો FPS સાચો નથી

---

## 🚀 Play Store Release Checklist

Signed **AAB** · versionCode વધારેલો · R8/ProGuard on · target SDK latest · privacy policy ·
icon 512×512 · feature graphic 1024×500 · screenshots (phone + tablet) · content rating ·
APK size <50MB · **Internal testing track માં પહેલાં ટેસ્ટ**

---

## ⛔ ગેમમાં ક્યારેય નહીં
- Agent ને game loop, entity, save structure કે `build.gradle`
- Game loop માં નવા object બનાવવા
- Hard-coded pixel values
- `deltaTime` વગર update
- Emulator પર જ ટેસ્ટ કરી "થઈ ગયું" કહેવું
- Core gameplay મજેદાર થયા પહેલાં menu/shop/ads બનાવવા
- Back button થી app બંધ કરવી

## ✅ ગેમમાં હંમેશા
- Phone અને Tablet, Portrait અને Landscape — અલગ વિચારવું
- **Juice ઉમેરવો** — feedback વગરની action નકામી લાગે
- Object pooling + texture atlas
- Real device પર build + run verify પછી જ પૂરું કહેવું
