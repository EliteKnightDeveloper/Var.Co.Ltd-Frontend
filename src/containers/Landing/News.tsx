import Image from 'next/image';
import { FC } from 'react';
import Button from '@/components/Button/Button';
import { INews } from '@/interfaces';
import Heading from '@/components/Heading/Heading';
import Typograph from '@/components/Typograph/Typograph';

interface NewsItems {
  newsItems: INews[];
}

const News: FC<NewsItems> = ({ newsItems }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-20 py-20 bg-gray-900 max-sm:gap-16 2xl:px-80 xl:px-60 md:px-30 sm:px-20 max-sm:px-4'>
      <Heading title={'News'} content={'お知らせ'} />
      <div className='flex flex-col gap-10'>
        <div className='grid gap-x-6 gap-y-10 lg:grid-cols-3 md:grid-cols-2'>
          {newsItems.map((newsItem, index) => (
            <NewsItem {...newsItem} key={index} />
          ))}
        </div>
      </div>
      <Button text={'一覧を見る'} size='sm' />
    </div>
  );
};

const NewsItem: FC<INews> = ({
  image,
  date,
  content,
  badgeColor,
  badgeContent,
}) => {
  const setColor = (value: string) => {
    switch (value) {
      case 'black':
        return 'bg-black';
      case 'blue':
        return 'bg-blue';
      case 'aqua':
        return 'bg-aqua';
      case 'orange':
        return 'bg-orange';
      case 'purple':
        return 'bg-purple';
      case 'blue':
        return 'bg-blue';
    }
  };

  return (
    <div className='flex flex-col flex-1 gap-4'>
      <div className='relative'>
        <Image src={image} alt='News1' className='rounded-2xl' />
        <div
          className={`absolute right-4 top-4 rounded-full py-1 px-[9px] ${setColor(badgeColor)}`}
        >
          <Typograph style='text-sm text-white' content={badgeContent} />
        </div>
      </div>
      <div className='flex flex-col gap-1 text-white'>
        <Typograph style='text-sm' content={date} />
        <Typograph style='text-xl' content={content} />
      </div>
    </div>
  );
};

export default News;
