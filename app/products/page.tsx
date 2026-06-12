import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import {
  IconBolt, IconMonitor, IconChip, IconScale,
  IconDrives, IconConstruction, IconBlueprint, IconGear,
} from '@/components/Icons'
export const metadata: Metadata = { title: 'Products' }

const products = [
  { badge:'Authorised Distributor', title:'VFD Drives (0.37kW – 1200kW)', img:'https://anspl.co.in/assets/ACDrive0-87i251cT.png', desc:'Complete range of Variable Frequency Drives — selection, supply, panel integration and commissioning.', points:['AC drives (VVVF) and DC drives for all applications','0.37kW to 1200kW — covers every motor load','On-site commissioning, parameter setting and training','After-sales repair, spares and AMC support'] },
  { badge:'System Integrator', title:'PLC & Automation Controllers', img:'https://anspl.co.in/assets/SoftwareSCADA0-j6zzjK_i.jpg', desc:'25+ years PLC integration — hardware selection, programming, commissioning and operator training.', points:['PLC hardware selection and panel design','Custom programming for process & sequence control','Servo controllers for machine tools & SPMs','DCS packages for continuous process industries'] },
  { badge:'Balluff India — East India SI', title:'Balluff Industrial Sensors', img:'https://anspl.co.in/assets/BalluffSiemens0-DhIy0x2s.jpg', desc:'Authorised SI for Balluff India covering East India, Bangladesh & Nepal — full sensor range.', points:['Inductive, capacitive and magnetic proximity sensors','Photoelectric sensors and linear position systems','RFID for industrial track & trace','IO-Link smart sensor technology'] },
  { badge:'IPA India SI', title:'IPA Weigh Feeders & Load Cells', img:'https://anspl.co.in/assets/IPA1-CuAJbc8b.jpg', desc:'Authorised SI for IPA India, Bangalore — specialist weighing automation.', points:['Load cells for industrial weighing & force measurement','Gravimetric and volumetric weigh feeders','Belt weighers and conveyor weighing systems','Complete PLC integration and commissioning'] },
]

const panels = [
  { Icon: IconBolt,         t:'33kV/11kV VCB Panels',   d:'HT switchgear applications' },
  { Icon: IconDrives,       t:'LT Busduct',              d:'Power distribution' },
  { Icon: IconConstruction, t:'PCC / PDB Panels',        d:'Power control & distribution' },
  { Icon: IconMonitor,      t:'VFD Panels',              d:'Drive panel systems' },
  { Icon: IconGear,         t:'PLC Panels',              d:'Custom control panels' },
  { Icon: IconBlueprint,    t:'Control Desks',           d:'Operator consoles' },
  { Icon: IconDrives,       t:'DG Sync Panels',          d:'Generator synchronization' },
  { Icon: IconScale,        t:'Junction Boxes',          d:'Marshalling panels' },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Authorised Distributor & SI Partner" subtitle="Supplying and commissioning industry-leading automation products across India, Bangladesh and Nepal." breadcrumb="Products" imgSrc="https://anspl.co.in/assets/LTBusduct0-CFfIjQlh.jpg" />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Supply & Commission</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Products We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map(p => (
              <div key={p.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift">
                <div className="relative h-52 img-zoom overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                  <span className="absolute top-3 right-3 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded">{p.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {p.points.map(pt => (
                      <li key={pt} className="flex gap-2.5 text-sm text-gray-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue shrink-0 mt-0.5">
                          <path d="M4.5 12.75l6 6 9-13.5"/>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-block bg-blue text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-blue-dark transition-colors">Enquire Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel light>In-House Manufacturing</SectionLabel>
          <h2 className="font-heading font-black text-white text-4xl mb-4">Panels We Manufacture</h2>
          <p className="text-white/50 text-sm mb-12 max-w-lg">All panels built at our 6,000 sq.ft. Ramchandrapur factory with automatic busbar bending — only one in East India.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {panels.map(({ Icon, t, d }) => (
              <div key={t} className="bg-white/[0.05] border border-white/10 rounded-xl p-5 text-center hover:bg-blue/20 hover:border-blue/40 transition-all">
                <div className="w-10 h-10 bg-blue/20 rounded-xl flex items-center justify-center text-amber mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">{t}</h4>
                <p className="text-white/45 text-xs">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Looking for a Specific Product?" sub="Our engineers will select the right configuration for your application." primary={{ label:'Send an Enquiry', href:'/contact' }} />
    </>
  )
}
