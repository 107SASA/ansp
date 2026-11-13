'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { IconBolt } from '@/components/Icons'
import { INDUSTRIES } from '@/lib/catalog'

const requirements = [
  'VFD / Drive Systems','Panel Manufacturing (PCC / MCC / VFD)','PLC / SCADA / DCS',
  'Balluff Sensors Enquiry','IPA Weigh Feeders','Energy Audit / Power Report',
  'Project Consultancy','AMC / Repair Services','General Enquiry',
]
const industries = [...INDUSTRIES.map(i => i.title), 'Other']

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', req: '', ind: '', msg: '' })
  const params = useSearchParams()
  const enquiry = params.get('enquiry')

  // Pre-fill when arriving from a service / product / industry page ("Enquire Now")
  useEffect(() => {
    if (!enquiry) return
    setForm(f => ({
      ...f,
      ind: industries.includes(enquiry) ? enquiry : f.ind,
      msg: f.msg || `Enquiry: ${enquiry}\n\n`,
    }))
  }, [enquiry])

  function submit() {
    if (!form.name || !form.email || !form.msg) {
      alert('Please fill in name, email and project details.')
      return
    }
    setSent(true)
  }

  return (
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
  )
}
