import {
  Coffee,
  FileCode2,
  Database,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Boxes,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Coffee size={28} />,
    skills: ["Java", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Frontend",
    icon: <Globe size={28} />,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "REST APIs",
      "JWT",
      "Microservices",
      "Apache Kafka",
    ],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={28} />,
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
    icon: <GitBranch size={28} />,
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Maven"],
  },
  {
    title: "AI & APIs",
    icon: <Boxes size={28} />,
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
    icon: <FileCode2 size={28} />,
    skills: [
      "OOP",
      "DSA",
      "DBMS",
      "Operating System",
      "Computer Networks",
      "System Design",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6 scroll-mt-1"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg">
            Technologies and tools I use to design, build, deploy and maintain
            scalable Full Stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 h-full"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-5">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition duration-300"
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
};

export default Skills;
