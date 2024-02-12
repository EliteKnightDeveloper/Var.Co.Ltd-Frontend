import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Banner from '@/containers/Landing/Banner';

describe('Banner Section test', () => {
  it('Should contains the text', () => {
    render(<Banner />);
    const banner = screen.getByText(/テクノロジーを通じて/i);

    expect(banner).toBeInTheDocument();
  });

  it('Should contains the button', () => {
    render(<Banner />);

    const button = screen.getByText(/事業内容を見る/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
