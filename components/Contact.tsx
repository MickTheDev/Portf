/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import {
  BsArrowRightShort,
  BsReply,
  BsWhatsapp,
  BsMessenger,
} from 'react-icons/bs';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className='relative md:h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden max-w-7xl mx-auto'>
      <h3 className='absolute top-20 uppercase tracking-[20px] font-helvetica font-semibold text-2xl text-gray-300 pl-4'>
        Contact
      </h3>

      <div className='w-full flex flex-col md:flex-row justify-center items-start gap-24 pt-32 md:px-10'>
        <div className='flex flex-col justify-center items-center w-screen px-10 md:px-0 md:w-[300px] relative'>
          <h3 className='text-center font-helvetica mb-6 text-3xl font-semibold'>
            Talk to me
          </h3>

          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <div className='contactCard'>
              <BsReply
                size={30}
                className='contactCardIcon mb-4'
              />
              <h3 className='font-semibold'>Email</h3>
              <span className='text-[#fff]/60 mb-2'>
                siewierskimichal1@gmail.com
              </span>

              <Link
                href='mailto:siewierskimichal1@gmail.com'
                className='flex flex-row justify-center items-center text-[#fff]/60 group'
              >
                Write me{' '}
                <BsArrowRightShort
                  size={30}
                  className='contactCardIcon group-hover:translate-x-[5px] ease-in-out duration-300'
                />
              </Link>
            </div>

            <div className='contactCard'>
              <BsWhatsapp
                size={30}
                className='contactCardIcon mb-4'
              />
              <h3 className='font-semibold'>Whatsapp</h3>
              <span className='text-[#fff]/60 mb-2'>000-000-000</span>

              <Link
                href='/'
                className='flex flex-row justify-center items-center text-[#fff]/60 group'
              >
                Write me{' '}
                <BsArrowRightShort
                  size={30}
                  className='contactCardIcon group-hover:translate-x-[5px] ease-in-out duration-300'
                />
              </Link>
            </div>

            <div className='contactCard'>
              <BsMessenger
                size={30}
                className='contactCardIcon mb-4'
              />
              <h3 className='font-semibold'>Messenger</h3>
              <span className='text-[#fff]/60 mb-2'>Michał Siewierski</span>

              <Link
                href='/'
                className='flex flex-row justify-center items-center text-[#fff]/60 group'
              >
                Write me{' '}
                <BsArrowRightShort
                  size={30}
                  className='contactCardIcon group-hover:translate-x-[5px] ease-in-out duration-300'
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-screen px-10 md:px-0 md:w-[auto] relative'>
          <h3 className='text-center font-helvetica mb-6 text-3xl font-semibold'>
            Write me
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
                placeholder='Insert your name'
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
                placeholder='Insert your email'
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
                placeholder='Write your project'
                className='absolute top-0 left-0 w-full h-full outline-none border-2 border-[#f2f2f2]/80 bg-transparent rounded-xl p-6 z-20 resize-none'
                autoComplete='off'
              />
            </div>

            <button className='border-2 border-[#f2f2f2]/80 w-fit py-4 px-8 rounded-xl hover:bg-[#f2f2f2]/10 ease-in-out duration-300 inline-flex gap-2'>
              Send Message
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
