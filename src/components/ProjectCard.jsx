import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-500">
      {/* Image */}
      <div className="relative overflow-hidden h-36">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-70"></div>

        {/* Live Badge */}
        {project.demo && (
          <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

        <p className="text-gray-400 leading-7 mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.frontend && (
            <a
              href={project.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              <FaGithub />
              Frontend
            </a>
          )}

          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              <FaGithub />
              Backend
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
