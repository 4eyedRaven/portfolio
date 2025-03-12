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

      {/* 
        - side="bottom" ensures the dropdown opens below the button.
        - align="end" lines up the dropdown’s right edge with the trigger’s right edge.
        - sideOffset adds a small gap.
        - max-h-56 + overflow-y-auto ensures the menu is scrollable if it’s too tall.
      */}
      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={8}
        className="max-h-56 overflow-y-auto"
      >
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("de")}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("it")}>
          Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("zh")}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("ja")}>
          日本語
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("ko")}>
          한국어
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>
          हिंदी
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}