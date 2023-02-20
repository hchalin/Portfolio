import React from "react";
import Image from "next/image";
import Headshot from '../imgs/Headshot.jpg'

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Head from "next/head";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Hayden ", "<Climber />", "<Coder />", "<Fullstack Dev />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image src={Headshot} width='200' height='200' loading="lazy"/>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#474790" />
      </h1>
    </div>
  );
}

export default Hero;
