'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Skills() {
  const { skills } = portfolioContent

  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="section-kicker mb-3">05 / Toolkit</p>
        <h2 id="skills-title" className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{skills.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category) => (
            <article key={category.category} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-accent mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span aria-hidden="true" className="text-[var(--signal)]">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
