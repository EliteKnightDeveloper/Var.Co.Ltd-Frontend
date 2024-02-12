import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '@/components/Button/Button';

describe('Button test', () => {
  it('should contains the text', () => {
    render(<Button size={'md'} text={'Hello world!'} />);
    const button = screen.getByText(/Hello world!/i);

    expect(button).toBeInTheDocument();
  });
});
