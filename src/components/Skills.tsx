import FadeIn from "./FadeIn";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={34} className="text-cyan-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={34} className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript size={34} className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={34} className="text-green-600" /> },
  { name: "SQL", icon: <SiPostgresql size={34} className="text-blue-500" /> },
  { name: "Firebase", icon: <SiFirebase size={34} className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={34} className="text-sky-500" /> },
  { name: "Git", icon: <FaGitAlt size={34} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={34} className="text-slate-800" /> },
  { name: "HTML5", icon: <FaHtml5 size={34} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={34} className="text-blue-500" /> },
  { name: "Vercel", icon: <SiVercel size={34} className="text-black" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Technologies & Tools
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
              >
                <div className="flex justify-center transition duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Skills;