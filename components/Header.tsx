import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import 'hamburgers/dist/hamburgers.css';

type Props = {};

const Header = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width) {
      if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
      }
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

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
        <div
          className={`fixed top-0 right-[100%] bottom-0 w-full h-[100vh] flex flex-col justify-center items-center gap-[18px] text-center bg-dark/90 backdrop-blur-sm translate-x-0 transition-all md:transform-none md:flex-row md:bg-transparent md:w-auto md:h-[100%] md:static ${
            menuOpen ? 'translate-x-[100%]' : ''
          }`}
        >
          <div className='flex flex-col mb-8 w-fit relative md:flex-row md:items-center md:mb-0'>
            <Link
              href='#about'
              className='.navLink'
            >
              <button className='heroButton'>About</button>
            </Link>
            <Link
              href='#experience'
              className='.navLink'
            >
              <button className='heroButton'>Experience</button>
            </Link>
            <Link
              href='#skills'
              className='.navLink'
            >
              <button className='heroButton'>Skills</button>
            </Link>
            <Link
              href='#projects'
              className='.navLink'
            >
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
          <div
            className={`${
              menuOpen ? 'fixed righ-6' : ''
            } cursor-pointer flex items-center text-3xl transition-all relative hover:text-primary md:hidden`}
          >
            <button
              className={`hamburger hamburger--collapse  ${
                !menuOpen ? '' : 'is-active'
              }`}
              type='button'
              onClick={menuToggleHandler}
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
