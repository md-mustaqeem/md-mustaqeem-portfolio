import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-5xl mb-3 mt-2">Hello, I'm</p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            MD <span className="text-cyan-400">MUSTAQEEM</span>
          </h1>

          <div className="text-2xl lg:text-3xl font-semibold text-gray-300 mt-5 h-14">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                3000,
                "Spring Boot Developer",
                3000,
                "React Developer",
                3000,
                "Software Engineer",
                3000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-2 text-gray-400 leading-8 max-w-xl">
            Computer Science undergraduate with internship experience building
            scalable web applications using Java, Spring Boot, React.js, MySQL,
            and REST APIs. Passionate about solving real-world problems and
            developing secure, user-focused software.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <FaDownload size={18} />
              Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-500 transition"
            >
              Contact Me
              <FaArrowRight size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/md-mustaqeem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="//www.linkedin.com/in/md9661/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="mailto:mdmustaqeem970@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-full">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src="/profile7.jpeg"
              alt="Profile"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-cyan-400 object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
