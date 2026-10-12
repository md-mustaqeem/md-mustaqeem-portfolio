import { GraduationCap, CalendarDays, Award, MapPin } from "lucide-react";
const education = [
  {
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Engineering",
    college: "Maulana Azad National Urdu University",
    location: "Hyderabad, India",
    duration: "July 2023 – May 2026",
    cgpa: "8.35 / 10",
  },
  {
    degree: "Diploma",
    specialization: "Computer Science & Engineering",
    college: "Jamia Millia Islamia",
    location: "New Delhi, India",
    duration: "January 2019 – March 2022",
    cgpa: "7.78 / 10",
  },
];
const Education = () => (
  <section
    id="education"
    className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Academic background
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          My <span className="text-cyan-600">Education</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          My academic journey and the foundation behind my software development
          skills.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.college}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <GraduationCap size={25} />
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700">
                CGPA {item.cgpa}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-black text-slate-950">
              {item.degree}
            </h3>
            <p className="mt-2 font-semibold text-cyan-700">
              {item.specialization}
            </p>
            <p className="mt-4 text-lg font-semibold text-slate-800">
              {item.college}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              {item.location}
            </p>
            <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-medium text-slate-600">
              <CalendarDays size={17} className="text-cyan-700" />
              {item.duration}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default Education;
