'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Skills() {
  const { skills } = portfolioContent

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">{skills.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category) => (
            <div key={category.category} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-accent mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="text-accent">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
