"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  decimal?: boolean
  prefix?: string
  suffix?: string
  className?: string
}

export function Counter({
  end,
  duration = 2000,
  decimal = false,
  prefix = "",
  suffix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      const now = Date.now()
      const remainingTime = Math.max(0, endTime - now)
      const progress = 1 - remainingTime / duration

      countRef.current = progress * end
      setCount(countRef.current)

      if (progress >= 1) {
        clearInterval(timerRef.current as NodeJS.Timeout)
        setCount(end)
      }
    }, 16)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}
