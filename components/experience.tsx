'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Experience() {
  const { experience } = portfolioContent

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">{experience.title}</h2>
        
        <div className="space-y-12">
          {experience.entries.map((exp, idx) => (
            <div key={`${exp.company}-${exp.role}`} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              {/* Timeline line */}
              {idx !== experience.entries.length - 1 && (
                <div className="absolute left-[7px] top-8 w-0.5 h-24 bg-gradient-to-b from-accent to-accent/20" />
              )}

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.accomplishments.map((acc, accIdx) => (
                    <li key={accIdx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent flex-shrink-0 mt-1">▸</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
