"use client"

import { motion } from "framer-motion"
import contactInfo from "../utils/contactInfo"
import { Github, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/vaishnavi-ra-ut",
    color: "hover:text-[#636ae8] hover:border-[#636ae8]/50"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/vaishnavi-raut-39b0902b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-400 hover:border-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/vaishnavii_rautt?igsh=MTVrdmo2ZTZvcmplOQ==",
    color: "hover:text-pink-400 hover:border-pink-400"
  }
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-y-auto flex justify-center bg-transparent backdrop-blur min-h-screen"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-50" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-white mb-3 drop-shadow-md">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Got an idea or just want to say hi? I’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-10"
        >
          <div className="w-full max-w-xl space-y-6">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.link || "#"} className="block w-full">
                <div className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#636ae8] flex flex-col md:flex-row items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#636ae8]/20 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#636ae8]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Follow Me */}
          <div className="space-y-5 w-full">
            <h3 className="text-2xl font-bold text-white text-center">Follow Me</h3>
            <div className="flex justify-center gap-5 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border border-white/10 text-white bg-white/5 backdrop-blur-sm rounded-full transition-all duration-300 hover:shadow-[0_0_15px] ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}