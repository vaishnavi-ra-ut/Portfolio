"use client"

import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: Mail
    }
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-600">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">

          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} All rights reserved. Built with passion.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}