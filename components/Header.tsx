import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* social icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row gap-4 items-center'
      >
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url='https://github.com/MickTheDev'
        />
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url='https://discord.com/users/484797560523849760'
        />
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url='https://www.linkedin.com/in/michał-siewierski'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          style={{ height: 50, width: 50 }}
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
