import Image from 'next/image'
import Link from 'next/link'

/* ── Section eyebrow label ── */
export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 font-heading font-bold text-[11px] tracking-[3px] uppercase ${light ? 'text-amber' : 'text-amber'}`}>
      <span className="block w-5 h-0.5 bg-amber" />
      {children}
    </div>
  )
}

/* ── Page hero banner ── */
export function PageHero({
  title, subtitle, breadcrumb, imgSrc,
}: { title: string; subtitle?: string; breadcrumb: string; imgSrc: string }) {
  return (
    <section className="relative bg-navy overflow-hidden pt-28 pb-20">
      {/* BG image */}
      <div className="absolute inset-0">
        <Image src={imgSrc} alt="" fill className="object-cover opacity-15" priority />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="text-white/40 text-xs font-heading tracking-[2px] uppercase mb-5">
          <Link href="/" className="text-amber hover:underline">Home</Link>
          {' / '}
          <span className="text-white/60">{breadcrumb}</span>
        </p>
        <SectionLabel light>{breadcrumb}</SectionLabel>
        <h1 className="font-heading font-black text-white text-4xl md:text-5xl leading-tight max-w-2xl mt-2 mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-white/60 text-base max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

/* ── Stats bar ── */
export function StatsBar({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="bg-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`text-center py-9 px-4 ${i < stats.length - 1 ? 'border-r border-white/15' : ''}`}>
              <div className="font-heading font-black text-amber text-4xl leading-none">{s.n}</div>
              <div className="text-white/60 text-[11px] tracking-widest uppercase mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── CTA Banner ── */
export function CTABanner({ title, sub, primary, secondary }: {
  title: string; sub: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-gradient-to-br from-blue to-blue-dark py-20 overflow-hidden">
      <span className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04] select-none"><svg viewBox="0 0 24 24" fill="white" className="w-56 h-56"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg></span>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight mb-2">{title}</h2>
          <p className="text-white/65 text-base">{sub}</p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          <Link href={primary.href}
            className="bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-amber-dark transition-colors">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href}
              className="border-2 border-white/40 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded hover:bg-white hover:text-navy transition-all">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
