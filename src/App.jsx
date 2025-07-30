// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { useEffect, useRef } from "react";

export default function App() {
  const starRef = useRef(null);

  // 👆 Star movement logic at the root level
  useEffect(() => {
  const handleMouseMove = (e) => {
    const star = starRef.current;
    if (star) {
      const offsetX = -20;
      const offsetY = 20;
      star.style.top = `${e.clientY + offsetY}px`;
      star.style.left = `${e.clientX + offsetX}px`;
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background Image */}
      <img
        src="https://i.postimg.cc/BZK6QJS5/bg-port-7-2.png"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        alt="background"
      />

      {/* 🌟 Glowing star */}
      <div
        ref={starRef}
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none 
                   shadow-[0_0_8px_2px_white] z-[9999] transition-transform duration-75 ease-linear"
      ></div>

      {/* App Routes */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}
