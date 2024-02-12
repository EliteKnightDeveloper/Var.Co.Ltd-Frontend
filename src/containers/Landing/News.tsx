import Image from 'next/image';
import { FC } from 'react';
import News1 from '~/images/News1.jpg';
import News2 from '~/images/News2.jpg';
import News3 from '~/images/News3.jpg';
import News4 from '~/images/News4.jpg';
import News5 from '~/images/News5.jpg';
import News6 from '~/images/News6.jpg';
import { Noto_Sans_JP } from 'next/font/google';
import { classNames } from '@/utils';
import Button from '@/components/Button/Button';
import { INews } from '@/interfaces/news';
import Heading from '@/components/Heading/Heading';

const noto = Noto_Sans_JP({ subsets: ['latin'] });

const newsItems1: INews[] = [
  {
    image: News1,
    date: '2023.08.17',
    content: 'ホームページをリニューアルしました。',
    badgeColor: 'bg-black',
    badgeContent: 'その他',
  },
  {
    image: News2,
    date: '2023.03.01',
    content:
      'ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。',
    badgeColor: 'bg-blue',
    badgeContent: 'RareTECH',
  },
  {
    image: News3,
    date: '2022.10.05',
    content: 'エンベーダーの利用人数が5000名を突破しました。',
    badgeColor: 'bg-aqua',
    badgeContent: 'エンベーダー',
  },
];

const newsItems2: INews[] = [
  {
    image: News4,
    date: '2022.09.11',
    content: 'システム・アプリケーション開発の受託開発事業を開始しました。',
    badgeColor: 'bg-orange',
    badgeContent: 'システム・アプリケーション開発',
  },
  {
    image: News5,
    date: '2023.05.16',
    content: 'Web制作の受託開発事業を開始しました。',
    badgeColor: 'bg-purple',
    badgeContent: 'RareTECH',
  },
  {
    image: News6,
    date: '2022.01.30',
    content: 'ITスクールRareTECHの受講生が300名を突破しました。',
    badgeColor: 'bg-blue',
    badgeContent: 'エンベーダー',
  },
];
const News: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20 py-20 bg-gray-900 max-sm:gap-16 2xl:px-80 xl:px-60 md:px-30 sm:px-20 max-sm:px-4'>
      <Heading title={'News'} content={'お知らせ'} />
      <div className='flex flex-col gap-10'>
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-1'>
          {newsItems1.map((newsItem, index) => (
            <NewsItem {...newsItem} key={index} />
          ))}
        </div>
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-1'>
          {newsItems2.map((newsItem, index) => (
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
  return (
    <div className='flex flex-col flex-1 gap-4'>
      <div className='relative'>
        <Image src={image} alt='News1' className='rounded-2xl' />
        <div
          className={`absolute right-4 top-4 rounded-full py-1 px-[9px] ${badgeColor}`}
        >
          <span className='text-sm text-white'>{badgeContent}</span>
        </div>
      </div>
      <div className='flex flex-col gap-1 text-white'>
        <span className='text-sm'>{date}</span>
        <span className='text-xl'>{content}</span>
      </div>
    </div>
  );
};

export default News;
