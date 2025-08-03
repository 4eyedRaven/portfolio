"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "@/components/ModeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

interface HeaderProps {
  locale: any;
  lang: string;
  setLang: (lang: string) => void;
}

export default function Header({ locale, lang, setLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">{locale.header.title}</div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="transition-colors hover:text-foreground/80">
            {locale.header.nav.about}
          </Link>
          <Link href="#background" className="transition-colors hover:text-foreground/80">
            {locale.header.nav.background}
          </Link>
          <Link href="#capabilities" className="transition-colors hover:text-foreground/80">
            {locale.header.nav.capabilities}
          </Link>
          <Link href="#volunteer" className="transition-colors hover:text-foreground/80">
            {locale.header.nav.volunteer}
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            {locale.header.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <MobileNav
              locale={locale}
              modeToggle={<ModeToggle />}
              languageToggle={<LanguageToggle lang={lang} setLang={setLang} />}
            />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ModeToggle />
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>
    </header>
  );
}