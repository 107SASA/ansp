import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import {
  IconFactory, IconCar, IconConstruction, IconGear, IconFire, IconBolt,
  IconMining, IconOil, IconPalette, IconDocument, IconWrench, IconBuilding,
  IconBlueprint, IconSnowflake, IconBolt2, IconShield, IconChip, IconScale,
  IconHandshake, IconGlobe,
} from '@/components/Icons'

export const metadata: Metadata = { title: 'Clients' }

const clientLogos = [
  { src:'https://anspl.co.in/assets/image1-B4T0MSon.jpg',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image2-CT2yvjJA.png',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image3-CJqqIxKk.jpg',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image4-D4LRZQvC.png',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image5-COwzRJ9l.png',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image6-FynAPaud.jpg',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image7-BLLbbU3A.png',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image8-Ba5rkOKY.jpg',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image9-C5a_IVJ9.png',  alt:'Client' },
  { src:'https://anspl.co.in/assets/image10-CNfp6m4b.png', alt:'Client' },
  { src:'https://anspl.co.in/assets/image11-cQ2kcMfl.png', alt:'Client' },
  { src:'https://anspl.co.in/assets/image12-BDDSZaNq.jpg', alt:'Client' },
  { src:'https://anspl.co.in/assets/image13-DawbOcbi.jpg', alt:'Client' },
  { src:'https://anspl.co.in/assets/image14-mO4Gx44i.jpg', alt:'Client' },
  { src:'https://anspl.co.in/assets/image15-2fTWaMVd.png', alt:'Client' },
  { src:'https://anspl.co.in/assets/image16-B09oWn9s.jpg', alt:'Client' },
]

const clients = [
  { name: 'Tata Steel – Bearings Division',    sector: 'Steel',                  Icon: IconConstruction },
  { name: 'Tata Motors Limited',               sector: 'Automotive',             Icon: IconCar },
  { name: 'Larsen & Toubro (L&T)',             sector: 'Engineering & EPC',      Icon: IconFactory },
  { name: 'Danieli India Limited',             sector: 'Steel Machinery',        Icon: IconGear },
  { name: 'Tenova (LOI Wesman)',               sector: 'Industrial Furnaces',    Icon: IconFire },
  { name: 'Siemens',                           sector: 'Engineering',            Icon: IconBolt },
  { name: 'Aditya Birla – Hindalco',           sector: 'Aluminium & Mining',     Icon: IconMining },
  { name: 'IndianOil',                         sector: 'Oil & Gas',              Icon: IconOil },
  { name: 'Berger Paints',                     sector: 'Paints & Coatings',      Icon: IconPalette },
  { name: 'Emami',                             sector: 'FMCG',                   Icon: IconBlueprint },
  { name: 'Jindal India Limited',              sector: 'Steel',                  Icon: IconConstruction },
  { name: 'SRMB Srijan Limited',               sector: 'Steel',                  Icon: IconConstruction },
  { name: 'Adi Ispat Private Limited',         sector: 'Steel',                  Icon: IconConstruction },
  { name: 'Vikrant',                           sector: 'Steel / Tyre',           Icon: IconBolt2 },
  { name: 'Balaji Paper & Newsprint Pvt. Ltd.',sector: 'Paper',                  Icon: IconDocument },
  { name: 'Krishna Tissues Pvt. Ltd.',         sector: 'Tissue / Paper',         Icon: IconDocument },
  { name: 'Bengal Tools Limited',              sector: 'Tools & Engineering',    Icon: IconWrench },
  { name: 'Shrachi',                           sector: 'Real Estate / Infra',    Icon: IconBuilding },
  { name: 'Gayson & Company Pvt. Ltd.',        sector: 'Engineering',            Icon: IconGear },
  { name: 'RN Electro Power Pvt. Ltd.',        sector: 'Electrical Contractors', Icon: IconBolt },
  { name: 'Roy & Birdi Engineers',             sector: 'Engineering',            Icon: IconBlueprint },
  { name: 'Fabulous Commercial (P) Ltd.',      sector: 'Commercial',             Icon: IconBuilding },
  { name: 'Meho – HCP Air Systems',            sector: 'HVAC / Air Systems',     Icon: IconSnowflake },
  { name: 'Airovient',                         sector: 'Green Air Engineering',  Icon: IconSnowflake },
  { name: 'Miki Wire',                         sector: 'Wire Drawing',           Icon: IconBolt2 },
  { name: 'Rifle Factory, Ichapur',            sector: 'Defence',                Icon: IconShield },
  { name: 'ABB',                               sector: 'Automation OEM',         Icon: IconBolt },
  { name: 'Bosch Rexroth',                     sector: 'Automation OEM',         Icon: IconGear },
  { name: 'Balluff India',                     sector: 'Sensor OEM',             Icon: IconChip },
  { name: 'IPA India',                         sector: 'Weighing Automation',    Icon: IconScale },
]

