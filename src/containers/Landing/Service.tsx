import Image from 'next/image';
import { FC } from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import { classNames } from '@/utils';
import Heading from '@/components/Heading/Heading';
import MarkHeading from '@/components/MarkHeading/MarkHeading';
import Service1 from '~/images/Service1.jpg';
import Service2 from '~/images/Service2.jpg';
import Service3 from '~/images/Service3.jpg';
import Service4 from '~/images/Service4.jpg';
import Button from '@/components/Button/Button';
import { IService } from '@/interfaces/service';

const noto = Noto_Sans_JP({ subsets: ['latin'] });

const serviceItems1: IService[] = [
  {
    id: 0,
    image: Service1,
    title1: 'ITスクール',
    title2: 'RareTECH',
    content:
      '希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。',
  },
  {
    id: 1,
    image: Service2,
    title1: 'インフラ学習サービス',
    title2: 'エンベーダー',
    content:
      '日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。',
  },
];

const serviceItems2: IService[] = [
  {
    id: 0,
    image: Service3,
    title1: 'システム・アプリケーション開発',
    content:
      '要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。',
  },
  {
    id: 1,
    image: Service4,
    title1: 'Web制作',
    content:
      '会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。',
  },
];

const Service: FC = () => {
  return (
    <div
      className='flex flex-col bg-black gap-20 max-sm:gap-16 py-20 2xl:px-[480px] xl:px-60 sm:px-20 max-sm:px-4'
      id='Service'
    >
      <div className='flex flex-col justify-center gap-10 px-40 text-center text-white max-sm:px-4'>
        <Heading title={'Service'} content={'事業内容'} />
        <span className='font-medium text-left text-white text-md'>
          ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
        </span>
      </div>
      <div className='flex flex-col gap-10 max-sm:px-4'>
        <MarkHeading content={'ITエンジニア教育事業'} title={'Education'} />
        <div className='flex flex-col gap-16 max-sm:hidden'>
          {serviceItems1.map((serviceItem, index) => (
            <ServiceItem {...serviceItem} key={index} />
          ))}
        </div>
        <div className='flex-col hidden gap-10 max-sm:flex'>
          {serviceItems1.map((serviceItem, index) => (
            <MobileServiceItem {...serviceItem} key={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-10 max-sm:px-4'>
        <MarkHeading content={'受託開発事業'} title={'Development'} />
        <div className='flex flex-col gap-16 max-sm:hidden'>
          {serviceItems2.map((serviceItem, index) => (
            <ServiceItem {...serviceItem} key={index} />
          ))}
        </div>
        <div className='flex-col hidden gap-10 max-sm:flex'>
          {serviceItems2.map((serviceItem, index) => (
            <MobileServiceItem {...serviceItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceItem: FC<IService> = ({ id, image, title1, title2, content }) => {
  return (
    <div className='flex flex-row gap-16'>
      {id % 2 === 0 ? (
        <>
          <Image
            src={image}
            alt={'Service'}
            className='rounded-2xl max-lg:flex-1'
          />
          <div className='flex flex-col gap-6 text-white max-lg:flex-1'>
            <div className='flex flex-col text-2xl '>
              <span>{title1}</span>
              <span>{title2}</span>
            </div>
            <span className='text-md'>{content}</span>
            <div className='mt-4'>
              <Button text={'詳しく見る'} size='sm' />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col gap-6 text-white max-lg:flex-1'>
            <div className='flex flex-col text-2xl '>
              <span>{title1}</span>
              <span>{title2}</span>
            </div>
            <span className='text-md'>{content}</span>
            <div className='mt-4'>
              <Button text={'詳しく見る'} size='sm' />
            </div>
          </div>
          <Image
            src={image}
            alt={'Service'}
            className='rounded-2xl max-lg:flex-1'
          />
        </>
      )}
    </div>
  );
};

const MobileServiceItem: FC<IService> = ({
  id,
  image,
  title1,
  title2,
  content,
}) => {
  return (
    <div className='flex flex-col gap-2 text-white'>
      <div className='flex flex-col text-2xl'>
        <span>{title1}</span>
        <span>{title2}</span>
      </div>
      <Image src={image} alt={'Service'} className='rounded-2xl' />
      <div className='flex flex-col gap-6'>
        <span className='text-md'>{content}</span>
        <div className='mt-4'>
          <Button text={'詳しく見る'} size='sm' />
        </div>
      </div>
    </div>
  );
};

export default Service;
