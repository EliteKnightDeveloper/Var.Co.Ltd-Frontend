import { INews } from '@/interfaces';
import News1 from '~/images/News1.jpg';
import News2 from '~/images/News2.jpg';
import News3 from '~/images/News3.jpg';
import News4 from '~/images/News4.jpg';
import News5 from '~/images/News5.jpg';
import News6 from '~/images/News6.jpg';

export const newsItems: INews[] = [
  {
    image: News1,
    date: '2023.08.17',
    content: 'ホームページをリニューアルしました。',
    badgeColor: 'black',
    badgeContent: 'その他',
  },
  {
    image: News2,
    date: '2023.03.01',
    content:
      'ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。',
    badgeColor: 'blue',
    badgeContent: 'RareTECH',
  },
  {
    image: News3,
    date: '2022.10.05',
    content: 'エンベーダーの利用人数が5000名を突破しました。',
    badgeColor: 'aqua',
    badgeContent: 'エンベーダー',
  },
  {
    image: News4,
    date: '2022.09.11',
    content: 'システム・アプリケーション開発の受託開発事業を開始しました。',
    badgeColor: 'orange',
    badgeContent: 'システム・アプリケーション開発',
  },
  {
    image: News5,
    date: '2023.05.16',
    content: 'Web制作の受託開発事業を開始しました。',
    badgeColor: 'purple',
    badgeContent: 'Web制作',
  },
  {
    image: News6,
    date: '2022.01.30',
    content: 'ITスクールRareTECHの受講生が300名を突破しました。',
    badgeColor: 'blue',
    badgeContent: 'RareTECH',
  },
];
