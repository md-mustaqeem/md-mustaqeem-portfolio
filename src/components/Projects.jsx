import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
const Projects = () => (
  <section
    id="projects"
    className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Featured <span className="text-cyan-600">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            A selection of full-stack and AI-powered applications built to solve
            practical problems.
          </p>
        </div>
        <a
          href="https://github.com/md-mustaqeem?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 font-semibold text-slate-800 transition hover:text-cyan-700"
        >
          All repositories <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);
export default Projects;
