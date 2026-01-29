import { CharacterCard } from "@/components/CharacterCard";
import { StoryBeat } from "@/components/StoryBeat";

const characters = [
  {
    name: "टॉमी",
    nickname: "रफ़्तार वाला दोस्त",
    description:
      "हर कदम पर चमकती आँखें और सबसे पहले मुस्कराकर मदद का हाथ बढ़ाने वाला। बारिश के बीच भी उसका साहस पूरे झुंड का मनोबल बन गया।",
    trait: "⚡ टॉमी की फुर्ती ने डरे हुए दोस्तों को सेकंडों में सुरक्षित आश्रय तक पहुँचा दिया।",
    accent:
      "linear-gradient(135deg, rgba(129, 140, 248, 0.9), rgba(14, 165, 233, 0.8))",
    emoji: "🐶",
  },
  {
    name: "मोटू",
    nickname: "मजबूत सूंड वाला दोस्त",
    description:
      "दिल का सच्चा और सूंड से भी बड़ा जिगरी। नदी की लहरें तेज़ हुईं तो उसने अपनी सूंड से रास्ता साफ़ किया और सभी को उम्मीद दे दी।",
    trait: "🌊 मोटू की सूंड ने फँसे खरगोश को सहारा दिया और टूटे रास्तों को जोड़ दिया।",
    accent:
      "linear-gradient(135deg, rgba(249, 115, 22, 0.9), rgba(234, 179, 8, 0.8))",
    emoji: "🐘",
  },
  {
    name: "बबलू",
    nickname: "दिलदार ताक़तवर दोस्त",
    description:
      "भालू की तरह ही मजबूत और गले लगाने जितना नरमदिल। बरसाती रात में उसने भारी लकड़ियाँ हटाईं और डर की दीवारें तोड़ दीं।",
    trait:
      "💪 बबलू की ताक़त ने रास्ता खुलवाया ताकि हर जानवर सुरक्षित घर तक लौट सके।",
    accent:
      "linear-gradient(135deg, rgba(45, 212, 191, 0.9), rgba(56, 189, 248, 0.8))",
    emoji: "🐻",
  },
];

const storyBeats = [
  {
    icon: "🌧️",
    title: "जंगल में बारिश का संकट",
    description:
      "जिस दिन बादल गरजे, उसी दिन नदी का पानी भरभराकर जंगल में आ गया। छोटे जानवर डरे और पेड़ों के पीछे दुबक गए।",
    highlight: "डर को पहचानकर मदद तय हुई",
  },
  {
    icon: "🐘",
    title: "मोटू की सूंड ने रास्ता बनाया",
    description:
      "मोटू ने अपनी सूंड से शाखाओं को हटाया, फँसे हुए खरगोश को थामा और पानी के बीच पुल की तरह खड़ा रहा।",
    highlight: "सूंड बनी सुरक्षा की रस्सी",
  },
  {
    icon: "🐻",
    title: "बबलू ने ताक़त से उम्मीद जगाई",
    description:
      "भारी लकड़ी के तने टूटकर गिर गए थे। बबलू ने अपने विशाल हाथों से उन्हें हटाया और सबके लिए रास्ता साफ़ किया।",
    highlight: "हर ताक़त दोस्ती के लिए",
  },
  {
    icon: "🐶",
    title: "टॉमी की दौड़ती राह",
    description:
      "टॉमी ने सभी जानवरों को इकट्ठा किया, अपनी पुकार से हिम्मत बंधाई और तेज़ दौड़कर उन्हें सुरक्षित गुफा तक पहुँचाया।",
    highlight: "रफ़्तार बनी साहस की धुन",
  },
  {
    icon: "🌈",
    title: "जंगल की खुशी लौट आई",
    description:
      "जब बारिश रुकी, जंगल में हँसी गूँज गई। सबने तालियाँ बजाईं और तीनों दोस्तों को ‘3D हीरो दोस्त’ का ताज दिया।",
    highlight: "दोस्ती की नई पहचान",
  },
];

