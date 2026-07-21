'use client'

import { portfolioContent } from '@/lib/portfolio-content'

export default function Footer() {
  const { contact, person } = portfolioContent
  const isContactEnabled = process.env.NEXT_PUBLIC_CONTACT_ENABLED === 'true';

  return (
    <>
      {/* Footer */}
      <footer id={isContactEnabled ? undefined : 'contact'} className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {contact.footer}
            </p>
            <a href='#hero' className="rounded text-muted-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              {contact.footerMessage}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
