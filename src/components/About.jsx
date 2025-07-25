import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#030303] text-white py-16 px-6 md:px-12 lg:px-24 animate-fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#636ae8] to-blue-400/18 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text Content */}
          <div>
            <p className="r max-w-3xl mx-auto text-white text-lg leading-relaxed transition-all duration-300 animate-fade-in">
        Hi! I'm <span className="font-semibold text-[#636ae8]">Vaishnavi Raut </span>,
        a 4th-year AI & DS student and a full-stack web developer. I love crafting
        responsive, elegant UIs and building smart, scalable apps that blend the
        power of AI and intuitive design.
      </p>
            <p className="text-lg leading-relaxed mb-4">
              I'm a passionate{" "}
              <span className="text-[#636ae8] font-semibold">Full-Stack Developer</span> with a knack
              for building clean and efficient user interfaces. I love blending{" "}
              <span className="text-[#636ae8]/70">design</span> with{" "}
              <span className="text-[#636ae8]/70">functionality</span> to deliver engaging experiences.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              My strengths lie in{" "}
              <span className="text-[#636ae8] font-semibold">
                React, Tailwind CSS, Node.js, MongoDB
              </span>
              , and I'm currently diving deep into{" "}
              <span className="text-[#636ae8]/70">AI/ML-powered web experiences</span>.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you’ll find me exploring the latest tech trends or sketching UI
              ideas with coffee!
            </p>
          </div>

          {/* Right side - Skills/Icons */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className=" bg-transparent  rounded-xl p-6 shadow-md hover:shadow-[#636ae8]/40 transition duration-300">
              <FaCode className="text-4xl text-[#636ae8] mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Frontend </h3>
              <p className="text-sm text-gray-300 mt-2">React · Tailwind · UI/UX</p>
            </div>
            <div className="bg-transparent  rounded-xl p-6 shadow-md hover:shadow-[#636ae8]/40 transition duration-300">
              <FaLaptopCode className="text-4xl text-[#636ae8] mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Backend </h3>
              <p className="text-sm text-gray-300 mt-2">Node.js · MongoDB · APIs</p>
            </div>
            <div className=" bg-transparent  rounded-xl p-6 shadow-md hover:shadow-[#636ae8]/40 transition duration-300">
              <FaLightbulb className="text-4xl text-[#636ae8] mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Creative Thinking</h3>
              <p className="text-sm text-gray-300 mt-2">Problem Solving · Design Mindset</p>
            </div>
            <div className=" bg-transparent  rounded-xl p-6 shadow-md hover:shadow-[#636ae8]/40 transition duration-300">
              <FaLaptopCode className="text-4xl text-[#636ae8] mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Tech Explorer</h3>
              <p className="text-sm text-gray-300 mt-2">AI/ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
