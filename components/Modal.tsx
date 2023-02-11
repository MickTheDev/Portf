import React, { EventHandler } from 'react';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

type Props = {
  data: string;
  handleClose: any;
};

const Modal = ({ data, handleClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='w-screen h-screen px-10 fixed top-0 left-0 bg-[#1d1d1d] flex items-center justify-center z-[120]'
    >
      <p className='text-base font-helvetica'>
        {' '}
        <RxCross2
          onClick={handleClose}
          size={50}
          className=''
        />
        {data}
      </p>
    </motion.div>
  );
};

export default Modal;
