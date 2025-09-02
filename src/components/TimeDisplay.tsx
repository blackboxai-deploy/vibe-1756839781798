'use client'

import { useState, useEffect } from 'react'

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="text-center space-y-2">
      <div className="text-6xl md:text-7xl font-light text-white tracking-wide font-mono">
        {formatTime(time)}
      </div>
      <div className="text-lg md:text-xl text-white/90 font-light">
        {formatDate(time)}
      </div>
    </div>
  )
}