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
  <section id="about" className="bg-[#030303] py-24 px-10">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center ml-10"
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

          <div className="space-y-5 max-w-4xl">
            <p className="text-lg leading-relaxed text-gray-300">
              I’m a final-year B.Tech student majoring in Artificial Intelligence & Data Science,
              passionate about blending <span className="text-[#898ac3] font-medium">full-stack development</span> with
              <span className="text-[#898ac3] font-medium"> AI-powered solutions</span>. From concept to code, I thrive on building
              real-world applications using modern stacks like React, Node.js, and MongoDB.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Right now, I’m diving deep into Java, system design, and machine learning. My mission is to build apps
              that don’t just work — they *matter*.
            </p>

            <div className="relative flex">
              <div className="w-1 bg-[#898ac3] rounded-full mr-4" />
              <p className="text-xl font-medium italic text-gray-200">
                "I believe in building with <span className="text-[#898ac3]">passion</span>,
                <span className="text-[#898ac3]"> precision</span>, and keeping things simple yet impactful."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">Tech Stack & Tools:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB',
                  'HTML', 'CSS', 'Tailwind CSS', 'Git & GitHub', 'Vercel', 'Figma'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1c1c1c] text-gray-200 rounded-full text-sm border border-gray-600 hover:border-[#898ac3] hover:text-[#898ac3] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center bg-[#424478] px-6 py-2 text-white font-medium text-lg rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-150 hover:bg-[#9495c2]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

}

export default About