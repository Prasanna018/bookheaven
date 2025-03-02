"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative h-9 w-16 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`absolute inset-0 flex items-center transition-all duration-300 ${
          theme === "dark" ? "justify-end pr-1.5" : "justify-start pl-1.5"
        }`}
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ${
            theme === "dark" ? "translate-x-0" : "-translate-x-0"
          }`}
        >
          {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </span>
      </span>
    </Button>
  )
}

