import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './sections/Landing'
import Academic from './sections/Academic'
import Experience from './sections/Experience'
import Honors from './sections/Honors'
import Research from './sections/Research'
import Projects from './sections/Projects'
import Creative from './sections/Creative'
import Stack from './sections/Stack'
import Documents from './sections/Documents'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="fixed left-3 top-3 z-[70] -translate-y-20 rounded-lg bg-ink px-4 py-3 text-canvas focus-visible:translate-y-0"
      >
        Lewati ke konten
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Landing />
        <Academic />
        <Experience />
        <Honors />
        <Research />
        <Projects />
        <Creative />
        <Stack />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
