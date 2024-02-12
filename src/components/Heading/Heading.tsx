import { FC } from 'react';
import Typograph from '@/components/Typograph/Typograph';

interface HeadingProps {
  content: string;
  title: string;
}

const Heading: FC<HeadingProps> = ({ content, title }) => {
  return (
    <div className='flex flex-col text-center text-white'>
      <Typograph style='text-5xl' content={title} />
      <Typograph style='text-accent text-md' content={content} />
    </div>
  );
};

export default Heading;
