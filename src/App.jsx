// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroFallback from './components/HeroFallback';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HeroFallback />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;
