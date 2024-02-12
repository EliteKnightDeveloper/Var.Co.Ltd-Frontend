import { FC } from 'react';
import Banner from '@/containers/Landing/Banner';
import Service from '@/containers/Landing/Service';
import News from '@/containers/Landing/News';
import Contact from '@/containers/Landing/Contact';
import { INews } from '@/interfaces/news';
import { IService } from '@/interfaces/service';
import News1 from '~/images/News1.jpg';
import News2 from '~/images/News2.jpg';
import News3 from '~/images/News3.jpg';
import News4 from '~/images/News4.jpg';
import News5 from '~/images/News5.jpg';
import News6 from '~/images/News6.jpg';
import Service1 from '~/images/Service1.jpg';
import Service2 from '~/images/Service2.jpg';
import Service3 from '~/images/Service3.jpg';
import Service4 from '~/images/Service4.jpg';

const newsItems: INews[] = [
  {
    image: News1,
    date: '2023.08.17',
    content: 'ホームページをリニューアルしました。',
    badgeColor: 'bg-black',
    badgeContent: 'その他',
  },
  {
    image: News2,
    date: '2023.03.01',
    content:
      'ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。',
    badgeColor: 'bg-blue',
    badgeContent: 'RareTECH',
  },
  {
    image: News3,
    date: '2022.10.05',
    content: 'エンベーダーの利用人数が5000名を突破しました。',
    badgeColor: 'bg-aqua',
    badgeContent: 'エンベーダー',
  },
  {
    image: News4,
    date: '2022.09.11',
    content: 'システム・アプリケーション開発の受託開発事業を開始しました。',
    badgeColor: 'bg-orange',
    badgeContent: 'システム・アプリケーション開発',
  },
  {
    image: News5,
    date: '2023.05.16',
    content: 'Web制作の受託開発事業を開始しました。',
    badgeColor: 'bg-purple',
    badgeContent: 'RareTECH',
  },
  {
    image: News6,
    date: '2022.01.30',
    content: 'ITスクールRareTECHの受講生が300名を突破しました。',
    badgeColor: 'bg-blue',
    badgeContent: 'エンベーダー',
  },
];

const serviceItems: IService[] = [
  {
    title: 'Education',
    subTitle: 'ITエンジニア教育事業',
    content: [
      {
        id: 0,
        image: Service1,
        title: 'ITスクール',
        subTitle: 'RareTECH',
        content:
          '希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。',
      },
      {
        id: 1,
        image: Service2,
        title: 'インフラ学習サービス',
        subTitle: 'エンベーダー',
        content:
          '日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。',
      },
    ],
  },
  {
    title: 'Development',
    subTitle: '受託開発事業',
    content: [
      {
        id: 3,
        image: Service3,
        title: 'システム・アプリケーション開発',
        content:
          '要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。',
      },
      {
        id: 4,
        image: Service4,
        title: 'Web制作',
        content:
          '会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。',
      },
    ],
  },
];
const Landing: FC = () => {
  return (
    <>
      <Banner />
      <Service serviceItems={serviceItems} />
      <News newsItems={newsItems} />
      <Contact />
    </>
  );
};

export default Landing;
