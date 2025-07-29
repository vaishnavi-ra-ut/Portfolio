import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 text-white text-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85 z-0" />

      {/* Glowing dots/stars layer (optional if you're using dynamic bg elsewhere) */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" /> */}

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-4">
          ABOUT ME
        </h2>

        <h1 className="text-4xl md:text-4xl font-extrabold mb-4  drop-shadow-[0_0_6px_rgba(192,132,252,0.4)]">
          Hello, I'm <span className="text-[#636ae8] drop-shadow-[0_0_6px_rgba(192,132,252,0.1)]">Vaishnavi Raut</span>
        </h1>

        <p className="text-lg leading-8 mb-6 text-gray-200">
          I’m a <span className="text-[#636ae8] font-medium">Full-Stack Web Developer</span> and a final-year student of AI & DS, passionate about building immersive user experiences and integrating smart technologies into everyday web applications.
        </p>

        <div className="border-t border-gray-600 w-24 mx-auto mb-6" />

        <p className="text-md leading-7 mb-4 text-gray-300">
          My toolkit includes <span className="text-[#636ae8]"></span> I’m actively exploring how to enhance product usability through <span className="text-[#636ae8]">AI/ML integration</span> for dynamic and adaptive interfaces.
        </p>

        <p className="text-md leading-7 mb-6 text-gray-300">
          Whether it's coding a new feature or designing a fluid UI, I strive to create products that are not only functional but feel good to use.
        </p>

        <p className="text-md leading-7 text-gray-400 italic mb-8">
          Outside of development, I love vibing to music, dancing, and occasionally diving into creative designs.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/projects"
          className="inline-block px-5 py-2 rounded-full bg-[#636ae8] hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.4)] shadow-lg"
        >
          Explore My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
