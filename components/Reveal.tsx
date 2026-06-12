'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right'
  className?: string
}

export default function Reveal({ children, delay = 0, from = 'bottom', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Apply base (invisible) state only after hydration so SSR renders visibly
    el.style.transitionDelay = `${delay}ms`
    el.classList.add(`rv-${from}`)

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('rv-in')
          ob.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [delay, from])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
