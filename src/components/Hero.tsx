import headshot from "../assets/headshot.png";
import FadeIn from "./FadeIn";

function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2">
      {/* Left Side */}
      <FadeIn>
  <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
          Full Stack Software Engineer
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
          Building software that is clean, scalable, and made for real people.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m Jennifer Cobb, a Full Stack Software Engineer focused on
          React, TypeScript, SQL, APIs, and building polished user experiences
          from idea to deployment.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            Contact Me
          </a>
       </div>
    </div>
</FadeIn>

      {/* Right Side */}
      <FadeIn delay={0.2}>
  <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-purple-200 blur-3xl"></div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
          <img
            src={headshot}
            alt="Jennifer Cobb"
            className="aspect-square w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Jennifer Cobb
            </h2>

            <p className="mt-2 text-slate-500">
              Full Stack Software Engineer
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "SQL",
                "Node.js",
                "Firebase",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

export default Hero;