import { FC } from 'react';
import Button from '@/components/Button/Button';
import Typograph from '@/components/Typograph/Typograph';
import News1 from '~/images/News1.jpg';

const Banner: FC = () => {
  return (
    <div className='relative h-screen bg-center bg-cover bg-banner max-sm:bg-banner-mobile'>
      <div className='absolute flex flex-col gap-16 2xl:left-80 xl:left-60 md:left-30 sm:left-20 lg:top-60 sm:top-1/4 max-sm:left-4 max-sm:top-40 max-sm:right-4'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col text-6xl max-sm:text-2xl'>
            <Typograph content={'テクノロジーを通じて、'} />
            <Typograph content={'夢や目標を実現できる'} />
            <Typograph content={'環境を提供します'} />
          </div>
          <div className='flex flex-col text-xl font-medium max-sm:text-md max-sm:pr-24'>
            <Typograph content={'IT教育、システム開発から企業を支援する'} />
            <Typograph content={'テクノロジーカンパニーです。'} />
          </div>
        </div>
        <Button
          text={'事業内容を見る'}
          size='md'
          onClick={() => document.getElementById('Service')?.scrollIntoView()}
          className='w-fit'
        />
      </div>
    </div>
  );
};

export default Banner;
