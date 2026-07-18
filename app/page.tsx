import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import SiteHeader from '@/components/site-header'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="font-sans" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      </main>
    </>
  )
}
