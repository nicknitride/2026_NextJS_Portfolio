'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'A comprehensive analytics platform providing real-time insights with interactive visualizations and custom reporting capabilities.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      github: '#',
      live: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard for seamless online sales.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      title: 'Developer Collaboration Tool',
      description: 'Real-time code collaboration platform with live editing, commenting, and integrated version control for remote teams.',
      technologies: ['TypeScript', 'WebRTC', 'Redis', 'Docker'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Project header */}
              <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-colors" />

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
