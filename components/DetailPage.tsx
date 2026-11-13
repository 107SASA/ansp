import Image from 'next/image'
import Link from 'next/link'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import { IconCheck } from '@/components/Icons'
import type { CatalogItem } from '@/lib/catalog'
import { SITE, tel } from '@/lib/site'

type Related = { title: string; items: CatalogItem[]; basePath: string }

/** Shared layout for service, product and industry detail pages. */
export default function DetailPage({
  item, parent, related,
}: {
  item: CatalogItem
  parent: { label: string; href: string }
  related?: Related
}) {
  const enquiryHref = `/contact?enquiry=${encodeURIComponent(item.title)}`

  return (
    <>
      <PageHero title={item.title} subtitle={item.summary} breadcrumb={item.title} parent={parent} imgSrc={item.img} />

      {/* Overview + image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-heading font-black text-navy text-3xl leading-tight mb-5">{item.title}</h2>
            {item.overview.map(p => (
              <p key={p} className="text-gray-500 leading-relaxed mb-4">{p}</p>
            ))}
            <div className="flex flex-wrap gap-3 mt-7">
              <Link href={enquiryHref}
                className="bg-amber text-navy font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-amber-dark transition-colors">
                Enquire Now
              </Link>
              <a href={tel(SITE.phones[0])}
                className="border-2 border-blue text-blue font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-blue hover:text-white transition-colors">
                Call {SITE.phones[0]}
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[340px] shadow-xl shadow-navy/10">
            <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            {item.badge && (
              <span className="absolute top-4 left-4 bg-amber text-navy font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded">
                {item.badge}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities + Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            { label: 'Capabilities', title: item.pointsTitle, list: item.points },
            { label: 'Where It’s Used', title: 'Applications', list: item.applications },
          ].map(col => (
            <div key={col.title} className="bg-white border border-gray-200 rounded-2xl p-8">
              <SectionLabel>{col.label}</SectionLabel>
              <h3 className="font-heading font-bold text-navy text-xl mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.list.map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-700">
                    <IconCheck className="w-4 h-4 text-blue shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related && related.items.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel>Related</SectionLabel>
            <h2 className="font-heading font-black text-navy text-3xl mb-10">{related.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.items.map(r => (
                <Link key={r.slug} href={`${related.basePath}/${r.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift">
                  <div className="relative h-40 img-zoom overflow-hidden">
                    <Image src={r.img} alt={r.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-navy text-base mb-1 group-hover:text-blue transition-colors">{r.title}</h3>
                    <p className="text-gray-500 text-sm">{r.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Discuss Your ${item.title} Requirement`}
        sub="Share your application details and our engineers will propose the right solution."
        primary={{ label: 'Send an Enquiry', href: enquiryHref }}
        secondary={{ label: `All ${parent.label}`, href: parent.href }}
      />
    </>
  )
}
