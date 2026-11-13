import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/UI'
import { IconPhone, IconMail, IconClock } from '@/components/Icons'
import { getPage, getSection } from '@/lib/cms'
import { Suspense } from 'react'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/site'

export const revalidate = false
export const metadata: Metadata = { title: 'Contact' }

type Office = { title: string; lines: string[]; map: string | null }

const STATIC_OFFICES: Office[] = SITE.offices.map(o => ({ title: o.label, lines: [...o.lines], map: o.map }))

export default async function ContactPage() {
  const page = await getPage('contact')
  const officesFields = getSection(page, 'offices')

  const phone1 = officesFields.phone_1 || SITE.phones[0]
  const phone2 = officesFields.phone_2 || SITE.phones[1]
  const emailPrimary = officesFields.email_primary || SITE.email.primary
  const emailSupport = officesFields.email_support || SITE.email.support

  let offices = STATIC_OFFICES
  try {
    if (officesFields.offices_json) {
      const parsed = JSON.parse(officesFields.offices_json)
      if (Array.isArray(parsed) && parsed.length > 0) offices = parsed
    }
  } catch {}

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-white/40 text-xs font-heading tracking-[2px] uppercase mb-5">
            <Link href="/" className="text-amber hover:underline">Home</Link> / Contact
          </p>
          <SectionLabel light>Reach Us</SectionLabel>
          <h1 className="font-heading font-black text-white text-5xl leading-tight mt-2 mb-4">Get in Touch With<br />Our Engineers</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">Have a project requirement or technical question? We respond within 24 business hours.</p>
        </div>
      </section>

      {/* Quick contact bar */}
      <div className="bg-blue">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4">
            {[
              { Icon: IconPhone, l: 'Phone 1',       v: phone1,       href: `tel:${phone1.replace(/\s+/g, '')}` },
              { Icon: IconPhone, l: 'Phone 2',       v: phone2,       href: `tel:${phone2.replace(/\s+/g, '')}` },
              { Icon: IconMail,  l: 'Primary Email', v: emailPrimary, href: `mailto:${emailPrimary}` },
              { Icon: IconMail,  l: 'Support Email', v: emailSupport, href: `mailto:${emailSupport}` },
            ].map(({ Icon, l, v, href }) => (
              <div key={l} className="flex items-center gap-3 py-5 px-4 border-r border-white/15 last:border-r-0">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-amber shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white/50 text-[10px] tracking-[2px] uppercase">{l}</div>
                  <a href={href} className="text-white text-sm font-semibold hover:text-amber transition-colors">{v}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Offices */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

          {/* Offices */}
          <div className="space-y-4">
            {offices.map((o) => (
              <div key={o.title} className="bg-navy rounded-2xl p-7">
                <h4 className="font-heading font-bold text-amber text-[11px] tracking-[2px] uppercase mb-3 flex items-center gap-2">
                  {o.title}
                </h4>
                <div className="text-white/60 text-sm leading-loose">
                  {o.lines.map(line => <p key={line}>{line}</p>)}
                </div>
                {o.map && (
                  <a href={o.map} target="_blank" rel="noopener noreferrer"
                    className="text-amber text-sm hover:underline mt-3 inline-block">
                    View on Google Maps →
                  </a>
                )}
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: IconClock, l: 'Response Time', v: 'Within 24 business hours' },
                { Icon: IconPhone, l: 'Helpline',      v: phone1 },
              ].map(({ Icon, l, v }) => (
                <div key={l} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3">
                  <div className="w-9 h-9 bg-blue-light rounded-lg flex items-center justify-center text-blue shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-gray-400 text-[10px] tracking-[2px] uppercase">{l}</div>
                    <div className="text-navy text-xs font-semibold mt-0.5">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
