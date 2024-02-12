import { FC } from 'react';
import Banner from '@/containers/Landing/Banner';
import Service from '@/containers/Landing/Service';
import News from '@/containers/Landing/News';
import Contact from '@/containers/Landing/Contact';

const Landing: FC = () => {
  return (
    <>
      <Banner />
      <Service />
      <News />
      <Contact />
    </>
  );
};

export default Landing;
