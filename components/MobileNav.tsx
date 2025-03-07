"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  locale: any;
  modeToggle: React.ReactNode;
  languageToggle: React.ReactNode;
}

export default function MobileNav({ locale, modeToggle, languageToggle }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      // If the tap is within a Radix dropdown content, ignore it.
      if (
        event.target instanceof Element &&
        event.target.closest('[data-radix-dropdown-menu-content]')
      ) {
        return;
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div ref={navRef}>
      <Button variant="ghost" className="p-2" onClick={() => setOpen(prev => !prev)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="fixed top-16 left-0 right-0 z-50 border-t border-b bg-background">
          <nav className="flex flex-col items-start p-4 gap-4">
            <Link href="#about" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.about}
            </Link>
            <Link href="#experience" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.experience}
            </Link>
            <Link href="#education" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.education}
            </Link>
            <Link href="#skills" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.skills}
            </Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.projects}
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.contact}
            </Link>
            <div className="w-full border-t border-border my-2"></div>
            <div className="flex items-center gap-4">
              {modeToggle}
              <div onPointerDown={(e) => e.stopPropagation()}>{languageToggle}</div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}