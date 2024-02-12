import { FC } from 'react';
import Typograph from '@/components/Typograph/Typograph';

interface MarkHeadingProps {
  title: string;
  subTitle: string;
}

const MarkHeading: FC<MarkHeadingProps> = ({ title, subTitle }) => {
  return (
    <div className='flex flex-row items-center gap-4 w-fit'>
      <div className='w-2 bg-accent min-h-16' />
      <div className='flex flex-col text-white'>
        <Typograph style='text-4xl' content={title} />
        <Typograph style='text-sm' content={subTitle} />
      </div>
    </div>
  );
};

export default MarkHeading;
