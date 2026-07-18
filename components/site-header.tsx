'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (current) setActiveId(current.target.id)
      },
      { rootMargin: '-35% 0px -55%', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-xl border border-border/80 bg-background/80 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md sm:px-4">
        <a href="#main-content" className="group flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg border border-accent/45 bg-accent/10 font-mono text-xs font-bold text-accent transition-transform group-hover:-rotate-6">NP</span>
          <span className="hidden font-mono text-xs font-semibold tracking-wide text-foreground sm:block">N. PARDINES</span>
        </a>

        <nav aria-label="Primary navigation" className="min-w-0 overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block rounded-md px-2.5 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-3 ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {link.label}
                    <span aria-hidden="true" className={`absolute inset-x-3 bottom-1 h-px origin-left bg-[var(--signal)] transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
