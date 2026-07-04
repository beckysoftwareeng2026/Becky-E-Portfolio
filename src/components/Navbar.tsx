import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-4">
          <Logo />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-950">
              Jennifer<span className="text-purple-600">.</span>
            </h1>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Software Engineer
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <li>
            <a href="#about" className="transition hover:text-purple-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="transition hover:text-purple-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-purple-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-purple-600">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/Jennifer-Cobb-Resume.pdf"
          className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;