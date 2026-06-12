'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BASE = 'https://anspl.co.in/assets'

const CATS = ['All', 'Panel Mfg.', 'Steel & Mills', 'Paper & Pulp', 'Building Auto.', 'Drives & SCADA'] as const
type Cat = typeof CATS[number]

const ITEMS: { cat: Exclude<Cat,'All'>; title: string; sub: string; img: string; wide?: boolean }[] = [

  /* ── Panel Manufacturing ── */
  { cat:'Panel Mfg.', wide:true,  title:'Control Panel Assembly',          sub:'Ramchandrapur Factory, Kolkata',    img:`${BASE}/Panel0-D3e2k-is.jpg` },
  { cat:'Panel Mfg.',              title:'Bolted Panel Construction',        sub:'Panel Building Unit, East India',   img:`${BASE}/BoltedPanels0-DoAsP7Dl.jpg` },
  { cat:'Panel Mfg.',              title:'Bolted Panel Production',          sub:'In-house Manufacturing',            img:`${BASE}/boltedPanel-CQHHeayI.png` },
  { cat:'Panel Mfg.', wide:true,  title:'Site Erection & Commissioning',    sub:'Client Site Installation',          img:`${BASE}/SiteErection0-2JH8nkwL.jpg` },
  { cat:'Panel Mfg.',              title:'Site Installation Work',           sub:'On-site Electrical Works',          img:`${BASE}/SiteErection1-BheS__RQ.jpg` },
  { cat:'Panel Mfg.',              title:'Panel Installation On-Site',       sub:'Commissioning, East India',         img:`${BASE}/SiteErection2-CZuJ0WN6.jpg` },
  { cat:'Panel Mfg.',              title:'Air Circuit Breaker (ACB) Panel',  sub:'HT/LT Switchgear',                 img:`${BASE}/ACB0-BxaI3qOR.jpg` },
  { cat:'Panel Mfg.',              title:'ACB Panel Assembly',               sub:'Kolkata Factory',                   img:`${BASE}/ACB1-D79I7gCx.png` },
  { cat:'Panel Mfg.',              title:'ACB Installation',                 sub:'Industrial Project',                img:`${BASE}/ACB2-Db2FQxnm.jpg` },
  { cat:'Panel Mfg.',              title:'AC/DC Drive Panel',                sub:'VFD Panel Manufacturing',           img:`${BASE}/ACDC0-qVDvyzPY.avif` },
  { cat:'Panel Mfg.',              title:'11kV VCB Panel',                   sub:'HT Switchgear, East India',         img:`${BASE}/VCB0-D5cIkWa_.avif` },
  { cat:'Panel Mfg.',              title:'VCB Switchgear Panel',             sub:'Vacuum Circuit Breaker',            img:`${BASE}/VCB1-C5Gp45-j.jpg` },
  { cat:'Panel Mfg.', wide:true,  title:'LT Busduct Installation',          sub:'Low Tension Busbar System',         img:`${BASE}/LTBusduct0-CFfIjQlh.jpg` },
  { cat:'Panel Mfg.',              title:'Busduct Connection',               sub:'LT Power Distribution',             img:`${BASE}/LTBusduct1-BS1WCvCT.jpg` },
  { cat:'Panel Mfg.',              title:'LT Busduct System',                sub:'Prefabricated Busbar Trunking',     img:`${BASE}/LTBusduct2-DQEld5lw.jpg` },

  /* ── Steel & Rolling Mills ── */
  { cat:'Steel & Mills', wide:true, title:'TMT Rolling Mill Automation',     sub:'PLC & SCADA, East India',          img:`${BASE}/TMTRollingMills0-DAk_EFP_.png` },
  { cat:'Steel & Mills',             title:'Rolling Mill PLC System',         sub:'Drives & Control, Jharkhand',      img:`${BASE}/TMTRollingMills1-Bchznq5t.webp` },
  { cat:'Steel & Mills',             title:'Rolling Mill Control Panel',      sub:'HMI & Control Desk',               img:`${BASE}/TMTRollingMills2-CFNQYEss.jpg` },
  { cat:'Steel & Mills',             title:'TMT Mill Commissioning',          sub:'Turnkey EPC, East India',           img:`${BASE}/TMTRollingMills3-D5h3I46v.jpg` },
  { cat:'Steel & Mills',             title:'TMT Bar Production Line',         sub:'Flying Shear, Rod Mill',            img:`${BASE}/TMT0-C4LyS1f7.jpg` },
  { cat:'Steel & Mills', wide:true, title:'Coil Processing Line',            sub:'HR/CR Slitter, Automation',         img:`${BASE}/CoilProcessingLines1-H8Xt7Tav.webp` },
  { cat:'Steel & Mills',             title:'HR/CR Slitter Control',           sub:'Steel Processing Plant',            img:`${BASE}/CoilProcessingLines2-BSmvAot-.jpg` },
  { cat:'Steel & Mills',             title:'Coil Processing Automation',      sub:'Coil Line Drives & PLC',            img:`${BASE}/CoilProcessingLines3-Doxsw6bz.jpg` },
  { cat:'Steel & Mills',             title:'Wire Drawing Plant',              sub:'8-Block Wire Drawing, West Bengal', img:`${BASE}/WireDrawingPlants0-CPzQ96lK.jpg` },
  { cat:'Steel & Mills',             title:'Multi-block Wire Drawing',        sub:'AC Drive System, Miki Wire',        img:`${BASE}/WireDrawingPlants1-Cx0gL6WJ.jpg` },
  { cat:'Steel & Mills', wide:true, title:'Furnace Control System',          sub:'Induction Furnace, Steel Plant',    img:`${BASE}/FurnacesCCM0-CeP1hwHz.webp` },
  { cat:'Steel & Mills',             title:'CCM Furnace Automation',          sub:'Continuous Casting Machine',        img:`${BASE}/FurnacesCCM1-38eKbwjF.jpg` },
  { cat:'Steel & Mills',             title:'Furnace Process Control',         sub:'Heating & Temperature Control',     img:`${BASE}/Furnace-DzR91K7g.jpg` },

  /* ── Paper & Pulp ── */
  { cat:'Paper & Pulp', wide:true,  title:'Pulp & Paper Plant Automation',   sub:'130 TPD DCS, Balaji Paper',         img:`${BASE}/PulpPaper0-CFYr6q1z.jpeg` },
  { cat:'Paper & Pulp',              title:'Paper Machine Sectional Drives',  sub:'Krishna Tissues, West Bengal',      img:`${BASE}/PulpPaper1-C-jgOJoy.webp` },
  { cat:'Paper & Pulp',              title:'Paper Mill Electrical Works',     sub:'PCC/MCC, PLC Integration',          img:`${BASE}/PulpPaper2-BZMfCP6t.jpg` },
  { cat:'Paper & Pulp',              title:'Paper Mill Installation',         sub:'Turnkey Electrical, East India',    img:`${BASE}/PaperMill0-aLJga4xU.avif` },

  /* ── Building Automation ── */
  { cat:'Building Auto.', wide:true, title:'Building Management System',     sub:'BMS & HVAC, Commercial Project',    img:`${BASE}/BuildingAutomation0-CIw5a8aZ.jpg` },
  { cat:'Building Auto.',             title:'HVAC Automation Panel',          sub:'Air Handling Unit Control',          img:`${BASE}/BuildingAutomation1-B4qfWu4t.jpg` },
  { cat:'Building Auto.',             title:'Building Automation Control',    sub:'Kolkata Commercial Project',         img:`${BASE}/BuildingAutomation2-B5qBP5yI.jpg` },
  { cat:'Building Auto.', wide:true, title:'Cold Storage Automation',        sub:'Refrigeration & Temperature Control',img:`${BASE}/ColdStorageAutomation0-CjPTIht3.jpg` },
  { cat:'Building Auto.',             title:'Refrigeration Control System',   sub:'Cold Chain Automation, East India', img:`${BASE}/ColdStorageAutomation1-BoxddJwz.jpg` },

  /* ── Drives & SCADA ── */
  { cat:'Drives & SCADA', wide:true, title:'AC VFD Drive Systems',           sub:'0.37kW to 1200kW, ABB System House',img:`${BASE}/ACDrive0-87i251cT.png` },
  { cat:'Drives & SCADA',             title:'Drive Panel Assembly',           sub:'VFD Integration, East India',        img:`${BASE}/ACDrive1-DFEnjOhF.webp` },
  { cat:'Drives & SCADA',             title:'VFD Installation',               sub:'AC Drive Commissioning',             img:`${BASE}/ACDrive2-Otp3Yuwc.jpg` },
  { cat:'Drives & SCADA', wide:true, title:'SCADA Interface Design',         sub:'Real-time Process Monitoring',       img:`${BASE}/SoftwareSCADA0-j6zzjK_i.jpg` },
  { cat:'Drives & SCADA',             title:'HMI & SCADA Panel',             sub:'Siemens SIMATIC, PLC System',        img:`${BASE}/SoftwareSCADA1-DfJZpc-G.jpg` },
  { cat:'Drives & SCADA',             title:'Energy Management Dashboard',    sub:'WBSEDCL & DG Real-time Monitor',    img:`${BASE}/EMS0-DQTTRtlR.png` },
  { cat:'Drives & SCADA',             title:'Machine Management System',      sub:'Jute & Process Industries',          img:`${BASE}/MMS0-T2dTi101.jpg` },
  { cat:'Drives & SCADA',             title:'MMS Control Interface',          sub:'Production Analytics, IoT',          img:`${BASE}/MMS1-TLPix5Vx.png` },
  { cat:'Drives & SCADA', wide:true, title:'Balluff Sensor Integration',     sub:'Authorised SI — East India, Nepal',  img:`${BASE}/BalluffSiemens0-DhIy0x2s.jpg` },
  { cat:'Drives & SCADA',             title:'Siemens PLC Installation',       sub:'S7 Series, Industrial Automation',   img:`${BASE}/BalluffSiemens1-D2StFLJk.jpg` },
  { cat:'Drives & SCADA',             title:'Balluff India Deployment',       sub:'Sensor Systems, 2022 Authorisation', img:`${BASE}/BalluffSiemens2-CtDa80DF.jpg` },
  { cat:'Drives & SCADA',             title:'Automation Sensor Systems',      sub:'IoT & Industrial Sensing',           img:`${BASE}/BalluffSiemens3-ur9Lxts3.jpg` },
  { cat:'Drives & SCADA',             title:'IPA Weighing Automation',        sub:'Load Cells, Weigh Feeders',          img:`${BASE}/IPA0-DwJbJSLP.avif` },
  { cat:'Drives & SCADA',             title:'Load Cell Integration',          sub:'IPA India SI, East India',           img:`${BASE}/IPA1-CuAJbc8b.jpg` },
]

