import { render } from '@testing-library/react';
import React from 'react';
import Button from '@/components/Button/Button';

describe('Button Test', () => {
  it('Should render the button', () => {
    const { getByText } = render(
      <Button size={'md'} text={'Hello'} variant={'primary'} />
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('Should render the primary button', () => {
    const { getByText } = render(
      <Button size={'md'} text={'Hello'} variant={'primary'} />
    );
    expect(getByText('Hello')).toHaveStyle({
      backgroundColor: 'bg-accent',
    });
  });
});
