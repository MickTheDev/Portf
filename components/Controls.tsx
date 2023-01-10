import React from 'react';
import { BsArrowDownSquare, BsArrowUpSquare } from 'react-icons/bs';

type Props = {};

const Controls = ({}: Props) => {
  return (
    <div className='absolute right-48 bottom-24 flex items-center justify-center gap-4 animate-[wiggle_2.5s_ease-in-out_infinite]'>
      <span className='uppercase font-helvetica tracking-widest'>Control</span>
      <div className='flex flex-col gap-3'>
        <BsArrowUpSquare size={45} />
        <BsArrowDownSquare size={45} />
      </div>
    </div>
  );
};

export default Controls;
