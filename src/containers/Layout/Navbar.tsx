import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import { INavbar } from '@/interfaces/navbar';
import NabvarModal from './NabvarModal';
import { Menu } from '@/components/Icons/Menu';
import Logo from '~/images/Logo.png';
import Typography from '@/components/Typography/Typography';

const navbarItems: INavbar[] = [
  {
    title: 'サービス',
    link: 'service',
  },
  {
    title: '企業情報',
    link: 'company',
  },
  {
    title: '採用情報',
    link: 'recruit',
  },
  {
    title: 'お知らせ',
    link: 'news ',
  },
];

const Navbar: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className='absolute z-10 flex flex-row items-center px-10 py-4 mt-4 bg-white max-sm:px-4 max-sm:py-3 max-sm:mt-3 rounded-2xl 2xl:left-80 2xl:right-80 xl:left-60 xl:right-60 md:left-20 md:right-20 sm:left-20 sm:right-20 max-sm:left-4 max-sm:right-4'>
        <div className='flex items-center justify-between w-full'>
          <Image
            src={Logo}
            alt={'Logo'}
            className='hover:cursor-pointer'
            onClick={() => router.push('/')}
          />
          <div className='flex flex-row items-center gap-10 max-lg:hidden'>
            <div className='flex flex-row gap-6 '>
              {navbarItems.map((navbarItem, index) => (
                <NavbarItem {...navbarItem} key={index} />
              ))}
            </div>
            <div className='flex flex-row gap-2'>
              <Button
                text={'お問い合わせ'}
                size='xs'
                onClick={() => router.push('/contact')}
              />
              <Button
                text={'資料ダウンロード'}
                size='xs'
                variant={'secondary'}
                border={true}
                onClick={() => router.push('/document')}
              />
            </div>
          </div>
          <div className='hover:cursor-pointer lg:hidden' onClick={showModal}>
            <Menu />
          </div>
        </div>
      </div>
      <NabvarModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

const NavbarItem: FC<INavbar> = ({ title, link }) => {
  const router = useRouter();

  return (
    <Typography
      content={title}
      style='hover:cursor-pointer text-md'
      onClick={() => router.push(`${link}`)}
    />
  );
};

export default Navbar;
