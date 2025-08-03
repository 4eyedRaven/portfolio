"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
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
      <main className="container py-8 md:py-10">
        <HeroSection locale={locale} />
        <ExperienceSection locale={locale} />
        <EducationSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <VolunteerSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}