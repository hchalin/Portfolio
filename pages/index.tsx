import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Head from "next/head";
import Image from "next/image";
import About from "@/Components/About";
import WorkExperience from "@/Components/WorkExperience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import ContactMe from "@/Components/ContactMe";
import getSocials from "./api/getSocials";
import Link from "next/link";
import Headshot from '../imgs/blkwhtportrait.jpg'
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

 export default function Home({pageInfo, experience,skills,projects,socials}: Props) {

  console.log(pageInfo)


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-manditory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#474790]/80">
      <Head>
        <title>Hayden Chalin</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
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
      <section id="experience" className="snap-center scroll-smooth">
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
      <section id="contact" className="snap-start scroll-smooth">
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
          <Image
        src={Headshot}
        // Object-cover keeps the img from distorting if its large
        className="relative rounded-full h-10 w-10 mx-auto object-cover"
        alt=""
      />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps:GetStaticProps<Props>  = async (params:type) => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experience: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()
  const projects: Project[] = await fetchProjects()


  return {
    props: {
      pageInfo,
      experience,
      skills,
      socials,
      projects
    }
  }
}
