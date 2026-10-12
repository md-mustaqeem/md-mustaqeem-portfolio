import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink } from "lucide-react";
const ProjectCard = ({ project }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-900/8">
    <div className="relative h-52 overflow-hidden bg-slate-100">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
      {project.demo && (
        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm">
          Live project
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
      <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech?.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            <FaGithub /> Repository <ArrowUpRight size={15} />
          </a>
        )}
        {project.frontend && (
          <a
            href={project.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700"
          >
            <FaGithub /> Frontend
          </a>
        )}
        {project.backend && (
          <a
            href={project.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            <FaGithub /> Backend
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </article>
);
export default ProjectCard;
