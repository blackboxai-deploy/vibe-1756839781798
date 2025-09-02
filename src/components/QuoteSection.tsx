'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

interface Quote {
  text: string
  author: string
}

const quotes: Quote[] = [
  {
    text: "Every morning is a fresh beginning. Every day is the world made new.",
    author: "Sarah Chauncey Woolsey"
  },
  {
    text: "The morning shines upon everyone the same. Its beauty is for rich or poor alike.",
    author: "Mark Twain"
  },
  {
    text: "Today is the first day of the rest of your life.",
    author: "Abbie Hoffman"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Every sunrise is an invitation to brighten someone's day.",
    author: "Richelle E. Goodrich"
  },
  {
    text: "Morning is an important time of day because how you spend your morning can often tell you what kind of day you are going to have.",
    author: "Lemony Snicket"
  },
  {
    text: "The morning was full of sunlight and hope.",
    author: "Kate Chopin"
  },
  {
    text: "Each morning we are born again. What we do today is what matters most.",
    author: "Buddha"
  }
]

export default function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Select a random quote based on the day
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
    const quoteIndex = dayOfYear % quotes.length
    setCurrentQuote(quotes[quoteIndex])
    
    // Fade in animation
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={`bg-white/5 backdrop-blur-sm border-white/10 p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="text-center space-y-4">
        <div className="text-2xl text-white/40 font-playfair">"</div>
        <blockquote className="text-lg md:text-xl text-white/90 italic font-light leading-relaxed">
          {currentQuote.text}
        </blockquote>
        <cite className="block text-white/70 text-sm font-medium">
          — {currentQuote.author}
        </cite>
      </div>
    </Card>
  )
}