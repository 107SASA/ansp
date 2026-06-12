'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const BASE = 'https://anspl.co.in/assets'

type DropItem = { label: string; href: string; img: string; desc: string }
type NavLink  = { href: string; label: string; dropdown?: DropItem[] }

const NAV: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/industries', label: 'Verticals',
    dropdown: [
      { label: 'Pulp & Paper',            href: '/industries', img: `${BASE}/PulpPaper0-CFYr6q1z.jpeg`,           desc: 'DCS, rewinder, sectional drives' },
      { label: 'TMT Rolling Mills',        href: '/industries', img: `${BASE}/TMTRollingMills2-CFNQYEss.jpg`,       desc: 'Flying shear, coil lines, SCADA' },
      { label: 'Furnaces & CCM',           href: '/industries', img: `${BASE}/FurnacesCCM0-CeP1hwHz.webp`,         desc: 'Induction furnace & casting machine' },
      { label: 'Coil Processing Lines',   href: '/industries', img: `${BASE}/CoilProcessingLines1-H8Xt7Tav.webp`, desc: 'CTL, slitter, HR/CR automation' },
      { label: 'Building Automation',     href: '/industries', img: `${BASE}/BuildingAutomation0-CIw5a8aZ.jpg`,   desc: 'BMS, HVAC, fire & CPV panels' },
      { label: 'Cold Storage Automation', href: '/industries', img: `${BASE}/ColdStorageAutomation0-CjPTIht3.jpg`,desc: 'Refrigeration & temperature control' },
      { label: 'Software & SCADA',        href: '/industries', img: `${BASE}/SoftwareSCADA0-j6zzjK_i.jpg`,        desc: 'SCADA, HMI & cloud dashboards' },
      { label: 'EMS — Energy Mgmt.',      href: '/industries', img: `${BASE}/EMS0-DQTTRtlR.png`,                  desc: 'Energy monitoring & KWH reports' },
      { label: 'MMS — Machine Mgmt.',     href: '/industries', img: `${BASE}/MMS0-T2dTi101.jpg`,                  desc: 'Machine analytics & IoT data' },
    ],
  },
  {
    href: '/products', label: 'Products',
    dropdown: [
      { label: 'AC / VFD Drives',           href: '/products', img: `${BASE}/ACDrive0-87i251cT.png`,        desc: '0.37kW – 1200kW, ABB System House' },
      { label: 'DC Drives',                  href: '/products', img: `${BASE}/ACDrive2-Otp3Yuwc.jpg`,        desc: 'Retrofit & new DC installations' },
      { label: 'Balluff Sensors',            href: '/products', img: `${BASE}/BalluffSiemens0-DhIy0x2s.jpg`, desc: 'Authorised SI — East India & BD' },
      { label: 'IPA Weighing Solutions',     href: '/products', img: `${BASE}/IPA1-CuAJbc8b.jpg`,            desc: 'Load cells & weigh feeders' },
      { label: 'Bolted Panels (PCC/MCC)',   href: '/products', img: `${BASE}/BoltedPanels0-DoAsP7Dl.jpg`,   desc: 'Control desk, junction boxes' },
      { label: 'LT Busduct',                 href: '/products', img: `${BASE}/LTBusduct0-CFfIjQlh.jpg`,      desc: 'Prefabricated busbar trunking' },
    ],
  },
  {
    href: '/services', label: 'Services',
    dropdown: [
      { label: 'Panel Manufacturing',        href: '/services', img: `${BASE}/Panel0-D3e2k-is.jpg`,          desc: '6,000 sq.ft. factory, 100 doors/mo' },
      { label: 'AC / DC Drive Repairing',    href: '/services', img: `${BASE}/ACDrive1-DFEnjOhF.webp`,       desc: 'On-site servicing & spares' },
      { label: 'ACB Maintenance',            href: '/services', img: `${BASE}/ACB0-BxaI3qOR.jpg`,            desc: 'Air circuit breaker servicing' },
      { label: 'VCB Maintenance (11–33kV)',  href: '/services', img: `${BASE}/VCB1-C5Gp45-j.jpg`,            desc: 'HT vacuum circuit breaker service' },
      { label: 'Site Erection & EPC',        href: '/services', img: `${BASE}/SiteErection0-2JH8nkwL.jpg`,  desc: 'Turnkey installation & commissioning' },
      { label: 'Energy Audit & AMC',         href: '/services', img: `${BASE}/EMS0-DQTTRtlR.png`,            desc: 'Power utilisation & AMC contracts' },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery',  label: 'Gallery'  },
  { href: '/clients',  label: 'Clients'  },
  { href: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const path = usePathname()
  const [mobileOpen,      setMobileOpen]      = useState(false)
  const [activeDropdown,  setActiveDropdown]  = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const dropOpen  = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setActiveDropdown(label)
  }
  const dropClose = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isActive = (l: NavLink) =>
    l.href === '/' ? path === '/' : path.startsWith(l.href)

  return (
    <header className="sticky top-0 z-50 shadow-md">

      {/* ── Top utility bar ── */}
      <div className="bg-blue hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/85 text-xs font-heading">
            <a href="tel:+919830505000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3 h-3 fill-amber shrink-0" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              +91 98305 05000
            </a>
            <a href="mailto:kiran@automationnetwork.net" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3 h-3 fill-amber shrink-0" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              kiran@automationnetwork.net
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/55 text-[10px] font-heading tracking-wider uppercase">
            <span className="text-white/75">ISO 9001:2015 Certified</span>
            <span className="w-px h-3 bg-white/20" />
            <span>India · Bangladesh · Nepal</span>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">

          {/* Brand — both logos */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-12 w-[96px]">
              <Image src="/anspl-logo.png" alt="ANSPL" fill className="object-contain object-left" priority />
            </div>
            <div className="hidden sm:block w-px h-9 bg-gray-300" />
            <div className="hidden sm:block relative h-[34px] w-[144px]">
              <Image src="/automation-logo.png" alt="Automation Network & Services Pvt. Ltd." fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center h-full">
            {NAV.map(l => (
              <li
                key={l.href}
                className="relative h-full flex items-center"
                onMouseEnter={() => l.dropdown ? dropOpen(l.label) : dropClose()}
                onMouseLeave={dropClose}
              >
                <Link
                  href={l.href}
                  className={`relative flex items-center gap-0.5 font-heading font-semibold text-[11px] tracking-wider uppercase px-2.5 py-2 rounded transition-colors whitespace-nowrap ${
                    isActive(l) ? 'text-blue' : 'text-navy/60 hover:text-blue'
                  }`}
                >
                  {l.label}
                  {l.dropdown && (
                    <svg
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${activeDropdown === l.label ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20" fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  {isActive(l) && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-amber rounded-full" />
                  )}
                </Link>

                {/* Dropdown panel */}
                {l.dropdown && (
                  <div
                    className={`absolute top-full z-50 bg-white border border-gray-200 rounded-xl shadow-2xl shadow-navy/10 overflow-hidden transition-all duration-200 ${
                      activeDropdown === l.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    } ${l.label === 'Verticals' ? 'w-[580px]' : 'w-[480px]'} ${
                      /* shift left for last dropdown items so they don't overflow right */
                      l.label === 'Services' ? '-left-20' : 'left-0'
                    }`}
                    onMouseEnter={() => dropOpen(l.label)}
                    onMouseLeave={dropClose}
                  >
                    {/* Header strip */}
                    <div className="bg-blue px-4 py-2.5 flex items-center gap-2">
                      <span className="text-amber font-heading font-black text-[10px] tracking-[3px] uppercase">{l.label}</span>
                      <span className="text-white/30 text-[10px]">—</span>
                      <span className="text-white/50 text-[10px] font-heading">
                        {l.label === 'Verticals' ? '9 Industry Verticals' : l.label === 'Products' ? '6 Product Categories' : '6 Service Areas'}
                      </span>
                    </div>

                    {/* Items grid */}
                    <div className="p-2">
                      <div className={`grid gap-0.5 ${l.label === 'Verticals' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                        {l.dropdown.map(item => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-blue-light group transition-colors"
                          >
                            <div className="relative w-10 h-8 rounded-md overflow-hidden shrink-0 bg-gray-100">
                              <Image
                                src={item.img}
                                alt={item.label}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-heading font-bold text-navy text-[11px] leading-tight group-hover:text-blue transition-colors truncate">{item.label}</p>
                              <p className="text-gray-400 text-[10px] leading-tight truncate mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Footer — View All */}
                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 flex items-center justify-between">
                      <span className="text-gray-400 text-[10px] font-heading uppercase tracking-wider">
                        Automation Network & Services Pvt. Ltd.
                      </span>
                      <Link
                        href={l.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-1 text-blue font-heading font-bold text-[11px] uppercase tracking-wider hover:text-blue-dark transition-colors"
                      >
                        View All
                        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-amber text-navy font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-amber-dark transition-colors shadow-sm whitespace-nowrap"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2 rounded hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-navy transition-all origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-all origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Blue utility strip */}
          <div className="bg-blue px-5 py-2.5 flex items-center justify-between text-white/80 text-xs font-heading">
            <a href="tel:+919830505000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              +91 98305 05000
            </a>
            <a href="tel:+919339505012" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              +91 93395 05012
            </a>
          </div>

          <ul className="flex flex-col gap-0 px-3 py-2">
            {NAV.map(l => (
              <li key={l.href}>
                {l.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === l.label ? null : l.label)}
                      className="w-full flex items-center justify-between font-heading font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-lg text-navy/70 hover:text-blue hover:bg-gray-50 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${mobileAccordion === l.label ? 'bg-amber' : 'bg-gray-300'}`} />
                        {l.label}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === l.label ? 'rotate-180 text-blue' : ''}`}
                        viewBox="0 0 20 20" fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {mobileAccordion === l.label && (
                      <div className="ml-3 mb-1 border-l-2 border-amber/30 pl-3">
                        {l.dropdown.map(item => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-light transition-colors group"
                          >
                            <div className="relative w-10 h-8 rounded overflow-hidden shrink-0 bg-gray-100">
                              <Image src={item.img} alt={item.label} fill className="object-cover" sizes="40px" />
                            </div>
                            <div>
                              <p className="font-heading font-bold text-navy/80 text-xs uppercase tracking-wide group-hover:text-blue transition-colors">{item.label}</p>
                              <p className="text-gray-400 text-[10px]">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href={l.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-1 px-3 py-2 text-blue font-heading font-bold text-[11px] uppercase tracking-wider hover:text-blue-dark transition-colors"
                        >
                          View All {l.label}
                          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-lg transition-all ${
                      isActive(l)
                        ? 'text-blue bg-blue-light border-l-[3px] border-amber'
                        : 'text-navy/70 hover:text-blue hover:bg-gray-50'
                    }`}
                  >
                    {isActive(l) && <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />}
                    {l.label}
                  </Link>
                )}
              </li>
            ))}

            <li className="mt-2 px-0">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-lg text-center hover:bg-amber-dark transition-colors"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
