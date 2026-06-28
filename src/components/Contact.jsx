import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-5xl mx-auto">
            I'm currently looking for Software Engineer and Java Full Stack
            Developer opportunities. Feel free to connect with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaEnvelope className="text-cyan-400" size={28} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">mdmustaqeem970@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaPhone className="text-cyan-400" size={28} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+91 96612 13047</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl">
              <FaMapMarkerAlt className="text-cyan-400" size={28} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Hyderabad, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/md-mustaqeem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/md9661/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://leetcode.com/progress/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-slate-800 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-700 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-700 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-700 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-slate-700 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <FiSend size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
