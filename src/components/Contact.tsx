
import FadeIn from "./FadeIn";function Contact() {
  return (
    <section id="contact" className="py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
          Let&apos;s build something great.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m currently seeking junior software engineering and full stack
          developer opportunities. I&apos;d love to connect about roles,
          projects, or collaboration.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jennifercobb829@gmail.com"
            className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/beckysoftwareeng2026"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            GitHub
          </a>

          <a
            href="#"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </FadeIn>
    </section>
  );
}

export default Contact;