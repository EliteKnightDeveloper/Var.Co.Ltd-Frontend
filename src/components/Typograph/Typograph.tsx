import { classNames } from '@/utils';
import { FC } from 'react';

interface TypographProps {
  content: string;
  style?: string;
  onClick?: () => void;
}

const Typograph: FC<TypographProps> = ({ content, style, onClick }) => {
  return (
    <span className={classNames('leading-normal', style!)} onClick={onClick}>
      {content}
    </span>
  );
};

export default Typograph;
