"use client"

import { Github, Linkedin, Instagram } from "lucide-react"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="block lg:hidden relative min-h-screen bg-[#030303] overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #2a2a2a 1px, transparent 1px),
            linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Geometric Patterns */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-primary/10 rounded-lg"
          animate={{
            rotate: [0, 45, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-28 left-32 w-16 h-16 bg-transparent border-2 border-primary/30"
          animate={{
            rotate: [0, -90, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-20 h-20 border-2 border-primary/20 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center top-15">
        <div className="container mx-auto px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-5"
              >
                <h1 className="text-primary text-3xl font-bold block md:hidden">
                         Hi, I am
                </h1>

                <h1 className="text-4xl  md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Vaishnavi{" "}
                  <span className="block">Raut</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary font-medium">
                  Web Developer & Designer
                </p>
                {/* <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Crafting digital experiences that blend innovative design with cutting-edge technology. 
                  I turn complex problems into elegant solutions through thoughtful code and creative vision.
                </p> */}
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex space-x-6"
              >
                <motion.a
                  href="https://github.com/vaishnavi-ra-ut"
                  className="w-12 h-12 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vaishnavi-raut-39b0902b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="w-12 h-12 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/vaishnavii_rautt?igsh=MTVrdmo2ZTZvcmplOQ=="
                  className="w-12 h-12 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  <a href="#about">About Me</a>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Abstract Geometric Shape */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end mb-15">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="w-80 h-80 md:w-96 md:h-96 relative -z-10 -mt-24 ">
                  {/* Main Circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Inner Geometric Elements */}
                  <motion.div
                    className="absolute top-16 left-16 w-32 h-32 bg-primary/20 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/40 transform rotate-45"
                    animate={{
                      rotate: [45, 135, 45],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-transparent border border-primary/50 rounded-lg"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Floating Dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        top: `${20 + Math.sin(i * 0.785) * 140}px`,
                        left: `${20 + Math.cos(i * 0.785) * 140}px`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Arrow */}
      <a href="#about">
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-primary text-3xl animate-bounce z-10">
          ↓
        </div>
      </a>
    </section>
  )
}