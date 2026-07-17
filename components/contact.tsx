'use client'

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate.
            </p>

            <div className="pt-8">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <a
              href="mailto:hello@example.com"
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors text-center group"
            >
              <div className="text-4xl mb-4">✉</div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">hello@example.com</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors text-center group"
            >
              <div className="text-4xl mb-4">in</div>
              <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors text-center group"
            >
              <div className="text-4xl mb-4">◆</div>
              <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm">View my projects</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
