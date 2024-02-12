import Image from 'next/image';
import { FC } from 'react';
import Button from '@/components/Button/Button';
import Logo from '~/images/Logo.png';
import { useRouter } from 'next/navigation';

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
          <span className='text-xl'>株式会社var</span>
          <div className='flex flex-col text-sm'>
            <span className='font-medium'>〒 891-0145</span>
            <span className='font-medium'>鹿児島県鹿児島市錦江台3-21-22</span>
          </div>
          <div className='flex flex-row gap-2 text-sm text-gray-800 '>
            <a href='https://twitter.com/RaretechO' target='_blank'>
              <span className='font-medium hover:cursor-pointer'>Twitter</span>
            </a>
            <a href='https://zenn.dev/var' target='_blank'>
              <span className='font-medium hover:cursor-pointer'>Zenn</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-10 lg:flex-row md:gap-4 md:w-full md:flex-col sm:flex-col max-sm:flex-col'>
            <div className='flex flex-row gap-4 md:justify-between sm:justify-between max-sm:flex-col'>
              <div className='flex flex-col gap-2'>
                <span className='text-gray-100 text-md hover:cursor-pointer'>
                  サービス
                </span>
                <div className='flex flex-col gap-2 text-gray-800'>
                  <span className='hover:cursor-pointer'>
                    ITスクール RareTECH
                  </span>
                  <span className='hover:cursor-pointer'>
                    インフラ学習サービス エンベーダー
                  </span>
                  <span className='hover:cursor-pointer'>
                    システム・アプリケーション開発
                  </span>
                  <span className='hover:cursor-pointer'>Web制作</span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-gray-100 text-md hover:cursor-pointer'>
                  企業情報
                </span>
                <div className='flex flex-col gap-2 text-gray-800'>
                  <span className='hover:cursor-pointer'>ミッション</span>
                  <span className='hover:cursor-pointer'>ビジョン</span>
                  <span className='hover:cursor-pointer'>バリュー</span>
                  <span className='hover:cursor-pointer'>役員一覧</span>
                  <span className='hover:cursor-pointer'>会社概要</span>
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-4 md:justify-between sm:justify-between max-sm:flex-col'>
              <div className='flex flex-col gap-2'>
                <span className='text-gray-100 text-md hover:cursor-pointer'>
                  採用情報
                </span>
                <div className='flex flex-col gap-2 text-gray-800'>
                  <span className='hover:cursor-pointer'>代表メッセージ</span>
                  <span className='hover:cursor-pointer'>募集要項</span>
                </div>
              </div>
              <div className='flex flex-col gap-2 text-gray-100 text-md'>
                <span className='hover:cursor-pointer'>お知らせ</span>
                <span className='hover:cursor-pointer'>サステナビリティ</span>
                <span className='hover:cursor-pointer'>
                  プライバシーポリシー
                </span>
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
        <span className='text-xs text-gray-800'>
          ©︎ {new Date().getFullYear()} var Inc.
        </span>
      </div>
    </div>
  );
};

export default Footer;
