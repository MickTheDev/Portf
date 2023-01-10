import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '.';
import { Skill as SkillType } from '../typings';
import skill from '../sanity/schemas/skill';
type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] font-helvetica font-semibold text-2xl text-gray-300 pl-4'>
        Skills
      </h3>

      <div className='pt-32 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
          />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            directonLeft
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
