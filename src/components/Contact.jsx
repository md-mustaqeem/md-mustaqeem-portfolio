import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowUpRight, Send } from "lucide-react";
const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Get in touch
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Let's work <span className="text-cyan-600">together.</span>
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          I'm interested in Software Engineer and Java Full Stack Developer
          opportunities. Send me a message or connect through my social
          profiles.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
          <h3 className="text-2xl font-bold">Contact information</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Have a role, project, or idea in mind? I'd be happy to hear from
            you.
          </p>
          <div className="mt-8 space-y-5">
            <a
              href="mailto:mdmustaqeem970@gmail.com"
              className="flex items-center gap-4"
            >
              <span className="rounded-xl bg-white/10 p-3 text-cyan-300">
                <FaEnvelope size={20} />
              </span>
              <span>
                <span className="block text-xs text-slate-400">Email me</span>
                <span className="mt-1 block break-all font-medium">
                  mdmustaqeem970@gmail.com
                </span>
              </span>
            </a>
            <a href="tel:+919661213047" className="flex items-center gap-4">
              <span className="rounded-xl bg-white/10 p-3 text-cyan-300">
                <FaPhone size={20} />
              </span>
              <span>
                <span className="block text-xs text-slate-400">Call me</span>
                <span className="mt-1 block font-medium">+91 96612 13047</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="rounded-xl bg-white/10 p-3 text-cyan-300">
                <FaMapMarkerAlt size={20} />
              </span>
              <span>
                <span className="block text-xs text-slate-400">Based in</span>
                <span className="mt-1 block font-medium">Hyderabad, India</span>
              </span>
            </div>
          </div>
          <div className="mt-9 flex gap-3 border-t border-white/10 pt-7">
            <a
              aria-label="GitHub"
              href="https://github.com/md-mustaqeem"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 p-3 transition hover:bg-cyan-600"
            >
              <FaGithub size={20} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/md9661/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 p-3 transition hover:bg-cyan-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              aria-label="LeetCode"
              href="https://leetcode.com/progress/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 p-3 transition hover:bg-cyan-600"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(data.get("subject"));
            const body = encodeURIComponent(`Name: ${data.get("name")}
Email: ${data.get("email")}

${data.get("message")}`);
            window.location.href = `mailto:mdmustaqeem970@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              placeholder="What would you like to discuss?"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-bold text-white transition hover:bg-cyan-700 sm:w-auto"
          >
            Send message <Send size={17} />
          </button>
          <p className="mt-3 text-xs text-slate-500">
            This form opens your default email application with your message
            ready to send.
          </p>
        </form>
      </div>
    </div>
  </section>
);
export default Contact;
