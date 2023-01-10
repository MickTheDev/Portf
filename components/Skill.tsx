import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directonLeft?: boolean;
};

const Skill = ({ directonLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{
        x: directonLeft ? -100 : 100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className='relative flex flex-col items-center justify-center cursor-pointer'
    >
      <motion.img
        src={urlFor(skill?.image).url()}
        alt='skill'
        className='object-cover w-[5rem] h-[5rem] md:w-28 md:h-28 xl:w-32 xl:h-32 filter hover:grayscale transition duration-300 ease-in-out'
      />
      <div className=''>
        <p className='text-base md:text-xl font-semibold text-white opacity-100 font-helvetica'>
          {skill?.progress}
        </p>
      </div>
    </motion.div>
  );
};

export default Skill;
