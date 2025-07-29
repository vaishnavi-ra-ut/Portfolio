import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import { projectsData } from "../utils/projectsData";
import { motion } from "framer-motion";

const categories = ["All Projects", "Frontend", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className="relative min-h-screen w-full px-6 py-20 text-white overflow-hidden">
      {/* Netflix-style dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/10 z-0 " />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 drop-shadow-[0_0_6px_rgba(192,132,252,0.4)]">
          Featured <span className="text-[#636ae8]">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Built with UI, logic, and more bugs than I’d like to admit (now fixed, thanks to late-night debugging)
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-[#636ae8] text-white border-transparent shadow-md"
                  : "bg-black/30 text-white border-gray-600 hover:border-[#636ae8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#636ae8] flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-full md:w-2/5 h-48 flex justify-center items-center bg-black/20 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full"
                />
              </div>

              <div className="flex-1 text-left space-y-3">
                <span className="inline-block bg-[#636ae8] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {project.category}
                </span>

                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                <div className="text-xs text-gray-500 flex gap-6">
                  <span>📅 {project.date}</span>
                  <span>⏳ {project.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border border-gray-600 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-square hover:text-[#636ae8]"
                  >
                    <Github />
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-sm text-[#636ae8] hover:underline flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
  <dialog open className="modal modal-bottom sm:modal-middle z-50 ">
    <div className="modal-box bg-[#1c1c1c]/85 backdrop-blur-md border border-gray-700 text-white max-h-[90vh] overflow-y-auto shadow-[0_0_30px_#636ae8]/40 rounded-xl transition-all duration-300 scrollbar-thin scrollbar-thumb-[#636ae8]/40 scrollbar-track-transparent ">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#f2f2f2]">
        <span className="btn bg-[#636ae8]/20 border-[#636ae8]/40 text-white shadow-md">
          {activeProject.icon}
        </span>
        {activeProject.title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed">
        {activeProject.description}
      </p>

      <p className="mt-3 text-xs text-gray-400">
        📅 Started: {activeProject.date} &nbsp; | &nbsp; ⏳ Duration: {activeProject.duration}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeProject.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-sm text-white border border-[#636ae8] bg-[#636ae8]/10 shadow-[0_0_5px_#636ae8]"
          >
            #{tag}
          </span>
        ))}
      </div>

      {activeProject.challenges?.length > 0 && (
        <div className="mt-5">
          <h4 className="font-semibold text-[#ddd] mb-2">🚧 Key Challenges</h4>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {activeProject.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {activeProject.outcomes?.length > 0 && (
        <div className="mt-5">
          <h4 className="font-semibold text-[#ddd] mb-2">🎯 Outcomes</h4>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {activeProject.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <a
          href={activeProject.link}
          target="_blank"
          className="btn bg-gradient-to-r from-[#636ae8] to-[#a991f7] text-white border-none shadow-[0_0_05px_#636ae8] hover:brightness-110 transition-all duration-200"
        >
          🚀 View Site ↝
        </a>
        <button
          className="btn btn-outline border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400 transition-all"
          onClick={() => setActiveProject(null)}
        >
          ❌ Close
        </button>
      </div>
    </div>
  </dialog>
)}

      </div>
    </section>
  );
}
