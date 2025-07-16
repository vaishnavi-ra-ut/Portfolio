"use client"

import React from 'react'
import { motion } from 'framer-motion'

import { 
  Calendar, 
  Download, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  User,
  Code,
  Heart
} from 'lucide-react'

const About = () => {
  const timelineData = [
    {
      year: "2023",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development of scalable web applications",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      description: "Developed modern web solutions for enterprise clients",
      icon: <Code className="w-4 h-4" />
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Studio",
      description: "Specialized in responsive design and user interfaces",
      icon: <User className="w-4 h-4" />
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "University of Technology",
      description: "Bachelor's degree with focus on web development",
      icon: <GraduationCap className="w-4 h-4" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Right Column - About Content (moved to left) */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground text-gray-200">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground text-gray-200">
                <MapPin className="w-4 h-4" />
                <span>Based in India</span>
              </div>
            </div>

            {/* About text with highlighted quotes */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground text-gray-300">
                I’m a final-year B.Tech student majoring in Artificial Intelligence & Data Science, with a strong interest in full-stack web development and AI integration. I love turning ideas into practical digital solutions using modern technologies like React, Node.js, and MongoDB. Currently, I’m sharpening my skills in Java, system design, and machine learning while preparing for software development roles. 
              </p>

              {/* Highlighted quote */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full" />
                <div className="pl-6 py-2">
                  <p className="text-xl font-medium text-foreground italic text-gray-200">
                    "I believe in building with <span className="text-primary">passion</span> , 
                    <span className="text-primary"> precision</span> , and keeping things simple yet impactful."
                  </p>
                </div>
              </div>

              {/* Skills highlight */}
              <div className="flex flex-wrap gap-2 s">
                {['React', 'JavaScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB' ,'HTML/CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 mt-2 bg-[#701349] text-foreground rounded-full text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Left Column - Photo and Visual Elements (moved to right) */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Photo with geometric border and animations */}
            <div className="relative">
              <div className="relative group ">
                {/* Geometric background pattern */}
                <div className="absolute inset-10 bg-gradient-to-br from-gray-600/10 to-primary/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-300" />
                <div className="absolute inset-10 bg-gradient-to-tl from-gray-600/8 to-transparent rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6 duration-300" />
                
                {/* Photo placeholder with border treatment */}
                <div className="relative bg-transparent rounded-2xl mt-3 p-4 border border-border group-hover:border-primary/40 transition-colors duration-300 w-[400px] mx-auto ">
                  <div className="aspect-square bg-gradient-to-br from-muted to-gray-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <User className="w-16 h-16 text-muted-foreground text-gray-400" />
                    
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Geometric corner decorations */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-50" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-50" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-50" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-50" />
                  </div>
                </div>
              </div>
            </div>

            {/* CV Download Button */}
            <div className="pt-1 flex justify-center will-change-transform">
              <button className="btn bg-[#424478] px-6 py-2 text-white font-medium text-lg rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
