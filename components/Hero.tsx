import React from 'react';
import Image from 'next/image';
import heroImg from '../public/heroImg.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles, Controls } from '../components';
import Link from 'next/link';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Michael",
      'Guy-who-loves-Games.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        priority={true}
        src={heroImg}
        alt='Logo'
        width={144}
        height={144}
        className='relative rounded-full mx-auto object-cover overflow-hidden w-40 h-40 md:w-64 md:h-64'
      />
      <div className='z-20'>
        <h2 className='font-sourceCodePro font-semibold text-xl uppercase text-gray-300 mb-2 tracking-[15px]'>
          Frontend Developer
        </h2>
        <h1 className='font-sourceCodePro font-semibold text-2xl lg:text-5xl md:px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#f2f2f2' />
        </h1>

        {/* <div className='mt-4 flex flex-wrap items-center justify-center gap-1'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div> */}
      </div>
      <div className='hidden xl:block'>
        <Controls />
      </div>
    </div>
  );
};

export default Hero;
