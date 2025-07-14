"use client"

import { useEffect, useState } from "react"
import { ParticleTextEffect } from "./particle-text-effect"

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
  words?: string[]
}

export function Preloader({ 
  onComplete, 
  duration = 10000, 
  words = ["LOADING", "GITFUND", "INITIALIZING", "PLEASE WAIT"] 
}: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true)
      
      const completeTimer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 1000) // 1 second fade out duration

      return () => clearTimeout(completeTimer)
    }, duration)

    return () => clearTimeout(fadeOutTimer)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <ParticleTextEffect words={words} />
      </div>
    </div>
  )
}