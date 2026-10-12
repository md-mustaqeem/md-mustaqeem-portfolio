import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";
const responsibilities = [
  "Developed REST APIs using Java, Spring Boot, Spring MVC, and Hibernate.",
  "Built responsive user interfaces using React.js, HTML5, CSS3, and Tailwind CSS.",
  "Implemented authentication and authorization flows using Spring Security and JWT.",
  "Integrated MySQL with Spring Data JPA and improved data access patterns.",
  "Used Git and GitHub for version control, bug fixes, and feature updates.",
];
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
const Experience = () => (
  <section
    id="experience"
    className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Where I've grown
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Work <span className="text-cyan-600">Experience</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Practical experience and training in building secure, responsive
          full-stack applications.
        </p>
      </div>
      <article className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            <BriefcaseBusiness size={27} />
          </div>
          <p className="mt-6 text-sm font-semibold text-cyan-700">
            DEC 2024 – MAY 2025
          </p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">
            Full Stack Developer Intern
          </h3>
          <p className="mt-2 text-lg font-semibold text-slate-700">
            JavaTpoint
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} /> Noida, India
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} /> 6-month internship
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-900">
            Key responsibilities
          </h4>
          <div className="mt-5 space-y-4">
            {responsibilities.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-cyan-600"
                  size={19}
                />
                <p className="leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 border-t border-slate-100 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Technologies used
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);
export default Experience;
