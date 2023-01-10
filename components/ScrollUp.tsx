import React from 'react';
import Link from 'next/link';
import { BsArrowUpShort } from 'react-icons/bs';
import { motion } from 'framer-motion';

type Props = {};

const ScrollUp = (props: Props) => {
  return (
    <motion.div
      className='group flex items-center justify-center absolute bottom-4 right-4 w-10 h-10 md:w-14 md:h-14 border-[2px] border-[#f7ab0a] hover:bg rounded-lg hover:bg-[#f7ab0a]/10 transition ease-in-out duration-300'
      initial={{ x: -100, rotate: -60, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      <Link href='#hero'>
        <BsArrowUpShort
          size={50}
          className='hidden md:block group-hover:-translate-y-1 transition ease-in-out duration-300'
        />
        <BsArrowUpShort
          size={30}
          className='md:hidden group-hover:-translate-y-1 transition ease-in-out duration-300'
        />
      </Link>
    </motion.div>
  );
};

export default ScrollUp;
