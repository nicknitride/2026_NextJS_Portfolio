'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Contact() {
  const { contact, person } = portfolioContent
  const isContactEnabled = process.env.NEXT_PUBLIC_CONTACT_ENABLED === 'true';

  return (
    <>

    
    {isContactEnabled ? (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">{contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {contact.description}
            </p>

            <div className="pt-8">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {portfolioContent.navigation.contact}
              </a>
            </div>
          </div>

          {/* Contact methods */}
          <div className="max-w-sm mx-auto mt-16">
            <a
              href={`mailto:${person.email}`}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors text-center group"
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
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {contact.footer}
            </p>
            <a href={`mailto:${person.email}`} className="text-muted-foreground hover:text-accent transition-colors">
              {contact.emailDescription}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
