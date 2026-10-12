import {
  Coffee,
  FileCode2,
  Database,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Boxes,
} from "lucide-react";
const skillCategories = [
  {
    title: "Languages",
    icon: Coffee,
    skills: ["Java", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "REST APIs",
      "JWT",
      "Microservices",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Railway",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Maven"],
  },
  {
    title: "AI & APIs",
    icon: Boxes,
    skills: [
      "OpenAI API",
      "Gemini API",
      "Whisper API",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    title: "Core CS",
    icon: FileCode2,
    skills: [
      "OOP",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
];
const Skills = () => (
  <section
    id="skills"
    className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          What I work with
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          My <span className="text-cyan-600">Tech Stack</span>
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Tools and technologies I use to design, build, test, and deploy
          full-stack applications.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-cyan-700">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;
