import { portfolioContent } from '@/lib/portfolio-content'

export default function Certifications() {
  const { certifications } = portfolioContent

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="section-kicker mb-3">{certifications.eyebrow}</p>
        <h2 id="certifications-title" className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">
          {certifications.title}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.entries.map((certification) => (
            <article key={certification.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/20">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--signal)]/80 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[var(--signal)]">Credential</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{certification.name}</h3>
                </div>
                {certification.badge && <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-2xl" aria-hidden="true">{certification.badge}</span>}
              </div>
              {(certification.issuer || certification.issuedAt) && (
                <dl className="mt-6 space-y-3 border-t border-border/80 pt-5 text-sm">
                  {certification.issuer && (
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{certifications.issuerLabel}</dt>
                      <dd className="text-right font-medium text-foreground">{certification.issuer}</dd>
                    </div>
                  )}
                  {certification.issuedAt && (
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{certifications.issuedAtLabel}</dt>
                      <dd className="text-right font-medium text-foreground">{certification.issuedAt}</dd>
                    </div>
                  )}
                </dl>
              )}
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target='_blank'
                  className="mt-6 inline-flex rounded-sm font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--signal)] transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {certifications.credentialLabel.replace('{name}', certification.name)} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
