'use client'

import { portfolioContent } from '@/lib/portfolio-content'
import DecorativeTerminal from '@/components/decorative-terminal'

export default function Hero() {
  const { hero, navigation, person } = portfolioContent

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:gap-10 xl:gap-14">
        <div className="min-w-0 space-y-9">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent">NP</span>
              <p className="section-kicker">{hero.upperText}</p>
            </div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              Building <span className="text-accent">reliable systems</span> for real-world products.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground text-balance sm:text-2xl">
              {hero.summary}
            </p>
            <p className="font-mono text-sm text-foreground/80">{hero.headingStart}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <a href="#projects" className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              {navigation.projects} →
            </a>
            <a href={'https://www.linkedin.com/in/nicholo-pardines-303501364'} target='_blank' rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.84v1.64h.05c.54-1.02 1.84-2.1 3.78-2.1C21.2 8.54 22 11.2 22 14.66V21h-4v-5.62c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.14 1.46-2.14 2.96V21h-4V9Z" />
              </svg>
              {navigation.linkedin}
            </a>
          </div>

          <div className="grid gap-3 border-t border-border pt-7 text-sm sm:grid-cols-3">
            {['OAuth / JWT', 'REST APIs', 'React + TypeScript'].map((specialty) => (
              <div key={specialty} className="rounded-lg border border-border/80 bg-card/50 px-4 py-3 font-mono text-xs text-muted-foreground">
                <span className="mr-2 text-[var(--signal)]">/</span>{specialty}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden min-w-0 lg:block">
          <DecorativeTerminal terminal={hero.terminal} />
        </div>
      </div>
    </section>
  )
}
