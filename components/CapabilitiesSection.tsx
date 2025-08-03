"use client";

import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

interface CapabilitiesSectionProps {
  locale: any;
}

export default function CapabilitiesSection({ locale }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale.capabilities.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale.capabilities.subtitle}
          </p>
        </div>
        <div className="space-y-16">
          <SkillsSection locale={locale} />
          <ProjectsSection locale={locale} />
        </div>
      </div>
    </section>
  );
}