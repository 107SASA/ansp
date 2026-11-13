import Image from 'next/image'
import Link from 'next/link'
import { CTABanner, SectionLabel } from '@/components/UI'
import HeroSlider from '@/components/HeroSlider'
import type { Slide } from '@/components/HeroSlider'
import Reveal from '@/components/Reveal'
import {
  IconBolt, IconDrives, IconMonitor, IconChart, IconBlueprint, IconWrench,
  IconFactory, IconChip, IconScale, IconGear, IconGraduation, IconTrophy,
  IconGlobe, IconCheck, IconConstruction, IconDocument,
} from '@/components/Icons'
import { getPage, getSection } from '@/lib/cms'
import { INDUSTRIES } from '@/lib/catalog'
import { PROJECTS } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = false

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

const services = [
  { icon: <IconBolt className="w-6 h-6"/>,       cat:'Manufacturing', slug:'panel-manufacturing', title:'Panel Manufacturing',   img:'https://anspl.co.in/assets/Panel0-D3e2k-is.jpg',           desc:'33kV/11kV HT VCB, PCC/PDB, VFD & PLC panels built at our in-house Narendrapur, Kolkata facility — 6,000 sq.ft., 100 panel doors per month.' },
  { icon: <IconDrives className="w-6 h-6"/>,      cat:'Drive Systems', slug:'vfd-drive-systems', title:'VFD & Drive Systems',   img:'https://anspl.co.in/assets/ACDrive1-DFEnjOhF.webp',         desc:'Supply & commissioning of VFD drives from 0.37kW to 1200kW, DC drives and complete sectional motor packages.' },
  { icon: <IconMonitor className="w-6 h-6"/>,     cat:'Automation',   slug:'plc-scada-dcs', title:'PLC, SCADA & DCS',      img:'https://anspl.co.in/assets/SoftwareSCADA0-j6zzjK_i.jpg',   desc:'Custom PLC programming, SCADA software and DCS packages delivered for L&T, Danieli and Tenova.' },
  { icon: <IconChart className="w-6 h-6"/>,       cat:'Energy & IoT', slug:'energy-management', title:'Energy Dashboard & IoT', img:'https://anspl.co.in/assets/EMS0-DQTTRtlR.png',             desc:'Energy dashboards, power utilisation reports, WBSEDCL/DG monitoring and IoT plant analytics.' },
  { icon: <IconBlueprint className="w-6 h-6"/>,   cat:'Engineering',  slug:'project-consultancy', title:'Project Consultancy',    img:'https://anspl.co.in/assets/SiteErection0-2JH8nkwL.jpg',    desc:'HT/LT design, equipment layout, cable scheduling, supervision of erection & commissioning.' },
  { icon: <IconWrench className="w-6 h-6"/>,      cat:'After-Sales',  slug:'amc', title:'AMC & Repair',           img:'https://anspl.co.in/assets/BalluffSiemens0-DhIy0x2s.jpg',  desc:'Annual maintenance contracts and AC/DC drive repair. We provide on-site installation, commissioning and after-sales support at customer plants across India and South Asia.' },
]

const projects = PROJECTS.slice(0, 3)

const galleryPreview = [
  { title:'PCC Panel — Bengal Tools',         cat:'Panel Mfg.',    img:'https://anspl.co.in/assets/BoltedPanels0-DoAsP7Dl.jpg' },
  { title:'SCADA — Danieli Rolling Mill',     cat:'Steel & Mills', img:'https://anspl.co.in/assets/TMTRollingMills1-Bchznq5t.webp' },
  { title:'130 TPD Paper Plant — Balaji',     cat:'Pulp & Paper',  img:'https://anspl.co.in/assets/PulpPaper0-CFYr6q1z.jpeg' },
  { title:'Energy Dashboard — WBSEDCL',       cat:'PLC & SCADA',   img:'https://anspl.co.in/assets/SoftwareSCADA1-DfJZpc-G.jpg' },
  { title:'BMS & HVAC — Commercial Project',  cat:'Building Auto.',img:'https://anspl.co.in/assets/BuildingAutomation2-B5qBP5yI.jpg' },
  { title:'Coil Processing — Steel Plant',    cat:'Steel & Mills', img:'https://anspl.co.in/assets/CoilProcessingLines1-H8Xt7Tav.webp' },
]

