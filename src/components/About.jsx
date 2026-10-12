import { Code2, Database, Server, Cloud, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Java, Spring Boot, Spring Security, REST APIs",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "MySQL, PostgreSQL, MongoDB, Redis",
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    desc: "AWS, Docker, Git, GitHub, Postman",
  },
];
const stats = [
  { value: "6+", label: "Projects" },
  { value: "6 mo.", label: "Internship" },
  { value: "8.35", label: "B.Tech CGPA" },
];

const About = () => (
  <section
    id="about"
    className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          A little about me
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Building useful things,{" "}
          <span className="text-cyan-600">one line at a time.</span>
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A software developer focused on building thoughtful digital products
          with clean interfaces and dependable backend systems.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Java Full Stack Developer
          </h3>
          <p className="mt-4 leading-8 text-slate-600">
            I'm a Computer Science graduate with hands-on training and project
            experience in Java Full Stack Development. I enjoy creating secure
            REST APIs, responsive React applications, authentication flows, and
            database-backed services.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            I'm continuing to strengthen my skills in system design,
            microservices, cloud computing, DevOps, and data structures while
            building applications that solve real problems.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <p className="text-2xl font-black text-cyan-700 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#experience"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-900"
          >
            Explore my experience <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                <Icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{title}</h4>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default About;
