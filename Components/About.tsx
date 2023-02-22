import React from 'react'
import Headshot from "../imgs/blkwhtportrait.jpg";
import Image from "next/image";


type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col md:flex-row relative text-center h-screen md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <Image
        src={Headshot}
        // Object-cover keeps the img from distorting if its large
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
    </div>
  )
}

export default About
