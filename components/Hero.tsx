/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles, Controls } from '../components';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Guy-who-loves-Games.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt='Logo'
        className='relative rounded-full mx-auto object-cover overflow-hidden w-40 h-40 md:w-64 md:h-64'
      />
      <div className='z-20'>
        <h2 className='font-sourceCodePro font-semibold text-xl uppercase text-gray-300 mb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='font-helvetica font-semibold text-2xl lg:text-5xl md:px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#f2f2f2' />
        </h1>
      </div>
      <div className='hidden xl:block'>
        <Controls />
      </div>
    </div>
  );
};

export default Hero;
