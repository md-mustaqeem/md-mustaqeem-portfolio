import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const technologies = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React.js",
  "Hibernate",
  "REST APIs",
  "JWT",
  "MySQL",
  "Git",
  "GitHub",
  "Postman",
];

const responsibilities = [
  "Developed scalable REST APIs using Java, Spring Boot, Spring MVC and Hibernate.",
  "Built responsive user interfaces using React.js, HTML5, CSS3 and Tailwind CSS.",
  "Implemented secure authentication using Spring Security and JWT.",
  "Integrated MySQL with Spring Data JPA and optimized database queries.",
  "Collaborated using Git & GitHub while fixing bugs and delivering new features.",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-20 px-6 scroll-mt-1"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Professional experience building secure and scalable Full Stack
            applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent rounded-full"></div>

          <div className="relative flex gap-8">
            {/* Timeline Circle */}
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <Briefcase size={28} />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-500">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-4">
                <div>
                  <h3 className="text-3xl font-bold">
                    Full Stack Developer Intern
                  </h3>

                  <p className="text-cyan-400 text-lg mt-2">JavaTpoint</p>
                </div>

                <div className="flex flex-col gap-3 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    Dec 2024 – May 2025
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    Noida, India
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-5">
                {responsibilities.map((item) => (
                  <div key={item} className="flex gap-4">
                    <CheckCircle2
                      className="text-cyan-400 mt-1 flex-shrink-0"
                      size={20}
                    />

                    <p className="text-gray-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800 my-4"></div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-5">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800 text-cyan-300 text-sm hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
