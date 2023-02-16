/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { Modal } from '.';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>('');

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const sliderRef = useRef(null);
  useEffect(() => {
    if (!sliderRef) {
      return;
    }
    const slider = sliderRef.current;
  }, []);

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='title'>Projects</h3>
      <motion.div
        initial={{
          x: -1000,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='w-full flex justify-between max-w-7xl mx-auto xl:items-center z-20'
      >
        <div className='pt-32 w-full px-8 md:px-10 xl:px-32'>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            draggable={true}
            pagination={{ clickable: true }}
            loop={true}
            ref={sliderRef}
          >
            {projects.map((project, i) => (
              <SwiperSlide
                className='w-full h-auto'
                key={i}
              >
                <div className='relative flex flex-col md:flex-row md:gap-8'>
                  <div className='h-full md:w-[50%] mb-4 md:mb-0 rounded-md overflow-hidden'>
                    <img
                      src={urlFor(project?.image).url()}
                      alt={`${project.title} image`}
                      className='w-full ease-in-out duration-300 hover:scale-125'
                    />
                  </div>

                  <div className='flex flex-col justify-start items-start flex-1'>
                    <h2 className='text-xl md:text-3xl font-semibold mb-4'>
                      {project.title}
                    </h2>
                    <p className='mb-3 lg:hidden'>
                      {project.summary.split(' ').slice(0, 20).join(' ')}...{' '}
                      <span
                        // className='ml-auto mb-4 rounded-xl px-4 py-2 border-2 lg:hidden'
                        className='underline'
                        onClick={() => {
                          setModalValue(project.summary);
                          handleOpen();
                        }}
                      >
                        see more
                      </span>
                    </p>
                    <p className='mb-3 hidden lg:block'>{project.summary}</p>

                    <a
                      href={project.linkToBuild}
                      className='border-2 border-transparent w-full md:w-[200px] text-center py-2 rounded-md bg-[#F7AB0A]/80 hover:bg-transparent hover:border-[#F7AB0A]/80 ease-in-out duration-300 uppercase font-semibold tracking-[4px]'
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence>
          {modalOpen && (
            <Modal
              data={modalValue}
              handleClose={handleClose}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-[10deg]'></div>
    </div>
  );
};

export default Projects;
