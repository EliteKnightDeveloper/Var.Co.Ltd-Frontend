import Image from 'next/image';
import { FC } from 'react';
import Button from '@/components/Button/Button';
import Logo from '~/images/Logo.png';
import { useRouter } from 'next/navigation';
import Typograph from '@/components/Typograph/Typograph';

const corporateItems: string[] = [
  'ミッション',
  'ビジョン',
  'バリュー',
  '役員一覧',
  '会社概要',
];

const serviceItems: string[] = [
  'ITスクール RareTECH',
  'インフラ学習サービス エンベーダー',
  'システム・アプリケーション開発',
  'Web制作',
];

const recruitItems: string[] = ['代表メッセージ', '募集要項'];

const otherItems: string[] = [
  'お知らせ',
  'サステナビリティ',
  'プライバシーポリシー',
];

const Footer: FC = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-10 pt-20 pb-6 bg-black 2xl:px-80 xl:px-50 md:px-40 sm:px-20 max-sm:px-4'>
      <div className='flex justify-between xl:flex-row md:flex-col md:gap-8 sm:flex-col sm:gap-8 max-sm:flex-col max-sm:gap-10'>
        <div className='flex flex-col gap-2 text-white'>
          <Image
            src={Logo}
            alt={'Logo'}
            className='hover:cursor-pointer'
            onClick={() => router.push('/')}
          />
          <Typograph style='text-xl' content={'株式会社var'} />
          <div className='flex flex-col text-sm'>
            <Typograph style='font-medium' content={'〒 891-0145'} />
            <Typograph
              style='font-medium'
              content={'鹿児島県鹿児島市錦江台3-21-22'}
            />
          </div>
          <div className='flex flex-row gap-2 text-sm text-gray-800 '>
            <a href='https://twitter.com/RaretechO' target='_blank'>
              <Typograph
                style='font-medium hover:cursor-pointer'
                content={'Twitter'}
              />
            </a>
            <a href='https://zenn.dev/var' target='_blank'>
              <Typograph
                style='font-medium hover:cursor-pointer'
                content={'Zenn'}
              />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex lg:gap-10 lg:flex-row gap-4 md:w-full md:flex-col sm:flex-col max-sm:flex-col'>
            <div className='flex flex-row gap-4 lg:gap-10 md:justify-between sm:justify-between max-sm:flex-col'>
              <div className='flex flex-col gap-2'>
                <Typograph
                  style='text-gray-100 text-md hover:cursor-pointer'
                  content={'サービス'}
                />
                <div className='flex flex-col gap-2 text-gray-800 text-sm'>
                  {serviceItems.map((item, index) => (
                    <Typograph
                      key={index}
                      style='text-gray-800 text-md hover:cursor-pointer'
                      content={item}
                    />
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typograph
                  style='text-gray-100 text-md hover:cursor-pointer'
                  content={'企業情報'}
                />
                <div className='flex flex-col gap-2 text-gray-800 text-sm'>
                  {corporateItems.map((item, index) => (
                    <Typograph
                      key={index}
                      style='hover:cursor-pointer'
                      content={item}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-4 lg:gap-10 md:justify-between sm:justify-between max-sm:flex-col'>
              <div className='flex flex-col gap-2'>
                <Typograph
                  style='text-gray-100 text-md hover:cursor-pointer'
                  content={'採用情報'}
                />
                <div className='flex flex-col gap-2 text-gray-800 text-sm'>
                  {recruitItems.map((item, index) => (
                    <Typograph
                      key={index}
                      style='hover:cursor-pointer'
                      content={item}
                    />
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-2 text-gray-100 text-md'>
                {otherItems.map((item, index) => (
                  <Typograph
                    key={index}
                    style='hover:cursor-pointer'
                    content={item}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-2 max-lg:justify-between xl:justify-end max-sm:flex-col max-sm:w-full'>
            <Button text={'お問い合わせ'} size='sm' className='max-sm:w-full' />
            <Button
              text={'資料ダウンロード'}
              variant='secondary'
              size='sm'
              className='max-sm:w-full'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <Typograph
          style='text-xs text-gray-800text-xs text-gray-800'
          content={`©︎ ${new Date().getFullYear()} var Inc.`}
        />
      </div>
    </div>
  );
};

export default Footer;
