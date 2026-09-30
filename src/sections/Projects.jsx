import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'
import { useLang } from '../i18n/context'

export default function Projects() {
  const { t, c: { projects } } = useLang()
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('projects.title')} />
          <Reveal className="max-w-xs text-body">
            {t('projects.intro')}
          </Reveal>
        </div>
        <ol className="mt-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} total={projects.length} onOpen={setOpen} />
          ))}
        </ol>
      </div>
      {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
