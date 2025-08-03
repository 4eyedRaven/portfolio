"use client";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

interface BackgroundSectionProps {
  locale: any;
}

export default function BackgroundSection({ locale }: BackgroundSectionProps) {
  return (
    <div id="background" className="container max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Background</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience and education that shaped my expertise in UX design and software engineering
        </p>
      </div>
      <div className="space-y-20">
        <ExperienceSection locale={locale} />
        <EducationSection locale={locale} />
      </div>
    </div>
  );
}