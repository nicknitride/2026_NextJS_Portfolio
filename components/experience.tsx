'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Experience() {
  const { experience } = portfolioContent

  return (
    <section id="experience" aria-labelledby="experience-title" className="px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="section-kicker mb-3">02 / Track record</p>
        <h2 id="experience-title" className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{experience.title}</h2>
        
        <div className="space-y-12">
          {experience.entries.map((exp, idx) => (
            <article key={`${exp.company}-${exp.role}`} className="relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <div aria-hidden="true" className="absolute left-0 top-2 size-4 rounded-full border-4 border-background bg-accent shadow-[0_0_0_1px_var(--signal)]" />
              {/* Timeline line */}
              {idx !== experience.entries.length - 1 && (
                <div aria-hidden="true" className="absolute left-[7px] top-8 h-[calc(100%+2.5rem)] w-px bg-gradient-to-b from-accent to-border" />
              )}

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <div className="flex flex-col text-sm sm:flex-row sm:items-center sm:gap-3 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.accomplishments.map((acc, accIdx) => (
                    <li key={accIdx} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-1 shrink-0 text-[var(--signal)]">▸</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
