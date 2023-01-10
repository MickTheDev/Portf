import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  ScrollUp,
  Modal,
} from '../components';

import { useState, useEffect, useRef } from 'react';
import { PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/FetchPageInfo';
import { fetchProjects } from '../utils/FetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/FetchSkills';
import { AnimatePresence } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [scrollY, setScrollY] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [size, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const container: any = ref.current;
    container.focus();
    const handleScroll = () => setScrollY(container.scrollTop);
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width) {
      if (size.width > 768) setModalOpen(false);
    }
  }, [size]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div
      id='root'
      ref={ref}
      tabIndex={-1}
      className='font-helvetica bg-[#1d1d1d] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin xl:overflow-y-hidden'
    >
      <Head>
        <title>MickTheDev</title>
        <meta
          name='description'
          content="Michael's portfolio"
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/logo.svg'
        />
      </Head>
      <Header socials={socials} />

      <section
        id='hero'
        className='snap-start'
      >
        <Hero pageInfo={pageInfo} />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About
          pageInfo={pageInfo}
          handleOpen={handleOpen}
        />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills skills={skills} />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <Contact />
      </section>

      {/* <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section> */}
      <AnimatePresence>{scrollY > 200 && <ScrollUp />}</AnimatePresence>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            pageInfo={pageInfo}
            handleClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
