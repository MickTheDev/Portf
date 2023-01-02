import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '.';
type Props = {};

const Skills = ({}: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] font-sourceCodePro font-semibold text-2xl text-gray-300 pl-4'>
        Skills
      </h3>

      <h3 className='font-sourceCodePro font-semibold absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='pt-32 grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
