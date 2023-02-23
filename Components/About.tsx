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
          className=" rounded-full -mb-20 lg:mb-0 md:rounded-lg  w-36 h-36 md:w-64 md:h-95 object-cover  xl:w-[500px] xl:h-[600px] "
          />
      </motion.div>

      {/* no spaces btw md: and px  */}
      <div className="space-y-10 px-0 mt-40 md:px-10 h-[450px]   overflow-scroll">
        <h4 className="text-4xl font-simibold">
          Here is a <span className="underline decoration-[#474790]/50">little</span> background
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quia
          exercitationem! Quibusdam provident cumque magni. Officiis non nemo
          assumenda praesentium architecto quis debitis, provident, dolorem
          quidem voluptas quibusdam esse suscipit! Aperiam porro cumque officiis
          ex quod ducimus facilis vitae eveniet maiores ad consequuntur, vel at
          sint officia sequi quisquam saepe itaque voluptatibus animi hic! Aut
          reprehenderit magni inventore voluptate iusto? Sed deserunt modi earum
          eveniet architecto cum, blanditiis veniam. Tempora incidunt eius
          aliquam minima aspernatur voluptatibus a porro sapiente consectetur
          eveniet, non rerum id, alias assumenda eos numquam impedit
          perspiciatis. Totam vel, est repellat iure ad cumque quisquam
          provident ullam repellendus possimus quidem impedit ex dolores alias
          corrupti modi excepturi beatae placeat tempore, architecto deleniti
          perferendis, aperiam illo! Dolorum, assumenda.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;
