import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin", "latin-ext", "devanagari"],
  display: "swap",
  variable: "--font-baloo",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "✨ 3D हीरो दोस्त | जंगल की दोस्ती की कहानी",
  description:
    "टॉमी, मोटू और बबलू की 3D मूवी जैसी दोस्ती से भरी कहानी, जहाँ तीन दोस्त मिलकर बारिश से डरे जानवरों को बचाते हैं और जंगल को फिर से मुस्कुराते हैं।",
  openGraph: {
    title: "✨ 3D हीरो दोस्त | जंगल की दोस्ती की कहानी",
    description:
      "चमकती आँखों, प्यारे चेहरों और मज़ेदार चाल वाले 3D हीरो दोस्तों की कहानी — जिन्होंने मिलकर पूरा जंगल बचाया।",
    url: "https://agentic-813ced74.vercel.app",
    siteName: "3D हीरो दोस्त",
    locale: "hi-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "✨ 3D हीरो दोस्त | जंगल की दोस्ती की कहानी",
    description:
      "टॉमी, मोटू और बबलू की दोस्ती का जश्न — बारिश में भी चमकते हीरो।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" data-theme="dark">
      <body
        className={`${baloo.variable} ${manrope.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
