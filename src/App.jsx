import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroFallback from './components/HeroFallback';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <HeroFallback/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
