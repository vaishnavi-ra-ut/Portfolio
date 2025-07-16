import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroFallback from './components/HeroFallback';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <HeroFallback/>
      <About/>
    </>
  )
}

export default App
