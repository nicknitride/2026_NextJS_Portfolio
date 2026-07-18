'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function About() {
  const { about } = portfolioContent

  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="section-kicker mb-3">01 / Profile</p>
        <h2 id="about-title" className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{about.title}</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="pt-8">
            <h3 className="text-foreground text-xl font-semibold mb-4">{about.interestsTitle}</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3 rounded-lg border border-border/70 bg-card/45 px-4 py-3 text-base text-foreground">
                  <span aria-hidden="true" className="text-[var(--signal)]">▸</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
