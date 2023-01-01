import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Hero, About, Skills, Projects, ScrollUp } from '../components';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  return (
    <div className='font-poppins bg-[#1d1d1d] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin xl:overflow-y-hidden'>
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
      <Header />

      <section
        id='hero'
        className='snap-start'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills />
      </section>

      {/* <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section> */}
    </div>
  );
};

export default Home;
