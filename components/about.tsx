'use client'

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">About</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a full-stack software engineer with a passion for building scalable, maintainable applications that solve real problems. With experience across frontend, backend, and infrastructure, I approach every project with a focus on code quality and developer experience.
          </p>
          
          <p>
            Currently, I'm focused on building elegant solutions that prioritize performance, accessibility, and user experience. I believe in the power of clean architecture and love collaborating with teams that value craftsmanship in software development.
          </p>
          
          <p>
            My engineering philosophy centers around writing code that is not just functional, but a pleasure to work with. I'm committed to continuous learning, exploring new technologies, and contributing to open-source projects.
          </p>

          <div className="pt-8">
            <h3 className="text-foreground text-xl font-semibold mb-4">Areas of Interest</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-3">
                <span className="text-accent">▸</span>
                <span>Full-stack web development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">▸</span>
                <span>Performance optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">▸</span>
                <span>System design & architecture</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">▸</span>
                <span>Developer tooling</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
