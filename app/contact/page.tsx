'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/UI'
import { IconFactory, IconBuilding, IconMapPin, IconGlobe, IconPhone, IconMail, IconClock, IconBolt } from '@/components/Icons'

const requirements = [
  'VFD / Drive Systems','Panel Manufacturing (PCC / MCC / VFD)','PLC / SCADA / DCS',
  'Balluff Sensors Enquiry','IPA Weigh Feeders','Energy Audit / Power Report',
  'Project Consultancy','AMC / Repair Services','General Enquiry',
]
const industries = [
  'Rolling Mills / Steel','Paper & Pulp','Wire Drawing','Building & Infrastructure',
  'Machinery / CNC','Coil Processing','Food & Cold Storage','Power & Utilities','Other',
]

const offices = [
  {
    Icon: IconFactory,
    title: 'Head Office & Works',
    lines: ['Ramchandrapur, Narendrapur', 'P.S. Sonarpur, Kolkata – 700 103', 'West Bengal, India'],
    map: 'https://maps.google.com/?q=Ramchandrapur+Narendrapur+Kolkata',
  },
  {
    Icon: IconBuilding,
    title: 'Marketing Office',
    lines: ['3rd Floor, 44A, Shyama Pally', 'Jadavpur, Kolkata – 700 032', 'West Bengal, India'],
    map: 'https://maps.google.com/?q=44A+Shyama+Pally+Jadavpur+Kolkata',
  },
  {
    Icon: IconMapPin,
    title: 'Patna Office',
    lines: ['Omsai Villa, #302, 3rd Floor', 'Kankarbagh, Patna – 800 020', 'Bihar, India'],
    map: null,
  },
  {
    Icon: IconGlobe,
    title: 'Dhaka Office',
    lines: ['Mr. Alok Kumar — +880 1933 168401', 'College Gate, Tongi, Dhaka', 'Bangladesh'],
    map: null,
  },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', req: '', ind: '', msg: '' })

  function submit() {
    if (!form.name || !form.email || !form.msg) {
      alert('Please fill in name, email and project details.')
      return
    }
    setSent(true)
  }

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
              { Icon: IconPhone, l: 'Phone 1', v: '+91 98305 05000', href: 'tel:+919830505000' },
              { Icon: IconPhone, l: 'Phone 2', v: '+91 93395 05012', href: 'tel:+919339505012' },
              { Icon: IconMail,  l: 'Primary Email', v: 'kiran@automationnetwork.net', href: 'mailto:kiran@automationnetwork.net' },
              { Icon: IconMail,  l: 'Support Email', v: 'msupport@automationnetwork.net', href: 'mailto:msupport@automationnetwork.net' },
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

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
            <h2 className="font-heading font-black text-navy text-2xl mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

            {sent && (
              <div className="bg-green-50 border border-green-200 text-green-700 font-heading font-bold text-sm px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[['name', 'Your Name *', 'Full Name'], ['company', 'Company', 'Company Name']].map(([k, l, p]) => (
                <div key={k}>
                  <label className="block font-heading font-bold text-navy text-[11px] tracking-[2px] uppercase mb-2">{l}</label>
                  <input type="text" placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue transition-colors" />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[['email', 'Email *', 'email', 'your@email.com'], ['phone', 'Phone', 'tel', '+91 98300 00000']].map(([k, l, t, p]) => (
                <div key={k}>
                  <label className="block font-heading font-bold text-navy text-[11px] tracking-[2px] uppercase mb-2">{l}</label>
                  <input type={t} placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue transition-colors" />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block font-heading font-bold text-navy text-[11px] tracking-[2px] uppercase mb-2">Requirement</label>
              <select value={form.req} onChange={e => setForm({ ...form, req: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue transition-colors appearance-none bg-white">
                <option value="">Select your requirement…</option>
                {requirements.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-heading font-bold text-navy text-[11px] tracking-[2px] uppercase mb-2">Industry</label>
              <select value={form.ind} onChange={e => setForm({ ...form, ind: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue transition-colors appearance-none bg-white">
                <option value="">Select industry…</option>
                {industries.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="mb-7">
              <label className="block font-heading font-bold text-navy text-[11px] tracking-[2px] uppercase mb-2">Project Details *</label>
              <textarea rows={5} placeholder="Describe your requirement — plant capacity, location, application…"
                value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue transition-colors resize-y" />
            </div>
            <button onClick={submit}
              className="w-full bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-lg hover:bg-amber-dark transition-colors flex items-center justify-center gap-2">
              <IconBolt className="w-4 h-4" />
              Send Message
            </button>
          </div>

          {/* Offices */}
          <div className="space-y-4">
            {offices.map(o => (
              <div key={o.title} className="bg-navy rounded-2xl p-7">
                <h4 className="font-heading font-bold text-amber text-[11px] tracking-[2px] uppercase mb-3 flex items-center gap-2">
                  <o.Icon className="w-4 h-4" />
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
                { Icon: IconPhone, l: 'Helpline',      v: '+91 98305 05000' },
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
