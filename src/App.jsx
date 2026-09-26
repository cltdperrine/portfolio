import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Header />
      <main
        id="top"
        className="min-h-screen bg-cream dark:bg-ink text-ink dark:text-cream transition-colors"
      >
        <Hero />
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

export default App;
