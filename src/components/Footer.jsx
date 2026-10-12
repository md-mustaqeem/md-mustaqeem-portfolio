import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { ArrowUpRight, ArrowUp } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50 px-5 py-10 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-slate-950"
          >
            MD<span className="text-cyan-600">.</span> MUSTAQEEM
          </a>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Java Full Stack Developer building useful, secure, and user-friendly
            web applications.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            aria-label="GitHub"
            href="https://github.com/md-mustaqeem"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaGithub size={19} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/md9661/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaLinkedin size={19} />
          </a>
          <a
            aria-label="Email"
            href="mailto:mdmustaqeem970@gmail.com"
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <FaEnvelope size={19} />
          </a>
          <a
            aria-label="Back to top"
            href="#home"
            className="rounded-full bg-slate-900 p-3 text-white transition hover:bg-cyan-700"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} MD MUSTAQEEM. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <FaHeart className="text-rose-500" /> React & Tailwind CSS
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {["Home", "About", "Skills", "Projects", "Contact"].map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="transition hover:text-cyan-700"
            >
              {name}
            </a>
          ))}
          <a
            href="https://github.com/md-mustaqeem?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-cyan-700"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