const values = [
  { title: "साहस", caption: "पानी बढ़ा, डर भी – दोस्ती ने हिम्मत दी।" },
  { title: "टीमवर्क", caption: "हर कौशल का सही समय पर इस्तेमाल हुआ।" },
  { title: "खुशी", caption: "मदद के बाद पूरा जंगल मुस्कराया।" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-12 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute right-[-8rem] top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-[180px]" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[160px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-24 sm:px-10 lg:px-12">
        <section className="relative flex flex-col items-center gap-12 text-center lg:flex-row lg:items-end lg:text-left">
          <div className="flex-1 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-sky-100/90">
              ✨ 3D हीरो दोस्त ✨
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_10px_35px_rgba(14,165,233,0.35)] sm:text-5xl lg:text-6xl">
              जंगल का 3D मूवी जैसा बेस्ट-फ्रेंड ट्रायो
            </h1>
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              तीन दोस्त, चमकती आँखें और दिल में दोस्ती। बारिश का डर भी उन पर
              हावी नहीं हुआ — उन्होंने मिलकर हर जानवर को सुरक्षित किया और जंगल
              को फिर से मुस्कुराने का मौका दिया।
            </p>
            <div className="grid w-full gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-sky-200/40 hover:bg-white/[0.16]"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {value.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 shadow-[0_25px_120px_rgba(8,47,73,0.55)] backdrop-blur">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-left text-sm leading-relaxed text-white/80">
              “तुम तीनों सच्चे हीरो हो!” — यही आवाज़ जंगल के हर कोने में गूँजी।
              जो भी दोस्त रास्ता भटका, उन्हें इन तीनों ने मिलकर उम्मीद दी।
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-slate-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-100/70">
                जंगल का संदेश
              </p>
              <p className="text-2xl font-bold leading-tight text-white">
                “दोस्ती का मतलब साथ निभाना — चाहे बारिश हो या धूप।”
              </p>
              <span className="text-sm font-medium text-white/60">
                — खुश जानवरों का समूह
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <header className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-100/70">
              दोस्ती का परिचय
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              हर दोस्त का अलग रंग, पर दिल एक सुर में
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              ये तीनों दोस्त वैसे ही हैं जैसे 3D मूवी के प्यारे कैरेक्टर — अलग-अलग
              सुपरपॉवर, पर एक ही लक्ष्य: जंगल की रक्षा और हर मुस्कान को बचाना।
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            {characters.map((character) => (
              <CharacterCard key={character.name} {...character} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <header className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-100/70">
              रोमांचक दिन
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              कैसे ‘3D हीरो दोस्त’ ने जंगल को सुरक्षित बनाया
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              बारिश की लहरों से लेकर इंद्रधनुषी खुशी तक — यह कहानी दोस्ती के
              हर मोड़ को जीवंत बनाती है।
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {storyBeats.map((beat) => (
              <StoryBeat key={beat.title} {...beat} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent p-12 text-center sm:text-left">
          <div className="absolute right-12 top-[-3rem] hidden h-48 w-48 rounded-full bg-sky-400/30 blur-3xl sm:block" />
          <div className="absolute left-10 bottom-[-4rem] hidden h-52 w-52 rounded-full bg-emerald-400/25 blur-3xl lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                जंगल अब रंगीन है — क्योंकि दोस्त हमेशा साथ हैं
              </h2>
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                उस दिन के बाद से इन दोस्तों को “✨ 3D हीरो दोस्त ✨” कहा जाने लगा।
                वे हर सुबह इंद्रधनुष के पास मिलते, हँसते, खेलते और जंगल को याद
                दिलाते कि मदद के लिए हमेशा दिल खुला रखना है।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <span className="rounded-full border border-white/30 bg-white/15 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                  साथ निभाओ
                </span>
                <span className="rounded-full border border-emerald-100/40 bg-emerald-400/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
                  मुस्कान बाँटो
                </span>
                <span className="rounded-full border border-sky-100/40 bg-sky-400/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-100">
                  मदद करो
                </span>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-xs flex-col gap-4 rounded-3xl border border-white/20 bg-slate-900/70 p-6 text-left shadow-[0_25px_90px_rgba(30,64,175,0.45)]">
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                रंगीन याद
              </span>
              <p className="text-lg font-semibold text-white">
                “जब भी बारिश होगी, हम तीनों फिर से जंगल की रक्षा करेंगे।”
              </p>
              <div className="grid gap-2 rounded-2xl bg-white/[0.08] p-4 text-sm text-white/80">
                <span>🌿 चमकती आँखें</span>
                <span>💫 प्यारे चेहरे</span>
                <span>🎬 मज़ेदार चाल</span>
              </div>
              <p className="text-sm text-white/60">
                दोस्ती का यह वादा हर छोटे जानवर के दिल में भरोसा जगाता है।
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
