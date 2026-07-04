import FadeIn from "./FadeIn";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            My Story
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            I enjoy building software that solves real problems.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            I'm a Full Stack Software Engineer with a passion for creating
            responsive, user-focused applications using React, TypeScript,
            JavaScript, SQL, Firebase, and REST APIs.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I enjoy learning new technologies, improving my problem-solving
            skills, and building projects that demonstrate clean architecture,
            scalability, and thoughtful user experience. My goal is to join a
            collaborative engineering team where I can continue growing while
            contributing to meaningful software.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

export default About;