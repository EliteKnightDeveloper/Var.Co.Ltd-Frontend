import { FC } from 'react';
import Button from '@/components/Button/Button';
import Typography from '@/components/Typography/Typography';

const Contact: FC = () => {
  return (
    <div className='relative h-screen bg-center bg-cover bg-contact max-sm:bg-contact-mobile max-sm:h-[1080px]'>
      <div className='absolute flex flex-col items-center sm:gap-8 xl:gap-32 lg:gap-20 md:gap-8 2xl:top-32 lg:top-24 md:top-12 2xl:px-80 xl:px-40 sm:top-16 md:px-30 sm:px-20 max-sm:px-4 max-sm:top-32 max-sm:gap-16'>
        <div className='flex flex-col gap-6 px-16 md:px-4 max-md:px-0 max-sm:text-center'>
          <div className='flex flex-col text-white lg:text-5xl lg:items-center md:items-start md:text-4xl sm:text-4xl max-sm:text-xl'>
            <Typography
              content={
                '業界・規模問わず多くの企業様にご利用いただいております。'
              }
            />
            <Typography content={'まずはお気軽にご相談ください。'} />
          </div>
        </div>
        <div className='flex lg:flex-row md:flex-col max-md:flex-col'>
          <div className='flex flex-col justify-between flex-1 bg-gray-900 lg:rounded-l-2xl lg:px-16 lg:py-10 max-lg:rounded-t-2xl md:px-10 md:py-6 max-sm:px-6 max-sm:py-10 sm:px-6 sm:py-6'>
            <div className='relative flex flex-row items-center justify-between'>
              <Typography
                content={'お問い合わせ'}
                style='z-10 text-2xl text-white'
              />
              <Typography
                content={'CONTACT'}
                style='absolute right-0 text-5xl text-gray-800'
              />
            </div>
            <div className='flex flex-col mt-6 font-medium text-white text-md'>
              <Typography
                content={'IT全般についてのご相談をお受けしております。'}
              />
              <Typography
                content={
                  'カウンセリング、見積もり作成ともに無料でご対応いたしますので、お気軽にご相談ください。'
                }
              />
            </div>
            <div className='lg:mt-10 md:mt-6 max-sm:mt-10 sm:mt-6'>
              <Button text={'お問い合わせ'} size='sm' />
            </div>
          </div>
          <div className='flex flex-col justify-between flex-1 bg-gray-700 lg:px-16 lg:py-10 lg:rounded-r-2xl max-lg:rounded-b-2xl md:px-10 md:py-6 max-sm:px-6 max-sm:py-10 sm:px-6 sm:py-6'>
            <div className='relative flex flex-row items-center justify-between'>
              <Typography
                style='z-10 text-2xl text-white'
                content={'資料ダウンロード'}
              />
              <Typography
                style='absolute right-0 text-5xl text-gray-600'
                content={'DOCUMENT'}
              />
            </div>
            <div className='flex flex-col mt-6 font-medium text-gray-100 text-md'>
              <Typography
                content={
                  '会社案内、法人エンジニア研修に関するPDF資料をご用意しております。'
                }
              />
              <Typography content={'一覧ページよりお受け取りください。'} />
            </div>
            <div className='lg:mt-10 md:mt-6 max-sm:mt-10 sm:mt-6'>
              <Button text={'資料ダウンロード'} variant='secondary' size='sm' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
