import React from 'react';
import Link from 'next/link';
import { BsArrowUpShort } from 'react-icons/bs';

type Props = {};

const ScrollUp = (props: Props) => {
  return (
    <Link
      href='#hero'
      className='group flex items-center justify-center absolute bottom-4 right-4 w-14 h-14 border-[2px] border-[#f7ab0a] hover:bg rounded-lg hover:bg-[#f7ab0a]/10 transition ease-in-out duration-300'
    >
      <BsArrowUpShort
        size={50}
        className='group-hover:-translate-y-1 transition ease-in-out duration-300'
      />
    </Link>
  );
};

export default ScrollUp;
