import {
  Code2,
  Database,
  Server,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={30} />,
    title: "Frontend",
    desc: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap",
  },
  {
    icon: <Server size={30} />,
    title: "Backend",
    desc: "Java, Spring Boot, Spring Security, REST APIs, Hibernate",
  },
  {
    icon: <Database size={30} />,
    title: "Database",
    desc: "MySQL, PostgreSQL, MongoDB",
  },
  {
    icon: <MonitorSmartphone size={30} />,
    title: "Cloud & Tools",
    desc: "Git, GitHub, Docker, AWS, Postman",
  },
];

const stats = [
  {
    value: "6+",
    label: "Projects",
  },
  {
    value: "6",
    label: "Months Internship",
  },
  {
    value: "8.35",
    label: "CGPA",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6 scroll-mt-1"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">
            Passionate Full Stack
            <span className="text-cyan-400"> Developer</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            I build scalable, secure and modern web applications using Java,
            Spring Boot, React and cloud technologies while focusing on
            performance and user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold mb-2">
              Java Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I'm a Computer Science undergraduate with internship experience in
              Java Full Stack Development. I enjoy building secure REST APIs,
              responsive React applications, authentication systems and scalable
              backend services.
            </p>

            <p className="text-gray-400 leading-8">
              Currently improving my skills in System Design, Microservices,
              Cloud Computing, DevOps and Data Structures to build enterprise
              applications.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-45 ">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500 hover:-translate-y-2 transition duration-300"
                >
                  <h3 className="text-4xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="text-gray-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>

                <p className="text-gray-400 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
