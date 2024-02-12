import { render, screen } from '@testing-library/react';
import React from 'react';
import News from '@/containers/Landing/News';
import { INews } from '@/interfaces/news';
import News1 from '~/images/News1.jpg';

const newsItems: INews[] = [
  {
    image: News1,
    date: '2023.08.17',
    content: 'ホームページをリニューアルしました。',
    badgeColor: 'bg-black',
    badgeContent: 'その他',
  },
];

describe('News Section test', () => {
  it('should contains the text', () => {
    render(<News newsItems={newsItems} />);
    const news = screen.getByText(/その他/i);

    expect(news).toBeInTheDocument();
  });
});
