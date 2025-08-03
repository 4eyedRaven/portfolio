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
      <main className="space-y-0">
        <section className="py-12 md:py-20">
          <div className="container max-w-6xl mx-auto">
            <HeroSection locale={locale} />
          </div>
        </section>
        
        <section className="bg-muted/30 py-16 md:py-24">
          <BackgroundSection locale={locale} />
        </section>
        
        <section className="py-16 md:py-24">
          <CapabilitiesSection locale={locale} />
        </section>
        
        <section className="bg-muted/20 py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
            <VolunteerSection locale={locale} />
          </div>
        </section>
        
        <section className="py-16 md:py-24 border-t border-border/40">
          <div className="container max-w-6xl mx-auto">
            <ContactSection locale={locale} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}