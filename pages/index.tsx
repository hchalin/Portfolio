import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Head from "next/head";
import Image from "next/image";
import About from "@/Components/About";
import WorkExperience from "@/Components/WorkExperience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import ContactMe from "@/Components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-manditory overflow-scroll z-0">
      <Head>
        <title>Hayden Chalin</title>
        <link rel="icon" href="/favicon.png" type="image/png"/>
      </Head>

      {/* Header  */}
      <Header />
      {/* snap-...(start, center, end) sets 'snap anchor points' */}
      <section id="hero" className="snap-start scoll-smooth">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className="snap-center scroll-smooth" >
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start scroll-smooth">
          <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start scroll-smooth">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="projects" className="snap-start scroll-smooth">
        <ContactMe />
      </section>
    </div>
  );
}
