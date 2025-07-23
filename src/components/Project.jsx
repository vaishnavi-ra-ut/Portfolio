import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import { projectsData } from '../utils/projectsData';

const categories = ["All Projects", "Frontend", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeModal, setActiveModal] = useState(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div id='projects' className="py-14 px-4 space-y-4 text-white bg-[#030303]">
      <h2 className="text-4xl font-bold text-center">
        Featured <span className="text-[#636ae8]">Projects</span>
      </h2>
      <p className="text-center mt-2 text-gray-300">
        Explore different Projects I have made!
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn rounded-full ${
              selectedCategory === category
                ? "bg-pink-700 text-white"
                : "bg-neutral text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card bg-neutral shadow-xl border border-neutral-700 bg-gradient-to-br from-primary/20 to-transparent "
          >
            <div className="relative p-4 inset-0 rounded-t-xl ">
              <span className="badge bg-[#636ae8] absolute top-2 left-2 capitalize">
                {project.category}
              </span>
              <div className="h-40 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
  <img 
    src={project.image} 
    alt="Project preview" 
    className="max-h-full max-w-full object-contain rounded-md"
  />
</div>

            </div>
            <div className="p-4 pt-2 ">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{project.description}</p>

              {/* Date & Duration */}
              <div className="text-xs text-gray-500 mt-3 flex gap-4 items-center">
                <span>📅 {project.date}</span>
                <span>⏳ {project.duration}</span>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline text-xs text-gray-200 border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
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
    className="btn btn-sm btn-ghost text-[#636ae8] flex items-center gap-1 text-md"
    onClick={() => setActiveModal(project.id)}
  >
    View Details <ArrowRight />
  </button>
</div>

            </div>

            {/* Modal */}
            {activeModal === project.id && (
  <dialog
    open
    className="modal modal-bottom sm:modal-middle"
    onClose={() => setActiveModal(null)}
  >
    <div className="modal-box bg-neutral">
      <h3 className="font-bold text-xl mb-2"><span className="btn">{project.icon}</span> {project.title}</h3>
      
      <p className="text-sm text-gray-300">{project.description}</p>
      <p className="mt-3 text-sm text-gray-400">
        Started: {project.date} | Duration: {project.duration}
      </p>

      <div className="mt-3 flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="badge badge-outline text-sm">
            {tag}
          </span>
        ))}
      </div>

      {project.challenges && project.challenges.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-200 mb-1">Key Challenges</h4>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {project.outcomes && project.outcomes.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-200 mb-1">Outcomes</h4>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {project.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-between">
        <div className=" mt-4">
        <button className="btn bg-[#636ae8]"><a href={project.link}>View Site ↝</a></button>
      </div>

      <div className="modal-action mt-4">
        <button className="btn" onClick={() => setActiveModal(null)}>
          Close
        </button>
      </div>
      </div>
    </div>
  </dialog>
)}

          </div>
        ))}
      </div>
    </div>
  );
}
