'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Projects() {
  const { projects } = portfolioContent

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">{projects.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.entries.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Project header */}
              <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-colors" />

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
