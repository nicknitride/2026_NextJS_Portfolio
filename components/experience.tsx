'use client'

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Innovations Inc',
      role: 'Senior Full-Stack Engineer',
      period: '2023 - Present',
      location: 'Remote',
      accomplishments: [
        'Architected and shipped a real-time data processing pipeline handling 100K+ events per second',
        'Led migration of legacy monolith to microservices, improving deployment frequency by 5x',
        'Mentored 3 junior engineers and established code review best practices',
      ],
    },
    {
      company: 'Digital Solutions LLC',
      role: 'Full-Stack Developer',
      period: '2021 - 2023',
      location: 'San Francisco, CA',
      accomplishments: [
        'Built production e-commerce platform serving 50K+ daily active users',
        'Optimized frontend performance, reducing Largest Contentful Paint by 40%',
        'Implemented comprehensive test suite with 85% code coverage',
      ],
    },
    {
      company: 'StartupXYZ',
      role: 'Junior Developer',
      period: '2020 - 2021',
      location: 'New York, NY',
      accomplishments: [
        'Developed REST APIs and frontend features for SaaS product',
        'Contributed to open-source projects and documentation',
        'Collaborated with product team on feature implementation',
      ],
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              {/* Timeline line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-[7px] top-8 w-0.5 h-24 bg-gradient-to-b from-accent to-accent/20" />
              )}

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                )}

                <ul className="mt-4 space-y-2">
                  {exp.accomplishments.map((acc, accIdx) => (
                    <li key={accIdx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent flex-shrink-0 mt-1">▸</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
