import { FC } from 'react';
import Typography from '@/components/Typography/Typography';

interface HeadingProps {
  content: string;
  title: string;
}

const Heading: FC<HeadingProps> = ({ content, title }) => {
  return (
    <div className='flex flex-col text-center text-white'>
      <Typography style='text-5xl' content={title} />
      <Typography style='text-accent text-md' content={content} />
    </div>
  );
};

export default Heading;
