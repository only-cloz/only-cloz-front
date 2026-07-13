import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  /** If true, flashes the brand accent color on completion */
  flash?: boolean
}

export default function AnimatedCounter({
  end,
  duration = 1800,
  suffix = '',
  prefix = '',
  flash = false,
}: AnimatedCounterProps) {
  const [count, setCount]     = useState(0)
  const [done, setDone]       = useState(false)
  const ref                   = useRef<HTMLSpanElement>(null)
  const isInView              = useInView(ref, { once: true, margin: '-40px' })
  const hasStarted            = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Expo-out easing — fast start, elegant finish
      const eased    = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(eased * end))
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
        setDone(true)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  return (
    <span
      ref={ref}
      className={`transition-colors duration-700 ${done && flash ? 'text-[#EAB308]' : ''}`}
    >
      {prefix}{count}{suffix}
    </span>
  )
}