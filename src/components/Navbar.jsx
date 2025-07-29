// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-sm bg-black/40 text-white z-50 shadow-md"
    >
      <Link to="/"><div className="text-lg font-bold tracking-wide">Portfolio</div></Link>

      <ul className="hidden md:flex gap-8 text-white/90 font-medium">
        <li>
          <Link to="/" className="hover:text-[#636ae8] hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)] transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#636ae8] hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)] transition duration-300">
            Who Am I?
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#636ae8] hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)] transition duration-300">
            Creations
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#636ae8] hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)] transition duration-300">
            Let's Connect
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden text-2xl z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black/70 text-white flex flex-col gap-6 px-8 py-6 font-medium md:hidden "
        >
          <li>
            <Link to="/" className="hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-400">Who Am I?</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-purple-400">Creations</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-400">Let's Connect</Link>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
