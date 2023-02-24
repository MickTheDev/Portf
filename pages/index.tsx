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
import { PageInfo, Project, Skill, Social, ContactType } from '../typings';
import { fetchPageInfo } from '../utils/FetchPageInfo';
import { fetchProjects } from '../utils/FetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/FetchSkills';
import { fetchContact } from '../utils/FetchContact';
import { AnimatePresence } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  contact: ContactType;
};

const Home = ({ pageInfo, skills, projects, socials, contact }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [scrollY, setScrollY] = useState<number>(0);
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

  return (
    <div
      id='root'
      ref={ref}
      tabIndex={-1}
      className='font-helvetica bg-[#141313] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin xl:overflow-y-hidden'
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
          size={size}
        />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills skills={skills} />
      </section>
      <section
        id='projects'
        className='snap-start'
      >
        <Projects projects={projects} />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <Contact contact={contact} />
      </section>

      <AnimatePresence>{scrollY > 200 && <ScrollUp />}</AnimatePresence>
      <AnimatePresence></AnimatePresence>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: any = await fetchPageInfo();
  const contact: any = await fetchContact();
  const skills: any = await fetchSkills();
  const projects: any = await fetchProjects();
  const socials: any = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
      contact,
    },
    revalidate: 10,
  };
};