const partners = [
  { name:'ABB',               role:'System House — Drives & Automation',          icon: <IconBolt className="w-6 h-6"/> },
  { name:'Siemens',           role:'System Integrator — Drives (2012–13)',         icon: <IconGear className="w-6 h-6"/> },
  { name:'Balluff India',     role:'Authorised SI — East India, BD & Nepal',       icon: <IconChip className="w-6 h-6"/> },
  { name:'IPA India',         role:'SI — Load Cells & Weigh Feeders',              icon: <IconScale className="w-6 h-6"/> },
  { name:'Bosch Rexroth',     role:'SI — Servo Motors & Controllers',              icon: <IconGear className="w-6 h-6"/> },
  { name:'Rittal',            role:'Collaboration — PMCC & PLC Panels',            icon: <IconConstruction className="w-6 h-6"/> },
  { name:'Lauritz Knudsen',   role:'HT VCB Panels — 11kV & 33kV',                 icon: <IconBolt className="w-6 h-6"/> },
  { name:'Kirloskar Electric',role:'Sales & Service Partner (1997)',                icon: <IconFactory className="w-6 h-6"/> },
]

const whyUs = [
  { icon: <IconFactory className="w-8 h-8"/>,     title:'Only Busbar Bender in East India',     desc:'Our automatic busbar bending & shear machine is the only one in East India — faster, precise, consistent panel builds every time.' },
  { icon: <IconGraduation className="w-8 h-8"/>,  title:'IIT Delhi & REC-Trained Leadership',   desc:'Directors trained at IIT Delhi and REC Durgapur with 13+ years at Tata Motors and Kirloskar Electric before founding ANSPL.' },
  { icon: <IconChip className="w-8 h-8"/>,        title:'Authorised SI — Balluff & IPA India',  desc:'Exclusive System Integrator for Balluff India (East India, Bangladesh, Nepal) and IPA India for weighing automation.' },
  { icon: <IconBlueprint className="w-8 h-8"/>,   title:'Complete Turnkey Capability',          desc:'From HT substation design and SLD to panel manufacturing, installation, commissioning and annual maintenance — under one roof.' },
  { icon: <IconGlobe className="w-8 h-8"/>,       title:'India & South Asia Project Execution', desc:'Headquartered in Kolkata, our engineering teams execute turnkey projects and provide on-site plant support across India and South Asia.' },
  { icon: <IconTrophy className="w-8 h-8"/>,      title:'Fastest Growing ABB System Integrator',desc:'Awarded Fastest Growing ABB System Integrator (2006), Highest ABB Sales East Zone (2009) and Fastest Growing Channel Partner (2009–10).' },
]

const testimonials = [
  { icon: <IconDocument className="w-7 h-7"/>, quote:'ANSPL delivered our 130 TPD paper plant automation — HT substation, PCC/MCC, 35 sectional drives and 2000 I/O DCS — on schedule and to specification. Their turnkey execution capability is exceptional.', name:'Plant Manager', org:'Balaji Paper & Newsprint Pvt. Ltd.' },
  { icon: <IconGear className="w-7 h-7"/>,     quote:'We have worked with ANSPL across multiple rolling mill and SCADA projects over the years. Their PLC and drive expertise for demanding steel applications is consistently first-class.', name:'Project Engineer', org:'Danieli India Limited' },
  { icon: <IconFactory className="w-7 h-7"/>,  quote:'The Siemens SIMATIC HMI panel ANSPL engineered for our chassis heft fixture machine has been rock-solid in production. Professional team, clean engineering.', name:'Engineering Head', org:'Tata Motors Limited' },
]

