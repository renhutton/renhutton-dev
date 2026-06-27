import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
