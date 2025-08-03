"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BackgroundSection from "@/components/BackgroundSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getLocale } from "@/lib/useLocale";

export default function HomeClient({ initialLang }: { initialLang: string }) {
  const [lang, setLang] = useState(initialLang);
  const locale = getLocale(lang);

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} lang={lang} setLang={setLang} />
      <main>
        <div className="container max-w-6xl mx-auto py-8 md:py-12">
          <HeroSection locale={locale} />
        </div>
        <BackgroundSection locale={locale} />
        <CapabilitiesSection locale={locale} />
        <div className="container max-w-4xl mx-auto py-16 md:py-24">
          <VolunteerSection locale={locale} />
        </div>
        <div className="bg-muted/20 py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
            <ContactSection locale={locale} />
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}