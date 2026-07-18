'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function About() {
  const { about } = portfolioContent

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">{about.title}</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="pt-8">
            <h3 className="text-foreground text-xl font-semibold mb-4">{about.interestsTitle}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
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
