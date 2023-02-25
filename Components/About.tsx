import React from "react";
import Headshot from "../imgs/blkwhtportrait.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      {/* Note: Do Not use simicolons in tailwind */}
      {/* This is the image */}

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }} // it will only slide into view once
        transition={{ duration: 1.2 }}
        className="-mb-20 lg:mb-0 rounded-full md:rounded-lg flex-shrink-0 object-cover  mt-40 "
      >
        <Image
          src={Headshot}
          // Object-cover keeps the img from distorting if its large
          // the sizing starts with 'small(mobile) and works it way up to xl scree sizes'
          className=" rounded-full -mb-20 lg:mb-0 md:rounded-lg  w-36 h-36 md:w-[250px] md:h-[350px] object-cover  xl:w-[500px] xl:h-[600px] "
          alt=""
        />
      </motion.div>

      {/* no spaces btw md: and px  */}
      <div className="space-y-10 px-0 mt-40 md:px-10 h-[450px]   overflow-scroll">
        <h4 className="text-4xl font-simibold">
          Here is a{" "}
          <span className="underline decoration-[#474790]/50">little</span>{" "}
          background
        </h4>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1.2 }}
          className="text-base"
        >
          My name is Hayden Chalin and I am a Full Stack Software Engineer with
          a passion for using technology to solve real-world problems.
          <br />
          <br />
          Before embarking on my career in tech, I spent five years in the US
          Marine Corps, where I gained invaluable life experiences that have
          shaped me in profound ways. Through my service, I learned the values
          of discipline, adaptability, and teamwork, which I have carried with
          me throughout my career.
          <br />
          <br />
          After completing my service, I attended Fullstack Academy's intensive
          coding bootcamp, where I honed my technical skills in Node.js,
          React/Redux, Git, and Express. Since then, I have worked on a variety
          of web development projects, ranging from e-commerce platforms to real
          estate management systems. What motivates me as a Full Stack Software
          Engineer is the opportunity to create meaningful solutions that make a
          difference in people's lives.
          <br />
          <br />
          I am passionate about using my skills and expertise to develop
          high-quality software applications that improve the lives of those who use them.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;
