import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, SectionLabel } from '@/components/UI'
import { IconSearch } from '@/components/Icons'
export const metadata: Metadata = { title: 'Blog' }

const featured = { cat:'Featured', title:'How VFD Drives Cut Plant Energy Bills by 30–50%', desc:'Variable Frequency Drives allow motors to run at precisely the speed needed — not full speed all the time. In pump and fan applications, this can cut energy use dramatically due to the affinity law.', date:'June 2025', time:'5 min', img:'https://anspl.co.in/assets/ACDrive1-DFEnjOhF.webp' }

const posts = [
  { cat:'PLC & SCADA', title:'PLC vs DCS: Choosing the Right System for Your Plant', desc:'Both can automate processes, but the right choice depends on plant complexity.', date:'May 2025', time:'4 min', img:'https://anspl.co.in/assets/SoftwareSCADA1-DfJZpc-G.jpg' },
  { cat:'Panel Mfg.', title:'What is a Power Control Centre (PCC)? Design Guide', desc:'The PCC is the nerve centre of factory power distribution.', date:'April 2025', time:'3 min', img:'https://anspl.co.in/assets/Panel0-D3e2k-is.jpg' },
  { cat:'Sensors', title:'Balluff IO-Link: Why Smart Sensors Are Transforming Automation', desc:'IO-Link enables real-time data from every field device.', date:'March 2025', time:'4 min', img:'https://anspl.co.in/assets/BalluffSiemens2-CtDa80DF.jpg' },
  { cat:'Energy', title:'5 Ways an Energy Dashboard Cuts Your Power Bill', desc:'Real-time visibility lets plant managers identify waste.', date:'Jan 2025', time:'5 min', img:'https://anspl.co.in/assets/EMS0-DQTTRtlR.png' },
  { cat:'Rolling Mills', title:'Flying Shear Automation: Precision Cutting at High Speed', desc:'How PLC-based control enables cutting without stopping the line.', date:'Dec 2024', time:'6 min', img:'https://anspl.co.in/assets/TMTRollingMills0-DAk_EFP_.png' },
  { cat:'Weighing', title:'Loss-in-Weight vs Belt Weighers: Which is Right for You?', desc:'Understanding gravimetric feeding methods for your application.', date:'Nov 2024', time:'3 min', img:'https://anspl.co.in/assets/IPA0-DwJbJSLP.avif' },
]

const categories = [['VFD Drives',8],['PLC & SCADA',12],['Panel Mfg.',6],['Energy',5],['Rolling Mills',7],['Sensors',4]]
const tags = ['VFD','PLC','SCADA','Panel','Balluff','Energy','Rolling Mill','Wire Drawing','AMC','DCS','HMI']

export default function BlogPage() {
  return (
    <>
      <PageHero title="Technical Articles & Updates" subtitle="Engineering insights and industry news from the ANSPL team." breadcrumb="Blog" imgSrc="https://anspl.co.in/assets/SoftwareSCADA0-j6zzjK_i.jpg" />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
            <div>
              {/* Featured */}
              <div className="grid md:grid-cols-[1.2fr_1fr] rounded-2xl overflow-hidden shadow-lg mb-12 group">
                <div className="relative min-h-[280px] img-zoom overflow-hidden">
                  <Image src={featured.img} alt={featured.title} fill className="object-cover" />
                </div>
                <div className="bg-navy p-8 flex flex-col justify-center">
                  <span className="inline-block bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-4 self-start">{featured.cat}</span>
                  <h2 className="font-heading font-black text-white text-xl leading-tight mb-3">{featured.title}</h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{featured.desc}</p>
                  <p className="text-white/30 text-xs mb-4">{featured.date} · {featured.time} read</p>
                  <Link href="#" className="font-heading font-bold text-amber text-xs uppercase tracking-wider hover:text-amber-dark">Read Article →</Link>
                </div>
              </div>

              {/* Grid */}
              <SectionLabel>Latest Articles</SectionLabel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {posts.map(p => (
                  <div key={p.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift">
                    <div className="relative h-44 img-zoom overflow-hidden">
                      <Image src={p.img} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block bg-blue-light text-blue font-heading font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded mb-3">{p.cat}</span>
                      <h3 className="font-heading font-bold text-navy text-sm leading-tight mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">{p.date} · {p.time}</span>
                        <Link href="#" className="font-heading font-bold text-blue text-xs hover:text-amber transition-colors">Read →</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="sticky top-24 space-y-5">
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-4">Search</h5>
                <div className="flex gap-2">
                  <input type="text" placeholder="Search articles…" className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue" />
                  <button className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-dark transition-colors flex items-center justify-center">
                    <IconSearch className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-4">Categories</h5>
                <ul className="space-y-1">
                  {categories.map(([cat, count]) => (
                    <li key={cat}>
                      <Link href="#" className="flex justify-between items-center px-3 py-2 rounded-lg text-gray-500 text-sm hover:bg-blue-light hover:text-blue transition-all">
                        {cat}<span className="bg-gray-100 text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-4">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => <span key={t} className="bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded cursor-pointer hover:bg-blue-light hover:text-blue transition-all">{t}</span>)}
                </div>
              </div>
              <div className="bg-blue rounded-2xl p-6 text-center">
                <h5 className="font-heading font-bold text-amber text-[11px] tracking-[3px] uppercase mb-3">Have a Question?</h5>
                <p className="text-white/65 text-sm mb-4">Our engineers are happy to help.</p>
                <Link href="/contact" className="block bg-amber text-navy font-heading font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded hover:bg-amber-dark transition-colors text-center">Contact Us →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
