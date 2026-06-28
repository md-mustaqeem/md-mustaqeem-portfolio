import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-10 px-6 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack & AI-powered applications built using React, Spring Boot,
            MySQL, PostgreSQL, and AI APIs.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-cyan-500 rounded-full"></div>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex items-start gap-6 mb-6"
            >
              {/* Number */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-cyan-500 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  {index + 1}
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="w-16 h-1 bg-cyan-500 mt-7"></div>

              {/* Card */}
              <div className="flex-1">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
