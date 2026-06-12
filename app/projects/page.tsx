import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import { IconMapPin } from '@/components/Icons'
export const metadata: Metadata = { title: 'Projects' }

const projects = [
  { tag:'Electrification', title:'Sand Plant Electrification', client:'L&T', loc:'East India', type:'Turnkey EPC', img:'https://anspl.co.in/assets/SiteErection2-CZuJ0WN6.jpg' },
  { tag:'Wire Drawing',    title:'8-Block Wire Drawing Automation', client:'Miki Wire', loc:'West Bengal', type:'Drives + PLC + SCADA', img:'https://anspl.co.in/assets/WireDrawingPlants1-Cx0gL6WJ.jpg' },
  { tag:'SCADA / Energy',  title:'Energy Dashboard — WBSEDCL Monitoring', client:'Industrial Plant', loc:'Kolkata', type:'Software + Integration', img:'https://anspl.co.in/assets/SoftwareSCADA0-j6zzjK_i.jpg' },
  { tag:'Rolling Mill',    title:'Danieli Rolling Mill — SCADA & PLC', client:'Danieli Group', loc:'East India', type:'PLC + MCC + SCADA', img:'https://anspl.co.in/assets/TMTRollingMills3-D5h3I46v.jpg' },
  { tag:'Drive System',    title:'Sectional Drive — Krishna Tissues', client:'Krishna Tissues', loc:'West Bengal', type:'Drive System', img:'https://anspl.co.in/assets/PulpPaper2-BZMfCP6t.jpg' },
  { tag:'Panel Mfg.',      title:'PCC Panel — Bengal Tools', client:'Bengal Tools', loc:'Kolkata', type:'Panel Manufacturing', img:'https://anspl.co.in/assets/BoltedPanels0-DoAsP7Dl.jpg' },
  { tag:'System Integration', title:'Steel Plant — Tenova India', client:'Tenova India', loc:'East India', type:'System Integration', img:'https://anspl.co.in/assets/FurnacesCCM1-38eKbwjF.jpg' },
  { tag:'Electrification', title:'11kV VCB Panel — Sugar Plant', client:'Sugar Plant', loc:'East India', type:'HT Panel Mfg.', img:'https://anspl.co.in/assets/VCB1-C5Gp45-j.jpg' },
  { tag:'Building Auto.',  title:'BMS & HVAC Automation', client:'Commercial Developer', loc:'Kolkata', type:'BMS + HVAC + Fire', img:'https://anspl.co.in/assets/BuildingAutomation2-B5qBP5yI.jpg' },
]

const clients = ['L&T','Danieli Group','Tenova India','Miki Wire','Krishna Tissues','Bengal Tools','Balluff India','IPA India','ABB','Bosch Rexroth']

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projects Delivered Across India" subtitle="500+ automation and electrical projects across steel, paper, building automation, wire drawing and more since 1997." breadcrumb="Projects" imgSrc="https://anspl.co.in/assets/SiteErection0-2JH8nkwL.jpg" />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Project Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(p => (
              <div key={p.title} className="relative rounded-2xl overflow-hidden h-60 img-zoom cursor-pointer group card-lift">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <div className="overlay-hover absolute inset-0 bg-gradient-to-t from-navy/92 to-navy/10 group-hover:from-blue/92 group-hover:to-blue/15" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded mb-2">{p.tag}</span>
                  <h3 className="font-heading font-bold text-white text-base mb-2 leading-tight">{p.title}</h3>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-white/55 text-xs flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-amber/70"><path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>
                      {p.client}
                    </span>
                    <span className="text-white/55 text-xs flex items-center gap-1">
                      <IconMapPin className="w-3 h-3 text-amber/70" />{p.loc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Trusted By</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-10">Clients & OEM Partners</h2>
          <div className="flex flex-wrap gap-3">
            {clients.map(c => (
              <span key={c} className="bg-white border border-gray-200 rounded-lg px-5 py-3 font-heading font-bold text-navy text-sm hover:border-blue hover:text-blue transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Have a Project in Mind?" sub="Share your requirements and let our team propose the right solution." primary={{ label:'Discuss Your Project', href:'/contact' }} />
    </>
  )
}
