'use client'

import Image from 'next/image'
import { portfolioContent } from '@/lib/portfolio-content'

export default function Projects() {
  const { projects } = portfolioContent

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="section-kicker mb-3">04 / Selected work</p>
        <h2 id="projects-title" className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{projects.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.entries.map((project) => (
            !project.isHidden &&
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/20"
            >
              <div className={`relative h-48 overflow-hidden border-b border-border bg-gradient-to-br ${visualClasses[project.visual] || visualClasses.atlas}`}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                    unoptimized={typeof project.image === 'object' && project.image?.src?.endsWith('.gif')}
                  />
                )}
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(244,247,251,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(244,247,251,0.11)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-background/50 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm">{project.category}</div>
                <div className="absolute -bottom-6 right-7 grid size-24 rotate-12 place-items-center rounded-2xl border border-white/15 bg-background/35 font-mono text-3xl font-bold text-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6">{visualMarks[project.visual] || '🚀'}</div>
              </div>

              <div className="p-6">
                <a href={project.link} target='_blank' rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </a>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 rounded-lg bg-secondary/40 p-4 border border-border/60">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent mb-2.5">Highlighted Features</p>
                    <ul className="space-y-2 text-xs text-foreground/90">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-accent shrink-0 select-none">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a href={project.link} target='_blank' rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--signal)] transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                    <span aria-hidden="true">↗ {projects.bottomHighlight} </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const visualClasses: Record<string, string> = {
  atlas: 'from-emerald-500/60 via-teal-700/40 to-slate-950',
  fitness: 'from-violet-500/60 via-indigo-600/40 to-slate-950',
  health: 'from-teal-400/45 via-cyan-700/45 to-slate-950',
  travel: 'from-sky-500/50 via-blue-700/40 to-slate-950',
  deploy: 'from-fuchsia-500/45 via-violet-800/45 to-slate-950',
}

const visualMarks: Record<string, string> = {
  atlas: '🗺️',
  fitness: '🏋',
  health: '💊',
  travel: '✦',
  deploy: '⌘',
}

