import Image from "next/image";
import Intro from "./../components/Intro";
import SectionDivider from "../components/Section-divider";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <SectionDivider/>
      <About />
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact />
    </main>
  );
}
