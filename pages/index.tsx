import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-manditory overflow-scroll z-0">
      <Head>
        <title>Hayden Chalin</title>
      </Head>

      {/* Header  */}
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
