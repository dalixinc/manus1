"use client"

import { useEffect, useState } from "react"

export default function GeometricBackground({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <div className="relative overflow-hidden">
      {/* Geometric shapes for background */}
      <div className="fixed top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-b from-primary/10 to-transparent -z-10 blur-3xl"></div>
      <div className="fixed bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-gradient-to-t from-[hsl(var(--card-ai-border)/0.2)] to-transparent -z-10 blur-3xl"></div>
      <div className="fixed top-1/3 left-1/4 w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[hsl(var(--card-prompts-border)/0.1)] to-transparent -z-10 blur-3xl"></div>
      
      {/* Content */}
      {children}
    </div>
  )
}
