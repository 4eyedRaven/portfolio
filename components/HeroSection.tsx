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
    <div id="about" className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:gap-16 lg:gap-20">
      <div className="flex-1 text-center md:text-left space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            {locale.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            {locale.hero.subtitle}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {locale.hero.badges.ai}
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {locale.hero.badges.ux}
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {locale.hero.badges.web}
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {locale.hero.badges.software}
          </Badge>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <Button size="lg" asChild>
            <Link href="#contact">{locale.hero.buttons.contact}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#background">{locale.hero.buttons.experience}</Link>
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
        <Image
          src="/josh_headshot.jpg"
          alt={locale.hero.imageAlt}
          width={384}
          height={384}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}