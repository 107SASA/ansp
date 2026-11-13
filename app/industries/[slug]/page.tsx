import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import DetailPage from '@/components/DetailPage'
import { INDUSTRIES, SERVICES, findIndustry } from '@/lib/catalog'

export const dynamicParams = false

export function generateStaticParams() {
  return INDUSTRIES.map(i => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = findIndustry(params.slug)
  return item ? { title: item.title, description: item.summary } : {}
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = findIndustry(params.slug)
  if (!item) notFound()
  const related = (item.related ?? [])
    .map(s => SERVICES.find(r => r.slug === s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <DetailPage
      item={item}
      parent={{ label: 'Industries', href: '/industries' }}
      related={{ title: 'Related Services', items: related, basePath: '/services' }}
    />
  )
}
