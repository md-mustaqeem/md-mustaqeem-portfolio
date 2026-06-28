import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Md Mustaqeem
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item) => {
            const id = item.href.replace("#", "");

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActive(id)}
                  className={`relative transition duration-300 ${
                    active === id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}

                  {active === id && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-cyan-400 rounded-full"></span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-6">
          <ul className="space-y-4">
            {navLinks.map((item) => {
              const id = item.href.replace("#", "");

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActive(id);
                      setIsOpen(false);
                    }}
                    className={`block transition ${
                      active === id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cyan-500 text-center text-white py-2 rounded-lg mt-4"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
