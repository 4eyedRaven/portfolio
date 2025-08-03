"use client";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

interface BackgroundSectionProps {
  locale: any;
}

export default function BackgroundSection({ locale }: BackgroundSectionProps) {
  return (
    <section id="background" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale.background.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale.background.subtitle}
          </p>
        </div>
        <div className="space-y-16">
          <ExperienceSection locale={locale} />
          <EducationSection locale={locale} />
        </div>
      </div>
    </section>
  );
}