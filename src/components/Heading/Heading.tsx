import { FC } from 'react';

interface HeadingProps {
  content: string;
  title: string;
}

const Heading: FC<HeadingProps> = ({ content, title }) => {
  return (
    <div className='flex flex-col text-center text-white'>
      <span className='text-5xl'>{title}</span>
      <span className='text-accent text-md'>{content}</span>
    </div>
  );
};

export default Heading;