const CAT_COLORS: Record<Exclude<Cat,'All'>, string> = {
  'Panel Mfg.':    'bg-blue/90',
  'Steel & Mills': 'bg-amber/90',
  'Paper & Pulp':  'bg-green-700/90',
  'Building Auto.':'bg-purple-700/90',
  'Drives & SCADA':'bg-red-700/90',
}

export default function GalleryPage() {
  const [active, setActive] = useState<Cat>('All')

  const visible = active === 'All' ? ITEMS : ITEMS.filter(i => i.cat === active)

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-navy overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0">
          <Image src={`${BASE}/TMTRollingMills1-Bchznq5t.webp`} alt="" fill className="object-cover opacity-15" priority />
        </div>
        <div className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber via-amber/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-white/40 text-xs font-heading tracking-[2px] uppercase mb-5">
            <Link href="/" className="text-amber hover:underline">Home</Link>{' / '}
            <span className="text-white/60">Gallery</span>
          </p>
          <div className="flex items-center gap-2 mb-3 font-heading font-bold text-[11px] tracking-[3px] uppercase text-amber">
            <span className="block w-5 h-0.5 bg-amber" />Our Work in Pictures
          </div>
          <h1 className="font-heading font-black text-white text-4xl md:text-5xl leading-tight max-w-2xl mt-2 mb-4">
            Project Gallery
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Real project photos from our manufacturing facility, client sites and completed installations across India and South Asia.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-blue">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[['51+','Project Photos'],['5','Categories'],['3','Countries'],['28+','Years Active']].map(([n,l],i) => (
              <div key={n} className={`text-center py-7 px-4 ${i < 3 ? 'border-r border-white/15' : ''}`}>
                <div className="font-heading font-black text-amber text-3xl leading-none">{n}</div>
                <div className="text-white/55 text-[11px] tracking-widest uppercase mt-1.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border-2 transition-all ${
                  active === cat
                    ? 'bg-navy border-navy text-white shadow-lg shadow-navy/20'
                    : 'border-gray-300 text-gray-500 hover:border-navy hover:text-navy bg-white'
                }`}
              >
                {cat}
                <span className={`ml-2 text-[10px] rounded-full px-1.5 py-0.5 ${active === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {cat === 'All' ? ITEMS.length : ITEMS.filter(i => i.cat === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((item, i) => (
              <div
                key={`${item.cat}-${i}`}
                className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group card-lift bg-navy ${
                  item.wide ? 'sm:col-span-2 lg:col-span-2 aspect-[16/7]' : 'aspect-video'
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                {/* Dark base overlay */}
                <div className="absolute inset-0 bg-navy/30" />

                {/* Hover overlay */}
                <div className="gallery-overlay absolute inset-0 bg-navy/75 flex flex-col justify-end p-6">
                  <span className={`inline-block self-start text-white font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded mb-2 ${CAT_COLORS[item.cat]}`}>
                    {item.cat}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base leading-snug mb-1">{item.title}</h3>
                  <p className="text-white/60 text-xs">{item.sub}</p>
                </div>

                {/* Always-visible category badge */}
                <span className={`absolute top-3 right-3 text-white font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded opacity-80 group-hover:opacity-0 transition-opacity ${CAT_COLORS[item.cat]}`}>
                  {item.cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center gap-2 mb-3 font-heading font-bold text-[11px] tracking-[3px] uppercase text-amber justify-center">
            <span className="block w-5 h-0.5 bg-amber" />Projects Done For<span className="block w-5 h-0.5 bg-amber" />
          </div>
          <h2 className="font-heading font-black text-navy text-3xl mb-10">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Tata Steel','Tata Motors','L&T','Danieli','Tenova','Siemens','Hindalco','IndianOil',
              'Berger Paints','Emami','Jindal India','SRMB Srijan','Balaji Paper','Krishna Tissues'].map(c => (
              <span key={c} className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 font-heading font-bold text-navy text-sm hover:border-blue hover:text-blue hover:bg-blue-light transition-all">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-br from-blue to-blue-dark py-20 overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[14rem] opacity-[0.05] select-none">⚡</span>
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight mb-2">Have a Project to Discuss?</h2>
            <p className="text-white/65 text-base">Our engineers will study your requirements and propose the right automation solution.</p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <Link href="/contact" className="bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-amber-dark transition-colors">
              Contact Our Engineers
            </Link>
            <Link href="/projects" className="border-2 border-white/40 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-white hover:text-navy transition-all">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
