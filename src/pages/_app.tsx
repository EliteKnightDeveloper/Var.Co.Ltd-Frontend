import '~/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/containers/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
