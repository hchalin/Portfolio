import React from "react";
import Image from "next/image";
import Headshot from "../imgs/blkwhtportrait.jpg";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Head from "next/head";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
  pageInfo: PageInfo
};

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo.name.slice(0,6)}`,
      "<AGuyWhoLovesToCode />",
      "<SuperGoodEnoughClimber />",
      "<Fullstack Dev />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  



  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={'128'}
        height={'128'}
        src={urlFor(pageInfo?.heroImage).url()}
        // Object-cover keeps the img from distorting if its large
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-small uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-simibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#474790" />
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="heroBtn">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
