import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 max-w-7xl">
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

        <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition duration-300 hover:text-purple-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#resume"
          className="hidden rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg lg:inline-flex"
        >
          View Resume
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-full border border-slate-300 px-4 py-2 text-lg font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600 lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition hover:text-purple-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-purple-600 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;