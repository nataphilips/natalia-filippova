import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Natalia Filippova. Built with React &amp; TypeScript.</p>
      </footer>
    </>
  )
}

export default App
