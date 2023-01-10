import React, { EventHandler } from 'react';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';
import { PageInfo } from '../typings';
type Props = {
  pageInfo: PageInfo;
  handleClose: any;
};

const Modal = ({ pageInfo, handleClose }: Props) => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='w-screen h-screen px-10 absolute top-0 left-0 bg-[#1d1d1d]/20 backdrop-blur-xl flex items-center justify-center z-50'
    >
      <RxCross2
        onClick={handleClose}
        size={50}
        className='absolute right-6 top-6 z-100'
      />
      <p className='text-base font-helvetica'>
        {pageInfo?.backgroundInformation}
      </p>
    </motion.div>
  );
};

export default Modal;
