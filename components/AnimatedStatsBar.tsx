'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref  = useRef<HTMLSpanElement>(null)
  const [val, setVal]     = useState(0)
  const [going, setGoing] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !going) {
          setGoing(true)
          ob.unobserve(el)
          let start: number | null = null
          const dur = 1800
          const tick = (ts: number) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / dur, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setVal(Math.floor(ease * target))
            if (p < 1) requestAnimationFrame(tick)
            else setVal(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [target, going])

  return (
    <span ref={ref}>{val.toLocaleString()}{suffix}</span>
  )
}

interface Stat { n: string; l: string }

export default function AnimatedStatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => {
            /* Parse "28+" → num=28, suffix="+" or "500+" → 500 "+" */
            const match = s.n.match(/^([\d,]+)(.*)$/)
            const num    = match ? parseInt(match[1].replace(/,/g, ''), 10) : 0
            const suffix = match ? match[2] : s.n

            return (
              <div
                key={i}
                className={`text-center py-9 px-4 ${i < stats.length - 1 ? 'border-r border-white/15' : ''}`}
              >
                <div className="font-heading font-black text-amber text-4xl leading-none">
                  {num > 0 ? <CountUp target={num} suffix={suffix} /> : s.n}
                </div>
                <div className="text-white/60 text-[11px] tracking-widest uppercase mt-2">{s.l}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
