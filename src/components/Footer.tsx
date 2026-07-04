import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Logo />

        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
          Jennifer<span className="text-purple-600">.</span>
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Full Stack Software Engineer
        </p>

        <div className="mt-6 h-px w-20 bg-slate-200"></div>

        <p className="mt-6 text-lg font-medium italic text-slate-700">
          Always learning. Always building.
        </p>

        <p className="mt-6 text-sm text-slate-500">
          Designed &amp; developed with React, TypeScript &amp; Tailwind CSS
        </p>

        <p className="mt-2 text-sm text-slate-400">
          © 2026 Jennifer Cobb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;