"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Cookies from "js-cookie"  // Ensure the js-cookie package is installed

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // Determine the new theme.
    const newTheme = theme === "dark" ? "light" : "dark"
    // Persist the new theme in a cookie for 1 year, available site-wide.
    Cookies.set("theme", newTheme, { expires: 365, path: "/" })
    // Update the theme.
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}