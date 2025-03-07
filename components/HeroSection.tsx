"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  locale: any;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section id="about" className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-12 py-12 md:py-24">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {locale.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {locale.hero.subtitle}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          <Badge variant="secondary" className="text-sm">
            {locale.hero.badges.ai}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {locale.hero.badges.ux}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {locale.hero.badges.web}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {locale.hero.badges.software}
          </Badge>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Button asChild>
            <Link href="#contact">{locale.hero.buttons.contact}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#experience">{locale.hero.buttons.experience}</Link>
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0 w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
        <Image
          src="/josh_headshot.jpg"
          alt={locale.hero.imageAlt}
          width={320}
          height={320}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}