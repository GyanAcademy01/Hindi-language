---
name: "git-backup-rules"
description: "કોડ બદલતાં પહેલાં backup અને Git નિયમો — મોટા ફેરફાર પહેલાં commit/branch, સ્પષ્ટ commit message, .gitignore, rollback કેવી રીતે કરવો, જોખમી operation પહેલાં ચેતવણી. Use before any risky edit, refactor, dependency update, or when the user asks to undo, restore, or save work."
---

# 💾 Git & Backup Rules

**કામ બગડે તો પાછું મળવું જ જોઈએ.** કોઈ પણ મોટો ફેરફાર કરતાં પહેલાં સલામતી.

> 🔗 Base નિયમો (ગુજરાતી, વિકલ્પો, સમરી) → **`chat-style`**

---

## 🚦 જોખમનું સ્તર — શું કરવું

| કામ | જોખમ | પહેલાં કરવું |
|:---|:---:|:---|
| 1 file માં નાનો ફેરફાર | 🟢 ઓછું | કંઈ નહીં — સીધું કરવું |
| 3+ files, નવું feature | 🟡 મધ્યમ | **Commit** કરી લેવો |
| Refactor / structure બદલવું | 🔴 ઊંચું | **નવી branch** બનાવવી |
| Dependency update / `npm install` | 🔴 ઊંચું | Commit + `package-lock.json` સાચવવો |
| `globals.css` / config / data structure | 🔴 ઊંચું | Commit + user ને ચેતવણી |
| File delete કે rename | 🔴 ઊંચું | **પૂછ્યા વગર નહીં** |

---

## ✅ કામ શરૂ કરતાં પહેલાં

```bash
git status          # કંઈ uncommitted બાકી છે?
```

| સ્થિતિ | કરવું |
|:---|:---|
| બધું committed | ✅ સીધું આગળ |
| Uncommitted ફેરફાર છે | ⚠️ પહેલાં user ને કહેવું — commit કરવો કે નહીં પૂછવું |
| Git repo જ નથી | 💡 સૂચવવું: `git init` કરી લઈએ? — સલામતી માટે |

---

## 📝 Commit Message નિયમ

**ગુજરાતી કે અંગ્રેજી બંને ચાલે — પણ સ્પષ્ટ હોવું જોઈએ.**

| ✅ સારું | ❌ ખરાબ |
|:---|:---|
| `Home page hero section responsive કર્યું` | `update` |
| `Add: ગુજરાતી વ્યાકરણ chapter 5 MCQ` | `fix` |
| `Fix: mobile માં PDF viewer તૂટતું હતું` | `changes` |
| `Refactor: Topbar component અલગ કર્યું` | `asdf` |

**Format:** `પ્રકાર: શું કર્યું` — પ્રકાર = `Add` / `Fix` / `Update` / `Refactor` / `Style` / `Remove`

**નિયમો:**
- એક commit = એક logical ફેરફાર (બધું ભેગું નહીં)
- Build તૂટેલું હોય તો commit નહીં

---

## 🌿 Branch ક્યારે

| પરિસ્થિતિ | Branch |
|:---|:---|
| મોટું નવું feature | `feature/<નામ>` |
| મોટો refactor | `refactor/<નામ>` |
| પ્રયોગ કરવો છે, કદાચ ફેંકી દેવો | `test/<નામ>` |
| નાનો fix | branch જરૂર નથી |

કામ પૂરું + build pass + verify → પછી જ merge.

---

## ↩️ Rollback — પાછું કેવી રીતે લેવું

**યુઝર "પાછું જોઈએ" / "undo કરો" કહે તો પહેલાં પૂછવું: *"કેટલું પાછું?"***

| શું જોઈએ | કરવું |
|:---|:---|
| છેલ્લા commit પછીના બધા ફેરફાર કાઢવા | `git restore .` |
| એક જ file પાછી | `git restore <file>` |
| છેલ્લો commit undo (ફેરફાર રહે) | `git reset --soft HEAD~1` |
| છેલ્લો commit સંપૂર્ણ કાઢવો | `git reset --hard HEAD~1` ⚠️ |
| જૂના commit પર જવું | `git checkout <hash>` |

> 🛑 `--hard` કે `clean -fd` ચલાવતાં પહેલાં **હંમેશા ચેતવણી આપી, મંજૂરી લેવી** — કામ કાયમ માટે જાય છે.

---

## 🚫 .gitignore માં ફરજિયાત

```
node_modules/
.next/
.env
.env.local
*.log
.DS_Store
build/
dist/
```

> ⚠️ `.env` commit થઈ ગઈ હોય તો ફક્ત delete કરવાથી નહીં ચાલે — **key બદલવી પડે**.

---

## 🛡️ Git ના હોય તો — સાદો Backup

Git repo ના હોય અને મોટું કામ કરવાનું હોય:

1. આખું folder copy કરી `project-backup-<તારીખ>` નામે રાખવું
2. કે ફક્ત બદલાનારી files ની `.bak` copy
3. User ને કહેવું કે backup ક્યાં છે

---

## 📋 સમરીમાં Git માહિતી

કામ પૂરું થાય ત્યારે ઉમેરવું:

```
✅ પૂર્ણ
📦 Commit: "Fix: mobile PDF viewer"  (કે "commit કરેલો નથી")
↩️ પાછું જોઈએ તો: git restore .
```

---

## ⛔ ક્યારેય નહીં
- પૂછ્યા વગર `git reset --hard`, `git clean -fd`, force push
- પૂછ્યા વગર file delete કરવી
- Build તૂટેલું હોય ત્યારે commit
- `.env` કે secret commit કરવું
- મોટો refactor backup વગર શરૂ કરવો

## ✅ હંમેશા
- મોટા કામ પહેલાં `git status` ચકાસવો
- જોખમી operation પહેલાં ચેતવણી + મંજૂરી
- સ્પષ્ટ commit message
- સમરીમાં "પાછું કેવી રીતે લેવું" જણાવવું

