import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImg from '../public/heroImg.png';
type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] font-sourceCodePro font-semibold text-2xl text-gray-300'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src={heroImg.src}
        alt='Logo'
        className='mt-16 -mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10 max-w-xl'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='text-[#f7ab0a]'>little</span> background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          nesciunt perferendis non reiciendis quod, vero doloribus! Maiores,
          vitae.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
