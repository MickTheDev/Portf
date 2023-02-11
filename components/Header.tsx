import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import 'hamburgers/dist/hamburgers.css';
import { Social } from '../typings';
import social from '../sanity/schemas/social';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
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
    <header className='fixed w-full top-0 p-5 z-30'>
      <div className='flex justify-between max-w-7xl mx-auto xl:items-center'>
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
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              bgColor='rgba(247, 171, 10, .8)'
              fgColor='black'
              style={{ height: 35, width: 35 }}
            />
          ))}
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
            className={`fixed top-0 right-[100%] bottom-0 w-full h-[100vh] flex flex-col justify-center items-center gap-[18px] text-center bg-[#1d1d1d] backdrop-blur-xl translate-x-0 transition-all md:transform-none md:flex-row md:bg-transparent md:w-auto md:h-[100%] md:static z-100 ${
              menuOpen ? 'translate-x-[100%]' : ''
            }`}
          >
            <div className='flex flex-col gap-6 w-fit relative md:flex-row md:items-center'>
              <Link href='#about'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='heroButton'
                >
                  About
                </button>
              </Link>
              <Link href='#skills'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='heroButton'
                >
                  Skills
                </button>
              </Link>
              <Link href='#projects'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='heroButton'
                >
                  Projects
                </button>
              </Link>
              <Link href='#contact'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='heroButton'
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
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
            className={`absolute right-4 top-2 cursor-pointer flex items-center text-3xl transition-all md:hidden`}
          >
            <button
              className={`hamburger hamburger--collapse ${
                !menuOpen ? '' : 'is-active'
              }`}
              type='button'
              onClick={menuToggleHandler}
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner bg'></span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
