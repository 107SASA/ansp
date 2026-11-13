import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { INDUSTRIES } from '@/lib/catalog'
import { PageHero, StatsBar, CTABanner, SectionLabel } from '@/components/UI'
export const metadata: Metadata = { title: 'Industries' }


export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries We Power & Automate" subtitle="25+ years delivering precision automation to demanding industrial verticals across India and South Asia." breadcrumb="Industries" imgSrc="https://anspl.co.in/assets/TMTRollingMills1-Bchznq5t.webp" />
      <StatsBar stats={[{n:String(INDUSTRIES.length),l:'Industry Verticals'},{n:'500+',l:'Projects Delivered'},{n:'25+',l:'Years Experience'},{n:'3',l:'Countries'}]} />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Industry-Specific Solutions</h2>
          <div className="space-y-5">
            {INDUSTRIES.map((ind, i) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="grid lg:grid-cols-[320px_1fr] rounded-2xl overflow-hidden border border-gray-200 card-lift group">
                <div className="relative min-h-[220px] img-zoom overflow-hidden">
                  <Image src={ind.img} alt={ind.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-blue/30 transition-colors" />
                  <span className="absolute bottom-4 left-4 w-10 h-10 bg-amber text-navy font-heading font-black text-sm rounded-lg flex items-center justify-center">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-navy text-xl mb-3 group-hover:text-blue transition-colors">{ind.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{ind.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.points.map(t => <span key={t} className="bg-blue-light text-blue font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">{t}</span>)}
                  </div>
                  <span className="font-heading font-bold text-blue text-xs uppercase tracking-wider mt-5">View Industry →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Don't See Your Industry?" sub="We work across many sectors. Tell us your specific requirement." primary={{ label:'Contact Our Engineers', href:'/contact' }} />
    </>
  )
}
