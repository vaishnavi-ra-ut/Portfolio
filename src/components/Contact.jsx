"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rautvaishnavi29@gmail.com",
    link: "mailto:rautvaishnavi29@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 930136XXXX"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Madhya Pradesh, India",
    link: "https://maps.app.goo.gl/7yRFawbnQ4j69hz28"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/vaishnavi-ra-ut",
    color: "hover:text-primary hover:border-primary"
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
    <section id="contact" className="bg-[#030303] relative overflow-hidden flex justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>
        </motion.div>

        {/* Content Column (centered on large screens, stacked on small) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-10"
        >
          {/* Contact Info Cards */}
          <div className="w-full max-w-xl space-y-6">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.link || "#"} className="block w-full">
                <div className="card bg-base-200 hover:shadow-lg transition duration-300 p-6 w-full">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/70 font-medium">{item.label}</p>
                      <p className="text-base-content font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Follow Me Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-2xl font-bold text-center text-foreground">Follow Me</h3>
            <div className="flex justify-center flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-base-200 border border-base-300 rounded-lg transition ${social.color}`}
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
