"use client"

import { useState, useEffect } from "react"
import { Preloader } from "./Preloader"

interface LayoutWithPreloaderProps {
  children: React.ReactNode
}

export function LayoutWithPreloader({ children }: LayoutWithPreloaderProps) {
  const [showPreloader, setShowPreloader] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Mark that preloader has been shown
    const hasShownPreloader = sessionStorage.getItem('preloaderShown')
    
    if (hasShownPreloader) {
      setShowPreloader(false)
      setContentVisible(true)
      return
    }

    const fadeOutTimer = setTimeout(() => {
      sessionStorage.setItem('preloaderShown', 'true')
      setShowPreloader(false)
      
      const contentTimer = setTimeout(() => {
        setContentVisible(true)
      }, 1000) // 1 second for fade transition

      return () => clearTimeout(contentTimer)
    }, 10000) // 10 seconds duration

    return () => clearTimeout(fadeOutTimer)
  }, [])

  return (
    <>
      {showPreloader && (
        <Preloader 
          onComplete={() => setShowPreloader(false)}
          duration={10000}
          words={["LOADING", "GITFUND", "INITIALIZING", "GET MONEY", "OPEN SOURCE"]}
        />
      )}
      <div className={`transition-opacity duration-2000 ${contentVisible ? 'opacity-100' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}