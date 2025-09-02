'use client'

import { useState, useEffect } from 'react'
import TimeDisplay from '@/components/TimeDisplay'
import GreetingCard from '@/components/GreetingCard'
import QuoteSection from '@/components/QuoteSection'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Fade in animation on load
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-400 via-orange-400 to-yellow-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      
      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col justify-center px-4 py-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto w-full space-y-8">
          {/* Time Display */}
          <div className="mb-8">
            <TimeDisplay />
          </div>

          {/* Greeting Card */}
          <div className="mb-8">
            <GreetingCard />
          </div>

          {/* Quote Section */}
          <QuoteSection />
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
          Have a wonderful day! ✨
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-white/15 rounded-full animate-pulse delay-700" />
    </main>
  )
}