import intelliFitImage from '@/assets/images/intellifit.png'
import cognipillImage from '@/assets/images/cognipill.png'
import atlasGif from '@/assets/images/atlas_demo_gif.gif'
import kcnabadge from '@/assets/badges/KCNA_badge.png'

export type Certification = {
  name: string
  issuer?: string
  issuedAt?: string
  credentialUrl?: string
  badge?: string
}

export type ProjectEntry = {
  title: string
  category: string
  visual: string
  description: string
  highlights?: string[]
  technologies: readonly string[]
  link: string
  image?: any
  isHidden?: boolean
}

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
    linkedin: 'Let’s Connect',
  },
  hero: {
    headingStart: 'Software Engineer @ GCash',
    upperText: 'Software Engineer | Spring Boot | React | Linux',
    summary:
      'Building secure, practical web solutions with React, TypeScript, and backend services.',
    terminal: {
      windowTitle: 'portfolio@main',
      prompt: '$',
      entries: [
        {
          command: 'git status',
          commandTokens: [{ text: 'git', tone: 'accent' }, { text: ' status', tone: 'default' }],
          output: [
            [{ text: 'On branch main', tone: 'muted' }],
            [{ text: 'Your branch is up to date.', tone: 'success' }],
          ],
        },
        {
          command: 'docker compose up',
          commandTokens: [{ text: 'docker', tone: 'accent' }, { text: ' compose up', tone: 'default' }],
          output: [
            [{ text: '✔ ', tone: 'success' }, { text: 'database', tone: 'default' }],
            [{ text: '✔ ', tone: 'success' }, { text: 'backend', tone: 'default' }],
            [{ text: '✔ ', tone: 'success' }, { text: 'frontend', tone: 'default' }],
          ],
        },
        {
          command: './gradlew test',
          commandTokens: [{ text: './gradlew', tone: 'accent' }, { text: ' test', tone: 'default' }],
          output: [[{ text: 'BUILD SUCCESSFUL', tone: 'success' }]],
        },
        {
          command: 'pnpm build',
          commandTokens: [{ text: 'pnpm', tone: 'accent' }, { text: ' build', tone: 'default' }],
          output: [[{ text: '✓ ', tone: 'success' }, { text: 'Compiled successfully', tone: 'success' }]],
        },
        {
          command: 'gh workflow run deploy.yml',
          commandTokens: [{ text: 'gh', tone: 'accent' }, { text: ' workflow run ', tone: 'default' }, { text: 'deploy.yml', tone: 'muted' }],
          output: [[{ text: '✓ ', tone: 'success' }, { text: 'Deployment started', tone: 'success' }]],
        },
        {
          command: 'curl https://api.example.com/health',
          commandTokens: [{ text: 'curl', tone: 'accent' }, { text: ' ', tone: 'default' }, { text: 'https://api.example.com/health', tone: 'accent' }],
          output: [[
            { text: '{', tone: 'muted' },
            { text: '"status"', tone: 'accent' },
            { text: ': ', tone: 'muted' },
            { text: '"UP"', tone: 'success' },
            { text: '}', tone: 'muted' },
          ]],
        },
      ],
    },
  },
  about: {
    title: 'About',
    paragraphs: [
      'My work centers around building maintainable web applications and backend systems with a focus on security, scalability, and practical business requirements.',
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
    bottomHighlight:'Project Link',
    codeLabel: 'Project details',
    liveLabel: 'View project',
    entries: [
      {
        title: 'Atlas Knowledge Base',
        category: 'Privacy-First AI & RAG Engine',
        visual: 'atlas',
        description:
          'A privacy-first, self-hosted AI knowledge workspace and RAG engine. Upload large documents (up to 80MB), build vector indexes, and hold grounded conversations with verifiable source citations running 100% locally.',
        highlights: [
          '🔒 100% Private & Self-Hosted: Zero data tracking using local Ollama models (Qwen & nomic-embed-text) or optional cloud providers.',
          '🧠 Production RAG Engine: PostgreSQL pgvector store with HNSW indexing, chunking engine & workspace embedding identity guardrails.',
          '🏗️ Robust Spring Boot 3 Backend: Async background ingestion pipeline (PENDING/PROCESSING/COMPLETE/FAILED) with Flyway schema migrations.',
          '💬 Grounded Chat & Citations: Interactive chat with verifiable citations pointing directly to exact source passages.',
        ],
        technologies: ['Spring Boot 3', 'Java 21', 'Next.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker'],
        link: 'https://github.com/nicknitride/atlas_knowledge_base',
        image: atlasGif,
        isHidden: false,
      },
      {
        title: 'IntelliFit',
        category: 'Full-stack web application',
        visual: 'fitness',
        description:
          'Full-stack fitness platform featuring secure authentication, personalized nutrition tracking, and separated user data built with React, Express, and MySQL.',
        technologies: ['Vite', 'TypeScript', 'React', 'MySQL', 'Express.js'],
        link:'https://github.com/nicknitride/intellifit_project',
        image: intelliFitImage,
        isHidden: false
      },
      {
        title: 'CogniPill',
        category: 'Research & hardware prototype',
        visual: 'health',
        description:
          'A researched hardware and software pill-dispensing prototype designed to support aging populations safely and accessibly.',
        technologies: ['Figma', 'User research', 'Usability testing', 'Accessibility'],
        link:'https://canva.link/izu6aeqgo0q2hym',
        image:cognipillImage,
        isHidden: false
      },
      {
        title: 'Airline Ticket System',
        category: 'Web application',
        visual: 'travel',
        description:
          'A Django-based airline ticket system built as part of a Python web-development course.',
        technologies: ['Python', 'Django'],
        link:'',
        isHidden:true,
      },
      {
        title: 'Dockerized Portfolio Site',
        category: 'Developer experience',
        visual: 'deploy',
        description:
          'A personal portfolio site packaged for repeatable deployment using Docker.',
        technologies: ['Docker', 'Web deployment'],
        link:'',
        isHidden:true,
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { category: 'Languages', skills: ['TypeScript', 'Python', 'Java', 'Bash'] },
      { category: 'Web Development', skills: ['React', 'Node.js', 'Django', 'REST APIs', 'Spring Boot'] },
      { category: 'Data', skills: ['MySQL', 'PostgreSQL'] },
      { category: 'Tools', skills: ['Docker', 'Figma', 'Git'] },
    ],
  },
  certifications: {
    eyebrow: '03 / Credentials',
    title: 'Certifications',
    issuerLabel: 'Issued by',
    issuedAtLabel: 'Issued',
    credentialLabel: 'View {name} credential',
    entries: [
      { name: 'OCA 8' , issuedAt:'2025', issuer:'Oracle',badge:'☕️', credentialUrl:'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B7BB67DE24C8FDEE4E0B1B27E99ACD24661165BEEC432C9AC1C98C9817CF9206'},
      { name: 'KCNA' , issuedAt:'2025', issuer:'The Linux Foundation', badge:'🐧', credentialUrl:'https://www.credly.com/badges/6b6f01a9-3075-42cf-9097-47f4a1036982'},
    ] as readonly Certification[],
  },
  contact: {
    title: "Let's Work Together",
    description:
      'I am open to discussing software engineering opportunities and collaborative projects.',
    emailLabel: 'Email',
    footerMessage: 'Back to top ↑',
    footer: `© ${new Date().getFullYear()} Nicholo Pardines. All rights reserved.`,
  },
} as const
