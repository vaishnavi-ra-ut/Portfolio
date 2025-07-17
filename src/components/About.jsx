"use client"

import { motion } from 'framer-motion'
import { Download, MapPin } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id='about' className="bg-[#030303] py-24 px-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ml-10"
        >
          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-gray-200">
                About <span className="text-[#7a7ba6]">Me</span>
              </h2>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Based in India</span>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-gray-300">
                I’m a final-year B.Tech student majoring in Artificial Intelligence & Data Science, with a strong interest in full-stack web development and AI integration. I love turning ideas into practical digital solutions using modern technologies like React, Node.js, and MongoDB. Currently, I’m sharpening my skills in Java, system design, and machine learning while preparing for software development roles. 
              </p>

              <div className="relative flex">
                <div className="w-1 bg-[#898ac3] rounded-full mr-4" />
                <p className="text-xl font-medium italic text-gray-200">
                  "I believe in building with <span className="text-[#898ac3]">passion</span>, 
                  <span className="text-[#898ac3]"> precision</span>, and keeping things simple yet impactful."
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 mt-2 bg-[#1c1c1c] text-gray-200 rounded-full text-sm border border-gray-600 hover:border-[#898ac3] hover:text-[#898ac3]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Photo + Resume */}
          <motion.div variants={itemVariants} className="space-y-8 hidden sm:block">
            <div className="relative group">
              <div className="relative bg-transparent rounded-2xl mt-3 p-4 border border-gray-400 group-hover:border-[#898ac3]/40 transition-colors duration-300 w-[340px] mx-auto">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-[#898ac3] rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://i.postimg.cc/wvrXHpJc/4.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#898ac3]/20 to-transparent opacity-10 group-hover:opacity-100 transition-opacity duration-100" />
                </div>
              </div>
            </div>

            <div className="pt-1 flex justify-center">
              <button className="btn bg-[#424478] px-6 py-2 text-white font-medium text-lg rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-100 hover:bg-[#9495c2]">
                <Download className="w-5 h-5 mr-2" />
                Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About