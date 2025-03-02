// components/language-toggle.tsx
"use client";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  lang: string;
  setLang: (lang: string) => void;
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  const handleLanguageChange = (newLang: string) => {
    // Persist the selected locale in a cookie for 1 year
    Cookies.set("locale", newLang, { expires: 365, path: "/" });
    setLang(newLang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="p-2">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => handleLanguageChange("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleLanguageChange("de")}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleLanguageChange("es")}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleLanguageChange("it")}>
          Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleLanguageChange("fr")}>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}