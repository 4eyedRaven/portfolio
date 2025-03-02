"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  lang: string;
  setLang: (lang: string) => void;
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="p-2">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLang("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLang("de")}>Deutsch</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLang("es")}>Español</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLang("it")}>Italiano</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLang("fr")}>Français</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}