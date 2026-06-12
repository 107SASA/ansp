import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, StatsBar, CTABanner, SectionLabel } from '@/components/UI'

export const metadata: Metadata = { title: 'About Us' }

const milestones = [
  { year:'1997–98', title:'Foundation', desc:'Formed for sales & services of Kirloskar Electric machine tool products.', amber: false },
  { year:'2001–02', title:'Bosch Rexroth SI', desc:'System integrator for servo motors & controllers for SPMs.', amber: false },
  { year:'2004–05', title:'ABB System House', desc:'Appointed ABB System House for drives & automation.', amber: false },
  { year:'2010–11', title:'Factory Commissioned', desc:'6,000 sq.ft. panel building unit at Ramchandrapur.', amber: false },
  { year:'2012–13', title:'Siemens Integrator', desc:'Appointed SI for Siemens drives & automation.', amber: false },
  { year:'2022–24', title:'Balluff India SI', desc:'Authorised SI for East India, Bangladesh & Nepal.', amber: true },
  { year:'2025–26', title:'IPA India Partner', desc:'SI for load cells, weigh feeders & weighing automation.', amber: true },
]

const team = [
  { init:'RS', name:'Raj Kumar Srivastava', role:'Software & Engineering Head',   edu:'M.Tech IIT Delhi · B.E. REC Durgapur', exp:'Ex-Tata Motors Jamshedpur (1984–97)' },
  { init:'KK', name:'Kiran Kumar Kasaragod', role:'Marketing, Production & Accounts', edu:'B.E. SJCE Mysore', exp:'Ex-Kirloskar Electric (1991–97)' },
  { init:'TG', name:'Tapan Ghosh',           role:'Software Dev & Project Execution', edu:'Diploma — Electrical & Electronics', exp:'ANSPL since 2010' },
  { init:'SN', name:'Subhadeep Nej',         role:'Design, Engineering & Drawings',   edu:'Diploma — Electrical & Electronics', exp:'ANSPL since 2014' },
  { init:'AH', name:'Amit Hazra',            role:'Marketing & Product Development',  edu:'Diploma — Electrical & Electronics', exp:'' },
]

