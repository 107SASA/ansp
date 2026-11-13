import type { Metadata } from 'next'
import { PageHero, CTABanner, SectionLabel } from '@/components/UI'
import ProjectCard from '@/components/ProjectCard'
import { PROJECTS, type Project } from '@/lib/projects'
import { getPage, getSection } from '@/lib/cms'

export const revalidate = false
export const metadata: Metadata = { title: 'Projects' }

const clients = ['L&T','Danieli Group','Tenova India','Miki Wire','Krishna Tissues','Bengal Tools','Balluff India','IPA India','ABB','Bosch Rexroth']

export default async function ProjectsPage() {
  const page = await getPage('projects')
  const projectsFields = getSection(page, 'projects_list')

  let projects: Project[] = PROJECTS
  try {
    if (projectsFields.projects_json) {
      const parsed = JSON.parse(projectsFields.projects_json)
      if (Array.isArray(parsed) && parsed.length > 0) projects = parsed
    }
  } catch {}

  return (
    <>
      <PageHero title="Projects Delivered Across India & South Asia" subtitle="500+ automation and electrical projects across steel, paper, building automation, wire drawing and more since 1997." breadcrumb="Projects" imgSrc="https://anspl.co.in/assets/SiteErection0-2JH8nkwL.jpg" />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-12">Project Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(p => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Trusted By</SectionLabel>
          <h2 className="font-heading font-black text-navy text-4xl mb-10">Clients & OEM Partners</h2>
          <div className="flex flex-wrap gap-3">
            {clients.map(c => (
              <span key={c} className="bg-white border border-gray-200 rounded-lg px-5 py-3 font-heading font-bold text-navy text-sm hover:border-blue hover:text-blue transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Have a Project in Mind?" sub="Share your requirements and let our team propose the right solution." primary={{ label:'Discuss Your Project', href:'/contact' }} />
    </>
  )
}
