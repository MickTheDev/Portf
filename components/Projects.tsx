/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const Projects = ({}: Props) => {
  const projects: Array<number> = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] font-sourceCodePro font-semibold text-2xl text-gray-300'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 0.6 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              src='https://www.lastpass.com/-/media/11d4fe1f29ba4c4a8019e99ed01c72e4.svg?la=en&hash=4B12B35B1FF59549AB0246030C28DFA5'
              alt='project image'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                Ups clone
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                esse doloremque dolores minus eaque sunt quasi! Perferendis, sed
                sint culpa vero, blanditiis necessitatibus hic suscipit laborum
                in doloribus, voluptatem delectus.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-[10deg]'></div>
    </div>
  );
};

export default Projects;
