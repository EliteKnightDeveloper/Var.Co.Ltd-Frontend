import Image from 'next/image';
import { FC } from 'react';
import Heading from '@/components/Heading/Heading';
import MarkHeading from '@/components/MarkHeading/MarkHeading';
import Button from '@/components/Button/Button';
import { IContent, IService } from '@/interfaces';
import Typograph from '@/components/Typograph/Typograph';

interface ServiceProps {
  serviceItems: IService[];
}

const Service: FC<ServiceProps> = ({ serviceItems }) => {
  return (
    <div
      className='flex flex-col bg-black gap-20 max-sm:gap-16 py-20 2xl:px-[480px] xl:px-60 sm:px-20 max-sm:px-4'
      id='Service'
    >
      <div className='flex flex-col justify-center gap-10 px-40 text-center text-white max-sm:px-4'>
        <Heading title={'Service'} content={'事業内容'} />
        <Typograph
          style='font-medium text-left text-white text-md'
          content={
            'ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。'
          }
        />
      </div>
      <div className='flex flex-col gap-20'>
        {serviceItems.map((serviceItem, key) => (
          <div className='flex flex-col gap-10 max-sm:px-4' key={key}>
            <MarkHeading
              title={serviceItem.title}
              subTitle={serviceItem.subTitle}
            />
            <div className='flex flex-col gap-16 max-lg:hidden'>
              {serviceItem.content.map((item, key) => (
                <ServiceItem {...item} key={key} />
              ))}
            </div>
            <div className='flex-col hidden gap-10 max-lg:flex'>
              {serviceItem.content.map((item, key) => (
                <MobileServiceItem {...item} key={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceItem: FC<IContent> = ({ id, image, title, subTitle, content }) => {
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
            <div className='flex flex-col text-2xl'>
              <Typograph content={title} />
              <Typograph content={subTitle!} />
            </div>
            <Typograph style='text-md font-medium' content={content} />
            <div className='mt-4'>
              <Button text={'詳しく見る'} size='sm' />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col gap-6 text-white max-lg:flex-1'>
            <div className='flex flex-col text-2xl '>
              <Typograph content={title} />
              <Typograph content={subTitle!} />
            </div>
            <Typograph style='text-md font-medium' content={content} />
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

const MobileServiceItem: FC<IContent> = ({
  image,
  title,
  subTitle,
  content,
}) => {
  return (
    <div className='flex flex-col gap-2 text-white'>
      <div className='flex flex-col text-2xl'>
        <Typograph content={title} />
        <Typograph content={subTitle!} />
      </div>
      <Image src={image} alt={'Service'} className='rounded-2xl' />
      <div className='flex flex-col gap-6'>
        <Typograph style='text-md' content={content} />
        <div className='mt-4'>
          <Button text={'詳しく見る'} size='sm' />
        </div>
      </div>
    </div>
  );
};

export default Service;
