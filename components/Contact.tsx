/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import {
  BsArrowRightShort,
  BsReply,
  BsWhatsapp,
  BsLinkedin,
} from 'react-icons/bs';
import { ContactType } from '../typings';

type Props = {
  contact: ContactType;
};

const Contact = ({ contact }: Props) => {
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden max-w-7xl mx-auto'>
      <h3 className='absolute top-20 uppercase tracking-[20px] font-helvetica font-semibold text-2xl text-gray-300 pl-4'>
        Contact
      </h3>

      <div className='w-full flex flex-col md:flex-row justify-center items-start gap-12 pt-32 md:px-10'>
        <div className='flex-col justify-center items-center w-screen px-10 md:px-0 md:w-[300px] relative hidden md:flex'>
          <h3 className='text-center font-helvetica mb-6 text-3xl font-semibold'>
            {contact.header2}
          </h3>

          <div className='w-full flex flex-col justify-center items-center gap-6'>
            <div className='contactCard'>
              <BsReply
                size={30}
                className='contactCardIcon mb-4'
              />
              <h3 className='font-semibold'>{contact.mail}</h3>
              <span className='text-[#fff]/60 mb-2'>{contact.mailValue}</span>

              <a
                href='mailto:siewierskimichal1@gmail.com'
                className='flex flex-row justify-center items-center text-[#fff]/60 group'
              >
                {contact.header1}{' '}
                <BsArrowRightShort
                  size={30}
                  className='contactCardIcon group-hover:translate-x-[5px] transition-all'
                />
              </a>
            </div>

            <div className='contactCard'>
              <BsLinkedin
                size={30}
                className='contactCardIcon mb-4'
              />
              <h3 className='font-semibold'>{contact.linkedin}</h3>
              <span className='text-[#fff]/60 mb-2'>
                {contact.linkedinValue}
              </span>

              <Link
                href='https://www.linkedin.com/in/micha%C5%82-siewierski/'
                className='flex flex-row justify-center items-center text-[#fff]/60 group'
              >
                {contact.header1}{' '}
                <BsArrowRightShort
                  size={30}
                  className='contactCardIcon group-hover:translate-x-[5px] transition-all'
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-screen px-10 md:px-0 md:w-[auto] relative'>
          <h3 className='text-center font-helvetica mb-6 text-3xl font-semibold'>
            {contact.header1}
          </h3>

          <form
            className='flex flex-col gap-8 w-screen px-10 md:px-0 md:w-[400px]'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='relative h-16'>
              <label className='absolute -top-3 left-5 p-1 bg-[#1d1d1d] z-50 text-[#f2f2f2]/80'>
                Name
              </label>
              <input
                type='text'
                name='name'
                placeholder={contact.nameHeading}
                className='absolute top-0 left-0 w-full h-full outline-none border-2 border-[#f2f2f2]/80 bg-transparent rounded-xl p-6 z-20'
                autoComplete='off'
              />
            </div>

            <div className='relative h-16'>
              <label className='absolute -top-3 left-5 p-1 bg-[#1d1d1d] z-50 text-[#f2f2f2]/80'>
                Mail
              </label>
              <input
                type='email'
                name='email'
                placeholder={contact.emailHeading}
                className='absolute top-0 left-0 w-full h-full outline-none border-2 border-[#f2f2f2]/80 bg-transparent rounded-xl p-6 z-20'
                autoComplete='off'
              />
            </div>

            <div className='relative h-[11rem]'>
              <label className='absolute -top-3 left-5 p-1 bg-[#1d1d1d] z-50 text-[#f2f2f2]/80'>
                Project
              </label>
              <textarea
                name='project'
                cols={30}
                rows={10}
                placeholder={contact.projectHeading}
                className='absolute top-0 left-0 w-full h-full outline-none border-2 border-[#f2f2f2]/80 bg-transparent rounded-xl p-6 z-20 resize-none'
                autoComplete='off'
              />
            </div>

            <button className='border-2 w-full sm:w-fit flex justify-center sm:justify-start border-[#f2f2f2]/80 py-4 px-8 rounded-xl hover:bg-[#f2f2f2]/10 ease-in-out duration-300 gap-2'>
              {contact.button}
              <img
                src='/send.svg'
                alt='sendIcon'
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
