"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon, Menu, X } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">AI</span>
              <div className="absolute inset-0 rounded-full border border-primary/50 neon-border"></div>
            </div>
            <span className="text-2xl font-bold neon-text">AI Productivity Hub</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-full bg-secondary hover:bg-secondary/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
          <Link href="/ai-tools" className="text-foreground/70 hover:text-foreground transition-colors">AI Tools</Link>
          <Link href="/prompt-engineering" className="text-foreground/70 hover:text-foreground transition-colors">Prompt Engineering</Link>
          <Link href="/productivity-tips" className="text-foreground/70 hover:text-foreground transition-colors">Productivity Tips</Link>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors neon-glow"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/ai-tools" 
              className="px-4 py-2 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link 
              href="/prompt-engineering" 
              className="px-4 py-2 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prompt Engineering
            </Link>
            <Link 
              href="/productivity-tips" 
              className="px-4 py-2 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Productivity Tips
            </Link>
            <div className="px-4 py-2 flex items-center gap-2">
              <span className="text-foreground/70">Theme:</span>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors neon-glow"
                aria-label="Toggle theme"
              >
                {mounted && (
                  theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
