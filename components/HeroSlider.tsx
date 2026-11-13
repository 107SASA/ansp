'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBolt, IconFactory, IconCheck } from '@/components/Icons'

const SLIDES = [
  {
    img: 'https://anspl.co.in/assets/TMTRollingMills2-CFNQYEss.jpg',
    badge: 'Steel & Rolling Mills',
    pre: '',
    heading: 'Industrial Automation &\nElectrical Solutions',
    body: 'We design, engineer and deliver electrical and industrial automation solutions for plants across India and South Asia, covering control panels, PLC/SCADA systems, VFD drives and turnkey project execution.',
    pill: '',
  },
  {
    img: 'https://anspl.co.in/assets/ACDrive2-Otp3Yuwc.jpg',
    badge: 'VFD Drive Systems',
    pre: 'Complete Drive Solutions',
    heading: '0.37kW to 1200kW\nAC & DC Drives',
    body: 'Supply, panel integration and on-site commissioning. Sectional drives for wire drawing, rolling mills and paper plants.',
    pill: 'ABB System House · Authorised Distributor',
  },
  {
    img: 'https://anspl.co.in/assets/SoftwareSCADA0-j6zzjK_i.jpg',
    badge: 'PLC / SCADA / DCS',
    pre: 'Industrial Automation',
    heading: 'SCADA, DCS &\nCloud Solutions',
    body: 'IIT Delhi & REC-trained engineers delivering factory automation for L&T, Danieli, Tenova and 500+ more projects.',
    pill: 'Siemens Integrator · Bosch Rexroth SI',
  },
  {
    img: 'https://anspl.co.in/assets/Panel0-D3e2k-is.jpg',
    badge: 'Panel Manufacturing',
    pre: '6,000 Sq.ft. Factory',
    heading: '100 Panel Doors\nEvery Month',
    body: 'In-house panel manufacturing facility at Narendrapur, Kolkata, with the only automatic busbar bending machine in East India.',
    pill: 'ISO 9001:2015 Certified · East India',
  },
  {
    img: 'https://anspl.co.in/assets/EMS0-DQTTRtlR.png',
    badge: 'Energy & IoT',
    pre: 'Smart Plant Monitoring',
    heading: 'Energy Dashboards\n& IoT Solutions',
    body: 'Real-time WBSEDCL & DG monitoring, power factor reporting, IoT dashboards for jute, paper and process industries.',
    pill: 'Balluff India SI · IPA India SI',
  },
]

export interface Slide {
  img: string; badge: string; pre: string; heading: string; body: string; pill: string;
}

export default function HeroSlider({ slides }: { slides?: Slide[] }) {
  const ACTIVE = (slides && slides.length > 0) ? slides : SLIDES
  const [idx, setIdx]         = useState(0)
  const [textOut, setTextOut] = useState(false)

  const goTo = useCallback((to: number) => {
    if (to === idx) return
    setTextOut(true)
    setTimeout(() => { setIdx(to); setTextOut(false) }, 380)
  }, [idx])

  const count = ACTIVE.length
  const next = useCallback(() => {
    setTextOut(true)
    setTimeout(() => { setIdx(p => (p + 1) % count); setTextOut(false) }, 380)
  }, [count])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const s = ACTIVE[idx]

  return (
    <section className="relative bg-navy min-h-[94vh] flex items-center overflow-hidden">

      {ACTIVE.map((sl, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={sl.img} alt="" fill className="object-cover opacity-[0.17]" priority={i === 0} />
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy/80 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-navy/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber via-amber/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">

        <div className={`transition-all duration-[380ms] ease-in-out ${textOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Pill badge (optional) */}
          {s.pill && (
            <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 text-amber font-heading font-bold text-[11px] tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5 mr-2">
              {s.pill}
            </div>
          )}
          {/* Category tag */}
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 text-white/60 font-heading font-semibold text-[11px] tracking-[2px] uppercase px-3 py-1 rounded mb-5">
            {s.badge}
          </div>
          {s.pre && (
            <p className="text-white/40 font-heading font-semibold text-xs tracking-[3px] uppercase mb-2">{s.pre}</p>
          )}
          <h1 className="font-heading font-black text-white text-5xl md:text-[3.4rem] leading-[1.07] mb-6 whitespace-pre-line">
            <em className="not-italic text-amber">{s.heading}</em>
          </h1>
          <p className="text-white/60 text-[1.05rem] leading-relaxed mb-9 max-w-[520px]">{s.body}</p>
          <div className="flex flex-wrap gap-3 mb-11">
            <Link href="/services"
              className="bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-amber-dark transition-colors shadow-lg shadow-amber/25">
              Our Services
            </Link>
            <Link href="/contact"
              className="border-2 border-white/30 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-white hover:text-navy transition-all">
              Get a Quote
            </Link>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 pt-7 border-t border-white/10">
            {[
              { icon: <IconCheck className="w-4 h-4 text-amber shrink-0" />, n:'ISO 9001:2015', l:'Certified' },
              { icon: <IconFactory className="w-4 h-4 text-amber shrink-0" />, n:'28+', l:'Years Experience' },
              { icon: <IconBolt className="w-4 h-4 text-amber shrink-0" />, n:'500+', l:'Projects' }, // TODO: retain only if supported by company records
            ].map(({ icon, n, l }) => (
              <div key={n} className="flex items-center gap-2 text-white/50 text-sm">
                {icon}
                <strong className="text-white font-heading font-bold">{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {ACTIVE.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === idx
              ? 'w-8 h-2.5 bg-amber shadow-md shadow-amber/40'
              : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/55'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-9 right-8 font-heading font-bold text-white/20 text-xs z-20 tracking-[2px]">
        {String(idx + 1).padStart(2, '0')} / {String(ACTIVE.length).padStart(2, '0')}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-2 z-20">
        <span className="text-white/25 text-[9px] font-heading tracking-[3px] uppercase rotate-90 origin-center translate-x-3">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
