import { FC } from 'react';
import Banner from '@/containers/Landing/Banner';
import Service from '@/containers/Landing/Service';
import News from '@/containers/Landing/News';
import Contact from '@/containers/Landing/Contact';
import { serviceItems } from '@/data/service';
import { newsItems } from '@/data/news';

const Landing: FC = () => {
  return (
    <>
      <Banner />
      <Service serviceItems={serviceItems} />
      <News newsItems={newsItems} />
      <Contact />
    </>
  );
};

export default Landing;
