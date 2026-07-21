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
            <article key={certification.name} className="rounded-xl border border-border bg-card p-6">
              {certification.badge && <p className="mb-4 text-2xl" aria-hidden="true">{certification.badge}</p>}
              <h3 className="text-xl font-semibold text-foreground">{certification.name}</h3>
              {certification.issuer && <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>}
              {certification.issuedAt && <p className="mt-1 text-sm text-muted-foreground">{certification.issuedAt}</p>}
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  className="mt-5 inline-flex text-sm font-semibold text-accent transition-colors hover:text-[var(--signal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {certifications.credentialLabel} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
