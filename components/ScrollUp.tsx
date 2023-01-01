import React from 'react';
import Link from 'next/link';
import { BsArrowUpShort } from 'react-icons/bs';
type Props = {};

const ScrollUp = (props: Props) => {
  return (
    <Link
      href='#hero'
      className='flex items-center justify-center absolute bottom-4 right-4 border w-10 h-10 border-[#f7ab0a] hover:bg'
    >
      <BsArrowUpShort size={50} />
    </Link>
  );
};

export default ScrollUp;
