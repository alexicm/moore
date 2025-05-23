"use client"

import type React from "react"

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { useEffect, useState } from "react"

export function OptimizedBackground({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    // Set up visibility detection
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    // Listen for visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Reduce animation complexity when tab is not visible or user prefers reduced motion
  const animationSpeed = !isVisible || reducedMotion ? 0.2 : 1

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(67, 73, 46)" // Dark green
      gradientBackgroundEnd="rgb(114, 122, 78)" // Medium green
      firstColor="67, 73, 46" // Dark green
      secondColor="114, 122, 78" // Medium green
      thirdColor="204, 211, 167" // Light green/sage
      fourthColor="67, 73, 46" // Dark green
      fifthColor="114, 122, 78" // Medium green
      pointerColor="204, 211, 167" // Light green/sage
      // Reduce animation complexity when not visible
      interactive={isVisible && !reducedMotion}
    >
      {children}
    </BackgroundGradientAnimation>
  )
}
