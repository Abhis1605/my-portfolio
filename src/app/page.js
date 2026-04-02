
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects  />
    </div>
  );
}
