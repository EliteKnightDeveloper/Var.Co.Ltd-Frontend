import { ReactNode } from 'react';
import Footer from '@/containers/Layout/Footer';
import Navbar from '@/containers/Layout/Navbar';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import { classNames } from '@/utils';

const noto = Noto_Sans_JP({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main
      className={classNames(
        'relative flex flex-col w-full max-sm:overflow-y-scroll',
        noto.className
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
