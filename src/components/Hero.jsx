import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://pngi.postimg.cc/BZK6QJS5/bg-port-7-2."
            className="w-full h-full object-cover"
            alt="background"
          />

          {/* Stars */}
          <div className="absolute inset-0 z-0">
            {[...Array(110)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{
                  top: `${Math.random() * 70}%`,
                  right: `${Math.random() * 47}%`,
                  opacity: 0.6 + Math.random() * 0.8,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Shooting Stars */}
          <div className="absolute z-20" style={{ top: "15%", left: "55%", width: "40%", height: "60%" }}>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute w-[100px] h-[1px] bg-white/80 rounded-full shadow-[0_0_9px_1px_rgba(255,255,255,0.8)]"
                style={{
                  top: `${Math.random() * 50}%`,
                  left: `${Math.random() * 100}%`,
                  rotate: '45deg',
                  opacity: 0.6
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 200, y: 200, opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 8 + 3,
                  ease: "easeInOut",
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/90 to-transparent z-10 h-full"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-20 relative h-full flex items-center px-8 md:px-20 text-white"
        >
          <div className="ml-5">
            <h6 className="text-[#636ae8] text-2xl font-bold mb-1">Hello, I'm</h6>
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] shadow-purple-600">
              Vaishnavi
            </h1>

            <p className="text-lg max-w-md text-gray-300/90 font-medium">
              Full-Stack Web Developer, Crafting experiences.
            </p>

            <div className="flex gap-5 text-3xl mt-6 text-white/87">
              <a
                href="https://github.com/vaishnavi-ra-ut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="transition-all duration-300 hover:text-[#636ae8] hover:drop-shadow-[0_0_10px_#3b82f6]" />
              </a>

              <a
                href="https://www.instagram.com/vaishnavii_rautt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="transition-all duration-300 hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899]" />
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi-raut-39b0902b9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="transition-all duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#2563eb]" />
              </a>
            </div>

            <Link to="/about">
              <h4 className="mt-6 font-medium text-[#636ae8]">
                Who am I? <span className="text-xl font-medium">↝</span>
              </h4>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer after full-screen hero */}
      <footer className="text-center  z-50 bg-black/50">
        <p className="text-sm text-white/45">Made with ♡ </p>
      </footer>
    </div>
  );
}
