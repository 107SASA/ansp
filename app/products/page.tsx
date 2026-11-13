import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import {
  IconBolt, IconMonitor, IconChip, IconScale,
  IconDrives, IconConstruction, IconBlueprint, IconGear,
} from '@/components/Icons'
import { PRODUCTS } from '@/lib/catalog'

export const metadata: Metadata = { title: 'Products' }

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
      <PageHero title="Authorised Distributor & SI Partner" subtitle="Supplying and commissioning industry-leading automation products across India and South Asia." breadcrumb="Products" imgSrc="https://anspl.co.in/assets/LTBusduct0-CFfIjQlh.jpg" />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Supply & Commission</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Products We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map(p => (
              <div key={p.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift flex flex-col">
                <div className="relative h-52 img-zoom overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                  <span className="absolute top-3 right-3 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded">{p.badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    <Link href={`/products/${p.slug}`} className="hover:text-blue transition-colors">{p.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.summary}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.points.map(pt => (
                      <li key={pt} className="flex gap-2.5 text-sm text-gray-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue shrink-0 mt-0.5">
                          <path d="M4.5 12.75l6 6 9-13.5"/>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${p.slug}`} className="inline-block bg-blue text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-blue-dark transition-colors">View Details</Link>
                    <Link href={`/contact?enquiry=${encodeURIComponent(p.title)}`} className="inline-block border-2 border-blue text-blue font-heading font-bold text-xs uppercase tracking-wider px-5 py-2 rounded hover:bg-blue hover:text-white transition-colors">Enquire Now</Link>
                  </div>
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
          <p className="text-white/50 text-sm mb-6 max-w-lg">All panels are built at our 6,000 sq.ft. in-house facility at Narendrapur, Kolkata, with automatic busbar bending — the only one in East India.</p>
          <Link href="/services/panel-manufacturing" className="inline-block font-heading font-bold text-amber text-xs uppercase tracking-wider hover:underline mb-10">Panel Manufacturing Service →</Link>
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
