import Image from 'next/image'
import { IconMapPin } from '@/components/Icons'
import type { Project } from '@/lib/projects'

/** Project card showing application, client, location and a short description. */
export default function ProjectCard({ p, dark = false }: { p: Partial<Project> & { title: string; img: string }; dark?: boolean }) {
  const meta = [
    p.client && { k: 'Client', v: p.client },
    p.application && { k: 'Application', v: p.application },
  ].filter(Boolean) as { k: string; v: string }[]

  return (
    <div className={`rounded-2xl overflow-hidden card-lift h-full flex flex-col ${dark ? 'bg-white/[0.05] border border-white/10' : 'bg-white border border-gray-200'}`}>
      <div className="relative h-48 img-zoom overflow-hidden">
        <Image src={p.img} alt={p.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        {p.tag && (
          <span className="absolute top-3 left-3 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded">{p.tag}</span>
        )}
        {p.loc && (
          <span className="absolute bottom-3 left-3 text-white text-xs flex items-center gap-1.5">
            <IconMapPin className="w-3 h-3 text-amber shrink-0" />{p.loc}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-heading font-bold text-base mb-2 leading-snug ${dark ? 'text-white' : 'text-navy'}`}>{p.title}</h3>
        {p.desc && <p className={`text-sm leading-relaxed mb-4 flex-1 ${dark ? 'text-white/55' : 'text-gray-500'}`}>{p.desc}</p>}
        {meta.length > 0 && (
          <dl className={`grid grid-cols-2 gap-3 pt-4 border-t text-xs ${dark ? 'border-white/10' : 'border-gray-100'}`}>
            {meta.map(m => (
              <div key={m.k}>
                <dt className={`uppercase tracking-wider text-[10px] mb-0.5 ${dark ? 'text-white/35' : 'text-gray-400'}`}>{m.k}</dt>
                <dd className={`font-semibold ${dark ? 'text-white/80' : 'text-navy'}`}>{m.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  )
}