const certs = [
  { icon:'🏆', title:'ISO 9001:2015', desc:'Quality Management System for design, manufacturing & commissioning' },
  { icon:'🔬', title:'Balluff India SI', desc:'Authorised SI for East India, Bangladesh & Nepal (2022)' },
  { icon:'⚖️', title:'IPA India SI', desc:'Load cell, weigh feeder & weighing automation partner (2025)' },
  { icon:'⚙️', title:'ABB System House', desc:'Drives & automation system house since 2004' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="25+ Years of Engineering Excellence"
        subtitle="Automation Network & Services Pvt. Ltd. — trusted turnkey electrical and automation partner across India and South Asia."
        breadcrumb="About Us"
        imgSrc="https://anspl.co.in/assets/BoltedPanels0-DoAsP7Dl.jpg"
      />

      {/* ── STORY ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[480px] img-zoom">
              <Image src="https://anspl.co.in/assets/Panel0-D3e2k-is.jpg" alt="ANSPL" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-amber rounded-2xl p-7 text-center shadow-xl shadow-amber/30">
              <div className="font-heading font-black text-navy text-5xl leading-none">1997</div>
              <div className="text-navy/70 text-xs tracking-[2px] uppercase mt-1">Founded</div>
            </div>
          </div>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-heading font-black text-navy text-4xl mb-5">One Stop for Electrical<br/>& Automation</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ANSPL is a Kolkata-based turnkey electrical and industrial automation company providing complete solutions — from system design and panel manufacturing to installation, commissioning and maintenance.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our 6,000 sq.ft. panel factory at Ramchandrapur produces up to 100 panel doors per month. We are authorised System Integrators for <strong className="text-navy">Balluff India</strong> (East India, Bangladesh & Nepal) and <strong className="text-navy">IPA India</strong> (weighing automation).
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {['ISO 9001:2015','Balluff SI','IPA India','ABB System House'].map(t => (
                <span key={t} className="bg-blue-light text-blue font-heading font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
            <Link href="/contact" className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-blue-dark transition-colors inline-block">
              Talk to Our Engineers
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar stats={[{n:'1997',l:'Founded'},{n:'500+',l:'Projects Done'},{n:'3',l:'Countries'},{n:'6000',l:'Sq.ft. Factory'}]} />

      {/* ── TIMELINE + FACILITY ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <SectionLabel light>Our Journey</SectionLabel>
            <h2 className="font-heading font-black text-white text-4xl mb-10">Milestones &<br/>Growth</h2>
            <div className="relative pl-9">
              <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue to-amber" />
              {milestones.map((m, i) => (
                <div key={i} className="relative mb-8">
                  <div className={`absolute -left-9 top-1 w-5 h-5 rounded-full border-2 border-navy ${m.amber ? 'bg-amber shadow-[0_0_0_3px_#F7A800]' : 'bg-blue shadow-[0_0_0_3px_#0057A8]'}`} />
                  <p className="font-heading font-bold text-amber text-[11px] tracking-[2px] uppercase mb-1">{m.year}</p>
                  <h4 className="font-heading font-bold text-white text-sm mb-1">{m.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facility */}
          <div>
            <SectionLabel light>Manufacturing</SectionLabel>
            <h2 className="font-heading font-black text-white text-4xl mb-6">Our Factory</h2>
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7">
              <h3 className="font-heading font-bold text-white mb-2">Panel Building Facility</h3>
              <p className="text-white/50 text-sm mb-6">Ramchandrapur, Narendrapur, Kolkata — one of the best-equipped panel factories in East India.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[['6000','Sq.ft. Area'],['100','Doors/Month'],['4000','Assembly Sq.ft.'],['25+','Yrs Experience']].map(([n,l]) => (
                  <div key={n} className="bg-white/[0.06] rounded-xl py-5 text-center">
                    <div className="font-heading font-black text-amber text-3xl leading-none">{n}</div>
                    <div className="text-white/45 text-xs mt-1.5 tracking-wide uppercase">{l}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {['Automatic busbar bending & shear machine — only one in East India','Automatic stripper cum crimping machine','Wireman-friendly base plate assembly system','Complete busbar arrangement for PCC panels'].map(f => (
                  <li key={f} className="flex items-start gap-3 bg-white/[0.04] rounded-lg px-4 py-3">
                    <span className="text-amber text-sm mt-0.5">▸</span>
                    <span className="text-white/60 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Team ANSPL</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift">
                <div className="bg-gradient-to-br from-navy to-blue-dark p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/15 border-2 border-white/20 rounded-full flex items-center justify-center font-heading font-black text-white text-xl shrink-0">
                    {t.init}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm leading-tight mb-1">{t.name}</h3>
                    <p className="text-amber text-[11px] font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-light text-blue text-xs font-bold px-2.5 py-1 rounded">{t.edu}</span>
                    {t.exp && <span className="bg-amber/10 text-amber-dark text-xs font-bold px-2.5 py-1 rounded">{t.exp}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20 bg-amber">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center gap-2 mb-3 font-heading font-bold text-[11px] tracking-[3px] uppercase text-navy/70 justify-center">
              <span className="block w-5 h-0.5 bg-navy/40" />Recognition & Awards<span className="block w-5 h-0.5 bg-navy/40" />
            </div>
            <h2 className="font-heading font-black text-navy text-4xl">Awards & Recognition</h2>
            <p className="text-navy/60 text-sm mt-2 max-w-xl mx-auto">
              Recognised by industry-leading OEMs for outstanding performance and growth across East India.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { year:'2006', icon:'🏆', title:'Fastest Growing System Integrator', org:'ABB India', desc:'Awarded Fastest Growing System Integrator for ABB drives & automation in East India.' },
              { year:'2009', icon:'🥇', title:'Highest ABB Sales — East Zone',     org:'ABB India', desc:'Achieved the highest ABB drives & automation sales turnover across the East India zone.' },
              { year:'2009–10', icon:'🌟', title:'Fastest Growing Channel Partner', org:'ABB India', desc:'Awarded Fastest Growing Channel Partner for two consecutive years — 2009 and 2010.' },
            ].map(a => (
              <div key={a.title} className="bg-white rounded-2xl p-8 shadow-lg shadow-amber/20 text-center">
                <div className="text-4xl mb-4">{a.icon}</div>
                <div className="inline-block bg-navy text-amber font-heading font-bold text-[10px] uppercase tracking-[2px] px-3 py-1 rounded mb-4">{a.year}</div>
                <h3 className="font-heading font-bold text-navy text-base mb-1 leading-snug">{a.title}</h3>
                <div className="text-blue font-heading font-bold text-xs uppercase tracking-wider mb-3">{a.org}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Quality & Partnerships</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Certifications & Authorisations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certs.map(c => (
              <div key={c.title} className="border-2 border-gray-200 rounded-2xl p-7 text-center hover:border-blue hover:bg-blue-light transition-all card-lift cursor-pointer">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-heading font-bold text-navy mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Partner with ANSPL" sub="25+ years, expert team, full turnkey capability."
        primary={{ label:'Get in Touch', href:'/contact' }} secondary={{ label:"See Our Work", href:'/projects' }} />
    </>
  )
}
