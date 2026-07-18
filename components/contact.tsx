'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Contact() {
  const { contact, person } = portfolioContent
  const isContactEnabled = process.env.NEXT_PUBLIC_CONTACT_ENABLED === 'true';

  return (
    <>

    
    {isContactEnabled ? (
      <section id="contact" aria-labelledby="contact-title" className="px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <p className="section-kicker">05 / Contact</p>
            <h2 id="contact-title" className="text-4xl sm:text-5xl font-bold">{contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {contact.description}
            </p>

            <div className="pt-8">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {portfolioContent.navigation.contact}
              </a>
            </div>
          </div>

          {/* Contact methods */}
          <div className="max-w-sm mx-auto mt-16">
            <a
              href={`mailto:${person.email}`}
              className="block rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div className="text-4xl mb-4">✉</div>
              <h3 className="font-semibold text-foreground mb-2">{contact.emailLabel}</h3>
              <p className="text-muted-foreground text-sm">{person.email}</p>
            </a>
          </div>
        </div>
      </section>
    ) :(<></>)}


      {/* Footer */}
      <footer id={isContactEnabled ? undefined : 'contact'} className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {contact.footer}
            </p>
            <a href={`mailto:${person.email}`} className="rounded text-muted-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              {contact.emailDescription}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
