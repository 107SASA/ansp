import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import { SERVICES } from '@/lib/catalog'

export const metadata: Metadata = { title: 'Services' }

const process = ['Enquiry & Consultation','Design & Engineering','Manufacturing','Installation','Commissioning']

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="End-to-End Electrical & Automation Services"
        subtitle="From consulting and design to manufacturing, installation and AMC — complete turnkey delivery across India and South Asia."
        breadcrumb="Services"
        imgSrc="https://anspl.co.in/assets/ACDrive1-DFEnjOhF.webp"
      />

      {/* Service cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-lift flex flex-col">
                <div className="relative h-48 img-zoom overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                  {s.badge && (
                    <span className="absolute top-3 left-3 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">
                      {s.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-blue transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.summary}</p>
                  <span className="font-heading font-bold text-blue text-xs uppercase tracking-wider group-hover:text-amber transition-colors">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-14">Our Delivery Process</h2>
          <div className="relative flex flex-col md:flex-row gap-0">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue to-amber" />
            {process.map((step, i) => (
              <div key={step} className="flex-1 text-center relative z-10 px-4 mb-8 md:mb-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-heading font-black text-xl mx-auto mb-4 shadow-lg
                  ${i === process.length - 1
                    ? 'bg-white border-amber text-amber shadow-amber/20'
                    : 'bg-white border-blue text-blue shadow-blue/20'}`}
                  style={{ border: '3px solid' }}
                >
                  {i + 1}
                </div>
                <h4 className="font-heading font-bold text-navy text-sm">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need a Turnkey Solution?" sub="Our engineers will study your requirements and propose the right approach."
        primary={{ label:'Start a Conversation', href:'/contact' }} secondary={{ label:'See Past Projects', href:'/projects' }} />
    </>
  )
}
