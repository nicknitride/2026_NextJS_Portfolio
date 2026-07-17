'use client'

export default function Hero() {
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
              Full-stack Software
              <span className="text-accent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"> Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl text-balance">
              I build production-quality software with a focus on performance, accessibility, and elegant code architecture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="relative bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/50">
              View Projects →
            </button>
            <button className="relative border border-accent/50 hover:border-accent hover:text-accent text-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/5">
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8 border-t border-border">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
