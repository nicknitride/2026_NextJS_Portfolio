export const portfolioContent = {
  heroComponent:{
    herotext:'N. Pardines 🐈',
  },
  person: {
    name: 'Nicholo Pardines',
    email: 'nicholo.pardines@outlook.com',
    location: 'Quezon City, Philippines',
  },
  metadata: {
    title: 'Nicholo Pardines | Software Engineer',
    description: 'Portfolio of Nicholo Pardines, Software Engineer at GCash.',
  },
  navigation: {
    projects: 'View Projects',
    contact: 'Get in Touch',
  },
  hero: {
    headingStart: 'Nicholo Pardines',
    headingAccent: ' | 👨🏽‍💻',
    summary:
      'Building secure, practical web solutions with React, TypeScript, and backend services.',
  },
  about: {
    title: 'About',
    paragraphs: [
      'My work focuses on web development, backend services, and practical React solutions for business use cases.',
      'I enjoy turning requirements, API specifications, and user needs into maintainable software with a strong foundation in functional design and client requirement analysis.',
    ],
    interestsTitle: 'Areas of Interest',
    interests: [
      'Full-stack web development',
      'Backend services and APIs',
      'System design and architecture',
      'Business process automation',
    ],
  },
  experience: {
    title: 'Experience',
    entries: [
      {
        company: 'GCash',
        role: 'Software Engineer',
        period: 'June 16, 2025 - Present',
        accomplishments: [
          'Implemented OAuth2/JWT authentication and authorization for distributed backend services, integrating an external identity provider while preserving migration compatibility.',
          'Built REST APIs for internal administration, with pagination, filtering, validation, and comprehensive unit tests.',
          'Developed feature flags and configurable security middleware for safe, staged frontend and backend releases across environments.',
          'Partnered with cross-functional teams to turn API specifications, sequence diagrams, and business requirements into production-ready implementations.',
          'Improved code quality through refactoring, test coverage, deployment configuration, and targeted production fixes.',
          'Contributed across the delivery lifecycle: requirements analysis, implementation, reviews, testing, QA support, and rollout.',
        ],
      },
      {
        company: 'Power Sector Assets and Liabilities Management Corporation',
        role: 'Software Development Intern',
        period: 'June 2024 - July 2024',
        accomplishments: [
          'Led a team of interns building an Expo React Native inventory-tracking application used in 80+ power-plant inventory audit operations.',
          'Delivered mobile automations that reduced device-acquisition costs by 40% by enabling low-cost Android phones for site inspections.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    codeLabel: 'Project details',
    liveLabel: 'View project',
    entries: [
      {
        title: 'IntelliFit',
        category: 'Full-stack web application',
        visual: 'fitness',
        description:
          'A full-stack fitness and nutrition tracker with encrypted accounts and separated user data.',
        technologies: ['Vite', 'TypeScript', 'React', 'MySQL', 'Express.js'],
      },
      {
        title: 'CogniPill',
        category: 'Research & hardware prototype',
        visual: 'health',
        description:
          'A researched hardware and software pill-dispensing prototype designed to support aging populations safely and accessibly.',
        technologies: ['Figma', 'User research', 'Usability testing', 'Accessibility'],
      },
      {
        title: 'Airline Ticket System',
        category: 'Web application',
        visual: 'travel',
        description:
          'A Django-based airline ticket system built as part of a Python web-development course.',
        technologies: ['Python', 'Django'],
      },
      {
        title: 'Dockerized Portfolio Site',
        category: 'Developer experience',
        visual: 'deploy',
        description:
          'A personal portfolio site packaged for repeatable deployment using Docker.',
        technologies: ['Docker', 'Web deployment'],
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { category: 'Languages', skills: ['TypeScript', 'Python', 'Java', 'Bash'] },
      { category: 'Web Development', skills: ['React', 'Node.js', 'Django', 'REST APIs'] },
      { category: 'Data', skills: ['MySQL', 'PostgreSQL'] },
      { category: 'Tools', skills: ['Docker', 'Figma', 'Git'] },
    ],
  },
  contact: {
    title: "Let's Work Together",
    description:
      'I am open to discussing software engineering opportunities and collaborative projects.',
    emailLabel: 'Email',
    emailDescription: 'Send me a message',
    footer: `© ${new Date().getFullYear()} Nicholo Pardines. All rights reserved.`,
  },
} as const
