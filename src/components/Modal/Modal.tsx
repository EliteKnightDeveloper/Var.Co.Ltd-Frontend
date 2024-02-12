import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '@/utils';
import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({ subsets: ['latin'] });

export interface ModalProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactElement | React.ReactElement[] | string;
  isStatic?: boolean;
  size?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  isStatic = false,
  size = 'w-full',
}) => (
  <Fragment>
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-[1000]'
        onClose={() => {
          if (isStatic) return;
          onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity bg-black backdrop-blur-md' />
        </Transition.Child>

        <div
          className={classNames(
            'fixed inset-0 z-[1000] overflow-y-auto',
            noto.className
          )}
        >
          <div className='flex w-full min-h-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel
                className={classNames(
                  'relative transform  px-8 py-6 bg-black text-left transition-all',
                  className ? className : '',
                  size
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </Fragment>
);

export default Modal;
