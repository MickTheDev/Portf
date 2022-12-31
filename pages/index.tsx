import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Hero } from '../components';

const Home: NextPage = () => {
  return (
    <div className='font-poppins bg-[#1d1d1d] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
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
        className='snap-center'
      >
        <Hero />
      </section>
    </div>
  );
};

export default Home;
