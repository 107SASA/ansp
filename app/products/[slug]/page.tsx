import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import DetailPage from '@/components/DetailPage'
import { PRODUCTS, INDUSTRIES, findProduct } from '@/lib/catalog'

export const dynamicParams = false

export function generateStaticParams() {
  return PRODUCTS.map(i => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = findProduct(params.slug)
  return item ? { title: item.title, description: item.summary } : {}
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = findProduct(params.slug)
  if (!item) notFound()
  const related = (item.related ?? [])
    .map(s => INDUSTRIES.find(r => r.slug === s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <DetailPage
      item={item}
      parent={{ label: 'Products', href: '/products' }}
      related={{ title: 'Industries We Serve', items: related, basePath: '/industries' }}
    />
  )
}
