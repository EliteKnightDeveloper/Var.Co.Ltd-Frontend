import { FC } from 'react';
import { classNames } from '@/utils';
import { Inter, Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

interface MarkHeadingProps {
  content: string;
  title: string;
}

const MarkHeading: FC<MarkHeadingProps> = ({ content, title }) => {
  return (
    <div className='flex flex-row items-center gap-4 w-fit'>
      <div className='w-2 bg-accent min-h-16' />
      <div className='flex flex-col text-white'>
        <span className='text-4xl'>{title}</span>
        <span className='text-sm'>{content}</span>
      </div>
    </div>
  );
};

export default MarkHeading;
