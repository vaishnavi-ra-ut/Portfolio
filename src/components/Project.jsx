import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import { projectsData } from "../utils/projectsData";

const categories = ["All Projects", "Frontend", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="py-16 px-6 bg-[#030303] text-white">
      <h2 className="text-4xl font-bold text-center">
        Featured <span className="text-[#636ae]">Projects</span>
      </h2>
      <p className="text-center text-gray-400 mt-2">
        Explore different Projects I have made!
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
              selectedCategory === category
                ? "bg-[#636ae8] text-white border-transparent shadow-md"
                : "bg-neutral text-white border-gray-600 hover:border-[#636ae8]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-neutral-700 rounded-xl shadow-lg hover:shadow-[#636ae8]/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="relative">
              <span className="absolute top-3 left-3 bg-[#636ae8] text-white text-xs font-medium px-3 py-1 rounded-full z-10 capitalize">
                {project.category}
              </span>
              <div className="h-44 flex items-center justify-center bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full object-contain rounded-t-xl"
                />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="text-xs text-gray-500 flex gap-4 mt-2">
                <span>📅 {project.date}</span>
                <span>⏳ {project.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs border border-gray-600 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-square hover:text-[#636ae8] hover:border-[#636ae8]"
                >
                  <Github />
                </a>
                <button
                  className="text-sm text-[#636ae8] hover:underline flex items-center gap-1"
                  onClick={() => setActiveProject(project)}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal placed outside the .map loop */}
      {activeProject && (
        <dialog open className="modal modal-bottom sm:modal-middle z-50">
          <div className="modal-box bg-[#1c1c1c] border border-gray-700 text-white max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="btn">{activeProject.icon}</span> {activeProject.title}
            </h3>
            <p className="text-sm text-gray-300">{activeProject.description}</p>
            <p className="mt-2 text-xs text-gray-400">
              Started: {activeProject.date} | Duration: {activeProject.duration}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline text-sm text-gray-200 border-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {activeProject.challenges?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-200 mb-1">Key Challenges</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {activeProject.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeProject.outcomes?.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-200 mb-1">Outcomes</h4>
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
                className="btn bg-[#636ae8] text-white"
              >
                View Site ↝
              </a>
              <button
                className="btn btn-outline border-gray-500 text-gray-300"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
