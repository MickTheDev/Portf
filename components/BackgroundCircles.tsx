import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#d3d3d3] rounded-full h-[200px] w-[200px] mt-56 md:mt-80 animate-ping' />
      <div className='absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-56 md:mt-80' />
      <div className='absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-56 md:mt-80' />
      <div className='absolute border border-[#f7ab0a] rounded-full opacity-20 h-[650px] w-[650px] mt-52 md:mt-80 animate-pulse' />
      <div className='absolute border border-[#333] rounded-full h-[800px] w-[800px] mt-56 md:mt-80' />
    </motion.div>
  );
};

export default BackgroundCircles;
