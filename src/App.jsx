import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroFallback from './components/HeroFallback';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Project from './components/Project'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <HeroFallback/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