export default async function HomePage() {
  const page = await getPage('home')
  const slidesFields = getSection(page, 'slides')

  let slides: Slide[] | undefined
  try {
    if (slidesFields.slides_json) {
      const parsed = JSON.parse(slidesFields.slides_json)
      if (Array.isArray(parsed) && parsed.length > 0) slides = parsed
    }
  } catch {}

  const industries = INDUSTRIES

  return (
    <>
      <HeroSlider slides={slides} />

      {/* ── ABOUT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal from="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[460px] img-zoom shadow-2xl shadow-navy/10">
                <Image src="https://anspl.co.in/assets/SiteErection1-BheS__RQ.jpg" alt="ANSPL Factory" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-amber rounded-2xl p-6 text-center shadow-xl shadow-amber/30 pulse-amber">
                <div className="font-heading font-black text-navy text-4xl leading-none">1997</div>
                <div className="text-navy/70 text-[11px] tracking-[2px] uppercase mt-1">Founded</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-blue rounded-xl px-4 py-2 text-center shadow-lg">
                <div className="font-heading font-black text-white text-xs leading-none">ISO 9001:2015</div>
                <div className="text-blue-light text-[9px] tracking-wider uppercase mt-0.5">Certified</div>
              </div>
            </div>
          </Reveal>

          <Reveal from="right">
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-heading font-black text-navy text-4xl leading-tight mb-5">
              Engineering India's<br />Industrial Future
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ANSPL is a Kolkata-based turnkey electrical and industrial automation company. For 28+ years we've delivered complete solutions — from panel manufacturing and HT substation design to SCADA commissioning and cloud data acquisition.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our in-house facility at Narendrapur, Kolkata supports panel manufacturing, while our engineering team undertakes project execution and site services across India and South Asia.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                'Balluff India SI — East India, Bangladesh & Nepal',
                'IPA India — Load Cells, Weigh Feeders & Weighing Automation',
                '6,000 sq.ft. in-house panel factory — 100 doors/month',
                'IIT Delhi & REC Durgapur-trained engineering leadership',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <IconCheck className="w-4 h-4 text-blue shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {['ISO 9001:2015','ABB System House','Siemens SI','Balluff India SI'].map(p => (
                <span key={p} className="bg-blue-light text-blue font-heading font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">{p}</span>
              ))}
            </div>
            <Link href="/about"
              className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-blue-dark transition-colors inline-block">
              Learn About ANSPL
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
              <div>
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="font-heading font-black text-navy text-4xl">Our Core Services</h2>
              </div>
              <Link href="/services" className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors shrink-0">
                View All Services
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-lift h-full">
                  <div className="relative h-48 img-zoom overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                    <span className="absolute top-3 left-3 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">
                      {s.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-blue-light rounded-xl flex items-center justify-center text-blue mb-4">
                      {s.icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <Link href={`/services/${s.slug}`} className="font-heading font-bold text-blue text-xs uppercase tracking-wider hover:text-amber transition-colors">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS (dark) ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <div>
                <SectionLabel light>Products We Supply</SectionLabel>
                <h2 className="font-heading font-black text-white text-4xl">Authorised Distributor<br />& SI Partner</h2>
              </div>
              <Link href="/products"
                className="border-2 border-white/35 text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-white hover:text-navy transition-all shrink-0">
                View All Products
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { slug:'ac-vfd-drives',   icon:<IconBolt className="w-5 h-5"/>,    title:'AC / VFD Drives',              sub:'0.37kW to 1200kW — all motor applications',               badge:'Supply & Commission' },
              { slug:'plc-controllers', icon:<IconMonitor className="w-5 h-5"/>, title:'PLC & Automation Controllers', sub:'Automation packages, servo & motion control',             badge:'System Integrator' },
              { slug:'balluff-sensors', icon:<IconChip className="w-5 h-5"/>,    title:'Balluff Sensors',              sub:'Industrial sensors — East India, Bangladesh & Nepal',     badge:'Authorised SI' },
              { slug:'ipa-weighing',    icon:<IconScale className="w-5 h-5"/>,   title:'IPA Weighing Solutions',       sub:'Load cells, weigh feeders & weighing automation',         badge:'Authorised SI' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link href={`/products/${p.slug}`} className="bg-white/[0.05] border border-white/10 rounded-xl p-6 flex gap-5 items-start hover:bg-blue/20 hover:border-blue/40 transition-all">
                  <div className="w-12 h-12 bg-blue/25 border border-blue/30 rounded-xl flex items-center justify-center text-white/70 shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">{p.title}</h3>
                    <p className="text-white/50 text-sm mb-2">{p.sub}</p>
                    <span className="bg-amber/15 border border-amber/25 text-amber text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {p.badge}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <div>
                <SectionLabel>Sectors We Serve</SectionLabel>
                <h2 className="font-heading font-black text-navy text-4xl">Industries We Power</h2>
              </div>
              <Link href="/industries"
                className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors shrink-0">
                All Industries
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <Link href={`/industries/${ind.slug}`} className="block relative rounded-2xl overflow-hidden h-48 img-zoom group">
                  <Image src={ind.img} alt={ind.title} fill className="object-cover" />
                  <div className="overlay-hover absolute inset-0 bg-gradient-to-t from-navy/92 to-navy/20 group-hover:from-blue/92 group-hover:to-blue/20" />
                  <span className="absolute top-2 right-2 w-6 h-6 bg-amber text-navy font-heading font-black text-[10px] rounded flex items-center justify-center">{String(i + 1).padStart(2, '0')}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="font-heading font-bold text-white text-xs mb-0.5 leading-tight">{ind.title}</h3>
                    <p className="text-white/55 text-[10px] leading-snug">{ind.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ANSPL ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <SectionLabel>Why ANSPL</SectionLabel>
              <h2 className="font-heading font-black text-navy text-4xl mt-1">The ANSPL Difference</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
                Engineering capability, in-house panel manufacturing and project execution across India and South Asia.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="relative border-2 border-gray-200 rounded-2xl p-7 hover:border-amber hover:shadow-lg hover:shadow-amber/10 transition-all group card-lift h-full">
                  <div className="w-12 h-12 bg-blue-light rounded-xl flex items-center justify-center text-blue mb-5 group-hover:bg-amber/10 group-hover:text-amber transition-all">
                    {f.icon}
                  </div>
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-amber opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-heading font-bold text-navy text-base mb-2 leading-snug">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-8 left-8 text-[8rem] text-white/[0.04] font-heading font-black leading-none select-none">"</div>
        <div className="absolute bottom-8 right-8 text-[8rem] text-white/[0.04] font-heading font-black leading-none select-none rotate-180">"</div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <SectionLabel light>Client Testimonials</SectionLabel>
              <h2 className="font-heading font-black text-white text-4xl mt-1">What Our Clients Say</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.org} delay={i * 90}>
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/[0.08] transition-colors h-full">
                  <div className="w-12 h-12 bg-blue/30 rounded-xl flex items-center justify-center text-amber mb-5">
                    {t.icon}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                    <div className="text-amber text-xs font-bold uppercase tracking-wider mt-0.5">{t.org}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <div>
                <SectionLabel>Our Work in Pictures</SectionLabel>
                <h2 className="font-heading font-black text-navy text-4xl">Project Gallery</h2>
                <p className="text-gray-500 mt-2 text-sm max-w-lg">Real photos from our factory, client sites and completed installations across India.</p>
              </div>
              <Link href="/gallery"
                className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors shrink-0">
                View Full Gallery
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((g, i) => (
              <Reveal key={g.title} delay={i * 70} className={i === 0 || i === 3 ? 'md:col-span-2' : ''}>
                <Link href="/gallery"
                  className={`gallery-item relative rounded-2xl overflow-hidden block cursor-pointer bg-navy ${
                    i === 0 || i === 3 ? 'aspect-[16/8]' : 'aspect-video'
                  }`}
                >
                  <Image src={g.img} alt={g.title} fill className="object-cover" sizes="(max-width:640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-navy/25" />
                  <div className="gallery-overlay absolute inset-0 bg-navy/70 flex flex-col justify-end p-5">
                    <span className="inline-block self-start bg-amber text-navy font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded mb-2">
                      {g.cat}
                    </span>
                    <h3 className="font-heading font-bold text-white text-sm leading-snug">{g.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <div>
                <SectionLabel light>Our Work</SectionLabel>
                <h2 className="font-heading font-black text-white text-4xl">Recent Projects</h2>
              </div>
              <Link href="/projects"
                className="border-2 border-white/35 text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-white hover:text-navy transition-all shrink-0">
                View All Projects
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <ProjectCard p={p} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel>OEM Partnerships</SectionLabel>
              <h2 className="font-heading font-black text-navy text-4xl mt-1">Technology Partners &<br />Authorisations</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                Authorised by industry-leading OEMs to supply, integrate and commission their technology across India and South Asia.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-blue hover:shadow-md hover:shadow-blue/10 transition-all group cursor-default card-lift">
                  <div className="w-14 h-14 bg-blue-light border border-blue/20 rounded-2xl flex items-center justify-center text-blue mx-auto mb-4 group-hover:bg-blue/10 transition-colors">
                    {p.icon}
                  </div>
                  <h4 className="font-heading font-black text-navy text-sm mb-1">{p.name}</h4>
                  <p className="text-gray-400 text-[11px] leading-tight">{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <SectionLabel>Trusted By</SectionLabel>
                <h2 className="font-heading font-black text-navy text-4xl">Our Valued Clients</h2>
              </div>
              <Link href="/clients"
                className="bg-blue text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue-dark transition-colors shrink-0">
                View All Clients
              </Link>
            </div>
          </Reveal>

          <div className="overflow-hidden">
            <div className="flex animate-ticker">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="shrink-0 mx-3 w-[148px] h-[80px] bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain p-3" sizes="148px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Automate Your Plant?"
        sub="Talk to our engineers for a no-obligation consultation and project estimate."
        primary={{ label: 'Request a Quote', href: '/contact' }}
        secondary={{ label: 'Call Us Now', href: 'tel:+919830505000' }}
      />
    </>
  )
}
