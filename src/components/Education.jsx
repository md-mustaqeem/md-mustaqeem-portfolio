import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science & Engineering",
    college: "Maulana Azad National Urdu University",
    location: "Hyderabad, India",
    duration: "July 2023 – May 2026",
    cgpa: "8.35 / 10",
    color: "from-cyan-500 to-blue-500",
  },
  {
    degree: "Diploma",
    specialization: "Computer Science & Engineering",
    college: "Jamia Millia Islamia",
    location: "New Delhi, India",
    duration: "January 2019 – March 2022",
    cgpa: "7.78 / 10",
    color: "from-emerald-500 to-cyan-500",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-20 px-6 scroll-mt-1"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            My academic journey that built a strong foundation in Computer
            Science and Software Engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent rounded-full"></div>

          {education.map((item, index) => (
            <div key={index} className="relative flex gap-8 mb-10">
              {/* Timeline Circle */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <GraduationCap size={28} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  {/* Left */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>

                    <p className="text-cyan-400 text-lg mb-5">
                      {item.specialization}
                    </p>

                    <h4 className="text-xl font-semibold mb-4">
                      {item.college}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={18} />
                      {item.location}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-xl">
                      <Calendar className="text-cyan-400" size={20} />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-xl">
                      <Award className="text-yellow-400" size={20} />
                      <span>
                        CGPA <strong>{item.cgpa}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
