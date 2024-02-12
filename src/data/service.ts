import { IService } from '@/interfaces';
import Service1 from '~/images/Service1.jpg';
import Service2 from '~/images/Service2.jpg';
import Service3 from '~/images/Service3.jpg';
import Service4 from '~/images/Service4.jpg';

export const serviceItems: IService[] = [
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