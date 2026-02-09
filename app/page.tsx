import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </main>
  )
}