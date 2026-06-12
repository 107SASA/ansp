import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import {
  IconBolt, IconDrives, IconMonitor, IconChart, IconBlueprint,
  IconConstruction, IconWrench, IconCloud,
} from '@/components/Icons'

export const metadata: Metadata = { title: 'Services' }

const blocks = [
  {
    label:'In-House', title:'Panel Manufacturing',
    img:'https://anspl.co.in/assets/Panel0-D3e2k-is.jpg',
    desc:'6,000 sq.ft. Kolkata factory — 100 doors/month. Automatic busbar bending machine (only one in East India).',
    points:['33kV / 11kV HT VCB Panels','LT Busduct & PCC / PDB Panels','VFD Panels & PLC Panels','DG Synchronization Panels','Control Desks & Junction Boxes'],
  },
  {
    label:'Drives', title:'VFD & Drive Systems',
    img:'https://anspl.co.in/assets/ACDrive2-Otp3Yuwc.jpg',
    desc:'Supply & commissioning from 0.37kW to 1200kW — all industrial motor applications.',
    points:['AC VFD (VVVF) drives up to 1200kW','DC drives for retrofit & new installations','Sectional drive systems for wire drawing & rolling mills','Complete motor packages with panel integration','On-site commissioning & operator training'],
  },
  {
    label:'Automation', title:'PLC, SCADA & DCS',
    img:'https://anspl.co.in/assets/SoftwareSCADA1-DfJZpc-G.jpg',
    desc:'IIT Delhi & REC-trained engineers — delivered for L&T, Danieli and Tenova.',
    points:['PLC-based automation — design to commissioning','DCS for paper & pulp and process industries','SCADA software development & energy dashboards','HMI design and cloud-based data acquisition'],
  },
  {
    label:'Consulting & After-Sales', title:'Energy Audit, Consultancy & AMC',
    img:'https://anspl.co.in/assets/EMS0-DQTTRtlR.png',
    desc:'Project engineering consulting, energy reports and annual maintenance contracts.',
    points:['Energy audit & power utilization reports','HT & LT system design, SLD, cable scheduling','Supervision of erection & commissioning','AMC, AC/DC drive repair & CNC machine servicing'],
  },
]

const serviceOverview = [
  { icon: <IconBolt className="w-5 h-5"/>,         t:'Panel Manufacturing' },
  { icon: <IconDrives className="w-5 h-5"/>,        t:'VFD Drive Systems' },
  { icon: <IconMonitor className="w-5 h-5"/>,       t:'PLC / SCADA' },
  { icon: <IconChart className="w-5 h-5"/>,         t:'Energy Audit' },
  { icon: <IconBlueprint className="w-5 h-5"/>,     t:'Project Consultancy' },
  { icon: <IconConstruction className="w-5 h-5"/>,  t:'Erection & Commissioning' },
  { icon: <IconWrench className="w-5 h-5"/>,        t:'AMC & Repair' },
  { icon: <IconCloud className="w-5 h-5"/>,         t:'Cloud & Data' },
]

const process = ['Enquiry & Consultation','Design & Engineering','Manufacturing','Installation','Commissioning']

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="End-to-End Electrical & Automation Services"
        subtitle="From consulting and design to manufacturing, installation and AMC — complete turnkey delivery."
        breadcrumb="Services"
        imgSrc="https://anspl.co.in/assets/ACDrive1-DFEnjOhF.webp"
      />

      {/* Quick overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceOverview.map(({ icon, t }) => (
              <div key={t} className="bg-white border border-gray-200 rounded-xl px-4 py-5 flex items-center gap-3 hover:border-blue hover:bg-blue-light transition-all cursor-pointer">
                <div className="w-9 h-9 bg-blue-light rounded-lg flex items-center justify-center text-blue shrink-0">
                  {icon}
                </div>
                <p className="font-heading font-bold text-navy text-xs">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {blocks.map((b, i) => (
            <div key={b.title} className={`grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-md ${i % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'}`}>
              <div className="relative min-h-[320px] img-zoom overflow-hidden">
                <Image src={b.img} alt={b.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-blue/30" />
              </div>
              <div className="bg-navy px-10 py-12 flex flex-col justify-center">
                <SectionLabel light>{b.label}</SectionLabel>
                <h2 className="font-heading font-black text-white text-2xl mb-4">{b.title}</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{b.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {b.points.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <span className="text-amber mt-0.5">▸</span>{p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-amber-dark transition-colors self-start">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
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
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-heading font-black text-xl mx-auto mb-4 border-3 shadow-lg
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
