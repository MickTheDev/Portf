import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directonLeft?: boolean;
};

const Skill = ({ directonLeft }: Props) => {
  return (
    <motion.div
      initial={{
        x: directonLeft ? -50 : 50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='group relative flex cursor-pointer'
    >
      <motion.img
        src='https://ih1.redbubble.net/image.1085917622.8337/st,small,507x507-pad,600x600,f8f8f8.jpg'
        alt='skill'
        className='rounded-full border border-gray-500 object-cover w-[5rem] h-[5rem] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white group-hover:bgwhite h-[5rem] w-[5rem] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-semibold text-black opacity-100 '>100%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
