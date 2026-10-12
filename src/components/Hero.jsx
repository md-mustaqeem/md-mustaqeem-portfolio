import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden bg-white px-5 pb-20 pt-30 sm:pt-30 lg:px-8 lg:pb-28"
  >
    <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />
    <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
          Hello, I'm
        </p>
        <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          MD <span className="text-cyan-600">MUSTAQEEM</span>
        </h1>
        <div className="mt-5 min-h-10 text-2xl font-bold text-slate-700 sm:text-3xl">
          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2200,
              "Spring Boot Developer",
              2200,
              "React Developer",
              2200,
              "Software Engineer",
              2200,
            ]}
            speed={45}
            repeat={Infinity}
          />
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          I build reliable, secure, and user-friendly web applications with
          Java, Spring Boot, React.js, MySQL, and REST APIs. I enjoy turning
          practical problems into thoughtful software experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/md.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-cyan-700"
          >
            <Download size={18} /> View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            Let's Connect <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="mt-9 flex items-center gap-3">
          <span className="mr-2 text-sm font-medium text-slate-500">
            Find me on
          </span>
          <a
            aria-label="GitHub"
            href="https://github.com/md-mustaqeem"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaGithub size={19} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/md9661/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaLinkedin size={19} />
          </a>
          <a
            aria-label="Email"
            href="mailto:mdmustaqeem970@gmail.com"
            className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaEnvelope size={19} />
          </a>
        </div>
        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-700"
        >
          Scroll to explore <ArrowDownRight size={17} />
        </a>
      </div>
      <div className="mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative mx-auto max-w-[390px]">
          <div className="absolute -inset-4 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-200 to-blue-100" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-100 p-3 shadow-2xl shadow-slate-900/10">
            <img
              src="/profile7.jpeg"
              alt="MD Mustaqeem"
              className="h-[390px] w-full rounded-[1.7rem] object-cover object-center sm:h-[440px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-7 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Education
            </p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              8.35
              <span className="ml-1 text-sm font-semibold text-slate-500">
                / 10 CGPA
              </span>
            </p>
          </div>
          <div className="absolute -right-3 top-8 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:-right-7">
            <p className="text-sm font-bold text-slate-900">Full Stack</p>
            <p className="text-xs text-slate-500">Java · React · SQL</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
