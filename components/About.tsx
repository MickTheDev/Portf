import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Modal } from '.';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  size: any;
  pageInfo: PageInfo;
};

const About = ({ pageInfo, size }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (size.width) {
      if (size.width > 768) setModalOpen(false);
    }
  }, [size]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

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
      <h3 className='absolute top-20 uppercase tracking-[20px] font-helvetica font-semibold text-2xl text-gray-300 pl-4'>
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
        src={urlFor(pageInfo?.profilePic).url()}
        alt='Logo'
        className='mt-16 -mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10 max-w-xl'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='text-[#f7ab0a]'>little</span> background
        </h4>

        <div className='hidden md:block'>
          <p className='text-base'>{pageInfo?.backgroundInformation}</p>
        </div>
        <div className='md:hidden'>
          <p className='text-base'>
            Hi, my name is Michael and I am a frontend developer with a strong
            interest in React and Tailwind...
          </p>
        </div>
        <button
          onClick={handleOpen}
          className='rounded-xl px-4 py-2 border-2 md:hidden'
        >
          See more...
        </button>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            data={pageInfo.backgroundInformation}
            handleClose={handleClose}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default About;
