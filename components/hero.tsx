'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Hero() {
  const { hero, navigation, person } = portfolioContent

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Glow orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-accent/12 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {hero.headingStart}
              <span className="text-accent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">{hero.headingAccent}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl text-balance">
              {hero.summary}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#projects" className="relative bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/50">
              {navigation.projects} →
            </a>
            <a href={`mailto:${person.email}`} className="relative border border-accent/50 hover:border-accent hover:text-accent text-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/5">
              {navigation.contact}
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-border text-muted-foreground text-sm font-medium">
            {person.location}
          </div>
        </div>
      </div>
    </section>
  )
}
