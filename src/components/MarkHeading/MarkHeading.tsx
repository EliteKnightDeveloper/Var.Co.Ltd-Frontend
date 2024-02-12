import { FC } from 'react';
import Typography from '@/components/Typography/Typography';

interface MarkHeadingProps {
  title: string;
  subTitle: string;
}

const MarkHeading: FC<MarkHeadingProps> = ({ title, subTitle }) => {
  return (
    <div className='flex flex-row items-center gap-4 w-fit'>
      <div className='w-2 bg-accent min-h-16' />
      <div className='flex flex-col text-white'>
        <Typography style='text-4xl' content={title} />
        <Typography style='text-sm' content={subTitle} />
      </div>
    </div>
  );
};

export default MarkHeading;
