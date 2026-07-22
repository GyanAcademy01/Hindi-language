import Link from "next/link";
import { MapPin, Send, Smartphone, Globe, Phone, MessageSquare, Video, Camera, Clock, HelpCircle, ShieldAlert } from "lucide-react";

export default function ContactUsPage() {
  const mapLink = "https://maps.app.goo.gl/8E9j5JSvLspXTRKk7";
  const youtubeLink = "https://www.youtube.com/@gyanacademyonline";
  const appLink = "https://play.google.com/store/apps/details?id=com.gyanacademy.com";
  const telegramLink = "https://t.me/gyanacademygandhinagar";
  const instagramLink = "https://instagram.com/gyanacademy_official";
  const websiteLink = "https://gyanacademys.com";

  const contactFaqs = [
    {
      q: "हमारा संदेश भेजने के बाद उत्तर मिलने में कितना समय लगता है?",
      a: "हमारी टीम 24 से 48 व्यावसायिक घंटों के भीतर आपके प्रश्नों का समाधान प्रदान करती है।",
    },
    {
      q: "क्या मैं नए अध्याय या व्याकरण थ्योरी जोड़ने का सुझाव दे सकता हूँ?",
      a: "हाँ, संपर्क फ़ॉर्म में 'अध्ययन सामग्री सुझाव' चुनकर आप अपना बहुमूल्य सुझाव भेज सकते हैं।",
    },
  ];

  return (
    <main className="relative flex-1 overflow-x-hidden overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-16 h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-600/15" />
        <div className="absolute left-[-8%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/15 blur-[120px] dark:bg-violet-600/12" />
        <div className="home-bg-grid" />
      </div>

      <div className="mx-auto w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="relative flex min-h-[36px] items-center justify-center">
          <div className="absolute left-0">
            <Link href="/" prefetch>
              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#f24c4c] to-[#d92b2b] border-b-[3px] border-[#9b1c1c] text-white hover:brightness-110 active:translate-y-[1.5px] active:border-b-[1.5px] transition-all duration-75 cursor-pointer shadow-[0_3px_8px_rgba(239,68,68,0.15)]" aria-label="पीछे जाएं">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-md shadow-black/5 dark:shadow-black/20">
            <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight">संपर्क करें</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Contact Info & Address Card */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[24px] border border-zinc-200/80 bg-white p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-black text-zinc-900 dark:text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                कार्यालय का पता एवं समय
              </h2>
              <div className="mt-3 rounded-xl bg-zinc-50 p-4 border border-zinc-200/60 dark:bg-zinc-800/50 dark:border-zinc-700/50">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">ज्ञान अकादमी (Gyan Academy)</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  ગાંધીનગર, ગુજરાત (Gandhinagar, Gujarat)
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-700/50 pt-2.5">
                  <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>सोमवार - शनिवार: 9:00 AM से 6:00 PM</span>
                </div>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  गूगल मैप पर देखें (Google Maps)
                </a>
              </div>
            </div>

            {/* Official Social Links Card */}
            <div className="rounded-[24px] border border-zinc-200/80 bg-white p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-base font-black text-zinc-900 dark:text-white mb-3">
                सोशल मीडिया और चैनल
              </h2>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/50 p-2.5 text-xs font-bold text-red-600 hover:bg-red-100/60 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-400 transition"
                >
                  <Video className="h-4 w-4" />
                  YouTube
                </a>

                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/50 p-2.5 text-xs font-bold text-sky-600 hover:bg-sky-100/60 dark:border-sky-900/40 dark:bg-sky-950/20 dark:text-sky-400 transition"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>

                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-pink-200 bg-pink-50/50 p-2.5 text-xs font-bold text-pink-600 hover:bg-pink-100/60 dark:border-pink-900/40 dark:bg-pink-950/20 dark:text-pink-400 transition"
                >
                  <Camera className="h-4 w-4" />
                  Instagram
                </a>

                <a
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/50 p-2.5 text-xs font-bold text-emerald-600 hover:bg-emerald-100/60 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-400 transition"
                >
                  <Smartphone className="h-4 w-4" />
                  Mobile App
                </a>

                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/50 p-2.5 text-xs font-bold text-indigo-600 hover:bg-indigo-100/60 dark:border-indigo-900/40 dark:bg-indigo-950/20 dark:text-indigo-400 transition"
                >
                  <Globe className="h-4 w-4" />
                  आधिकारिक वेबसाइट (gyanacademys.com)
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form Card */}
          <div className="rounded-[24px] border border-zinc-200/80 bg-white p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900 flex flex-col">
            <h2 className="text-lg font-black text-zinc-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              हमें संदेश भेजें
            </h2>
            <form className="mt-4 flex flex-col gap-3 flex-1">
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">पूछताछ का विषय (Subject)</label>
                <select className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-medium text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
                  <option>📌 सामान्य पूछताछ (General Inquiry)</option>
                  <option>🛠️ तकनीकी सहायता (Technical Support)</option>
                  <option>📚 अध्ययन सामग्री सुझाव (Content Feedback)</option>
                  <option>🎓 TET/TAT परीक्षा मार्गदर्शन (Exam Guidance)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">आपका नाम (Full Name)</label>
                <input
                  type="text"
                  placeholder="नाम लिखें..."
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-medium text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">ईमेल (Email Address)</label>
                <input
                  type="email"
                  placeholder="ईमेल दर्ज करें..."
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-medium text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">संदेश (Message)</label>
                <textarea
                  rows={4}
                  placeholder="अपना संदेश लिखें..."
                  className="w-full flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-medium text-zinc-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-indigo-600 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-indigo-700 active:scale-[0.98]"
              >
                संदेश भेजें
              </button>
            </form>
          </div>
        </div>

        {/* Contact FAQs */}
        <div className="rounded-[24px] border border-zinc-200/80 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-black text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            सहायता प्रश्नोत्तर (Support FAQs)
          </h2>
          <div className="space-y-3">
            {contactFaqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-zinc-50 p-4 border border-zinc-200/60 dark:bg-zinc-800/40 dark:border-zinc-700/50">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">{faq.q}</h4>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
