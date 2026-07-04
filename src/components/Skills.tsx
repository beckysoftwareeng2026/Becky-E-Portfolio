import FadeIn from "./FadeIn";
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "SQL",
  "Firebase",
  "REST APIs",
  "Git",
  "GitHub",
  "HTML5",
  "CSS3",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <FadeIn>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
          Technical Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-950">
          Technologies I work with
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-lg font-semibold shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
    </section>
  );
}

export default Skills;