const sectorBreakdown = [
  { Icon: IconConstruction, sector:'Steel & Metals',     clients:'Tata Steel, Jindal, SRMB, Adi Ispat, Vikrant' },
  { Icon: IconDocument,     sector:'Paper & Pulp',       clients:'Balaji Paper, Krishna Tissues' },
  { Icon: IconCar,          sector:'Automotive',         clients:'Tata Motors' },
  { Icon: IconFire,         sector:'Industrial Furnaces',clients:'Tenova (LOI Wesman)' },
  { Icon: IconGear,         sector:'Engineering & EPC',  clients:'L&T, Siemens, Danieli, Bosch Rexroth' },
  { Icon: IconPalette,      sector:'FMCG & Paints',      clients:'Emami, Berger Paints' },
  { Icon: IconOil,          sector:'Oil & Gas',          clients:'IndianOil' },
  { Icon: IconSnowflake,    sector:'HVAC & Building',    clients:'Meho-HCP, Airovient, Shrachi' },
  { Icon: IconBolt2,        sector:'Wire Drawing',       clients:'Miki Wire' },
  { Icon: IconShield,       sector:'Defence',            clients:'Rifle Factory, Ichapur' },
  { Icon: IconBolt,         sector:'Automation OEMs',   clients:'ABB, Balluff India, IPA India' },
  { Icon: IconBuilding,     sector:'Real Estate / Infra',clients:'Shrachi, Fabulous Commercial' },
]

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Trusted by India's Leading Industries"
        subtitle="30+ valued clients across steel, paper, automotive, FMCG, defence, and infrastructure — from Tata Steel to IndianOil."
        breadcrumb="Clients"
        imgSrc="https://anspl.co.in/assets/TMTRollingMills2-CFNQYEss.jpg"
      />

      {/* Client grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-4">Our Valued Clients</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From Fortune 500 conglomerates to specialised engineering firms — ANSPL has delivered turnkey electrical and automation solutions to clients that demand quality and reliability.
          </p>

          {/* Logo marquee */}
          <div className="overflow-hidden mb-14 -mx-6 px-6 py-4 bg-white border-y border-gray-200">
            <div className="flex animate-ticker">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="shrink-0 mx-3 w-[148px] h-[80px] bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain p-3" sizes="148px" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map(c => (
              <div
                key={c.name}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-blue hover:shadow-md hover:shadow-blue/10 transition-all card-lift group cursor-default"
              >
                <div className="w-12 h-12 bg-blue-light rounded-xl flex items-center justify-center text-blue mx-auto mb-3 group-hover:bg-blue/10 transition-colors">
                  <c.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-navy text-xs leading-tight mb-1.5">{c.name}</h3>
                <span className="inline-block bg-blue-light text-blue font-heading font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector breakdown */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel light>Industry Reach</SectionLabel>
          <h2 className="font-heading font-black text-white text-4xl mb-4">Sectors We've Served</h2>
          <p className="text-white/50 text-sm mb-12 max-w-xl">
            ANSPL's expertise spans the full breadth of Indian industry — wherever precision electrical and automation matters.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sectorBreakdown.map(s => (
              <div key={s.sector} className="bg-white/[0.05] border border-white/10 rounded-xl p-5 hover:bg-blue/20 hover:border-blue/40 transition-all">
                <div className="w-10 h-10 bg-blue/20 rounded-lg flex items-center justify-center text-amber mb-3">
                  <s.Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">{s.sector}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{s.clients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Why Clients Choose ANSPL</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-6">
            25+ Years of Delivering on Our Promise
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-12">
            Our clients return to us because we treat every project as our own — from the first engineering drawing to the final load trial. IIT Delhi and REC-trained leadership, a 6,000 sq.ft. in-house factory, and authorised partnerships with Balluff India and IPA India give us the tools to deliver on time, every time.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { Icon: IconHandshake, title:'Long-Term Relationships', desc:'Clients like Tata Steel, Danieli and L&T have returned to ANSPL across multiple projects over decades.' },
              { Icon: IconFactory,   title:'In-House Manufacturing',  desc:'Our own 6,000 sq.ft. panel factory ensures quality, speed and accountability — no third-party delays.' },
              { Icon: IconGlobe,     title:'Pan-India + Bangladesh',  desc:'Project capability across India with offices in Kolkata, Patna and a local presence in Dhaka, Bangladesh.' },
            ].map(f => (
              <div key={f.title} className="border border-gray-200 rounded-2xl p-7 text-center hover:border-blue hover:bg-blue-light transition-all card-lift">
                <div className="w-12 h-12 bg-blue-light rounded-xl flex items-center justify-center text-blue mx-auto mb-4 group-hover:bg-blue/10">
                  <f.Icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-navy mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join Our Client Family"
        sub="Tell us your requirement and let ANSPL's engineers deliver the right solution."
        primary={{ label: 'Start a Conversation', href: '/contact' }}
        secondary={{ label: 'See Our Projects', href: '/projects' }}
      />
    </>
  )
}
