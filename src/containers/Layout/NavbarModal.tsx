import Image from 'next/image';
import { FC } from 'react';
import Modal, { ModalProps } from '@/components/Modal/Modal';
import { INavbar } from '@/interfaces';
import { Close } from '@/components/Icons/Close';
import Logo from '~/images/Logo.png';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import Typograph from '@/components/Typograph/Typograph';
import { navbarItems } from '@/data/navbar';

const NabvarModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col w-full gap-10'>
        <div className='flex flex-row items-center justify-between '>
          <Image
            src={Logo}
            alt={'Logo'}
            className='hover:cursor-pointer'
            onClick={() => router.push('/')}
          />
          <div onClick={onClose}>
            <Close />
          </div>
        </div>
        <div className='flex flex-col gap-6 w-fit'>
          {navbarItems.map((navbarItem, index) => (
            <NavbarItem {...navbarItem} key={index} />
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <Button
            text={'お問い合わせ'}
            size='xs'
            className='max-lg:w-full'
            onClick={() => router.push('/contact')}
          />
          <Button
            text={'資料ダウンロード'}
            size='xs'
            variant={'secondary'}
            className='max-lg:w-full'
            onClick={() => router.push('/document')}
          />
        </div>
      </div>
    </Modal>
  );
};

const NavbarItem: FC<INavbar> = ({ title, link }) => {
  const router = useRouter();

  return (
    <Typograph
      content={title}
      style='hover:cursor-pointer text-md text-white'
      onClick={() => router.push(`${link}`)}
    />
  );
};

export default NabvarModal;
