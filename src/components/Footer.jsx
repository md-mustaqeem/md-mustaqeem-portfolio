import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">MD MUSTAQEEM</h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Java Full Stack Developer passionate about building scalable,
              secure, and user-friendly web applications using Java, Spring
              Boot, React.js, and modern technologies.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/md-mustaqeem"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="//www.linkedin.com/in/md9661/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:mdmustaqeem970@gmail.com"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 flex items-center gap-2 text-center">
            © {currentYear} MD MUSTAQEEM. Made with
            <FaHeart
              size={18}
              className="text-red-500"
              style={{ fill: "currentColor" }}
            />
            using React, JavaScript & Tailwind CSS.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition"
          >
            <FaArrowUp size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
