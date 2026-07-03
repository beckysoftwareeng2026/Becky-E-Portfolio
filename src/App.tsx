import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Projects() {
  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-4 text-slate-600">Projects will be added soon.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
