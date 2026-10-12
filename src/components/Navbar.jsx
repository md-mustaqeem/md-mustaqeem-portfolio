import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-extrabold tracking-tight text-slate-900"
        >
          MD<span className="text-cyan-600">.</span> MUSTAQEEM
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(id)}
                className={`text-sm font-medium transition ${active === id ? "text-cyan-700" : "text-slate-600 hover:text-slate-950"}`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 md:flex"
        >
          Resume <ArrowUpRight size={16} />
        </a>
        <button
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-200 p-2 text-slate-800 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.href.slice(1));
                  setIsOpen(false);
                }}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${active === item.href.slice(1) ? "bg-cyan-50 text-cyan-700" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
