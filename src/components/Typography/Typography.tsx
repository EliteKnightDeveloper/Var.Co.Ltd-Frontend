import { classNames } from '@/utils';
import { FC } from 'react';

interface TypographyProps {
  content: string;
  style?: string;
  onClick?: () => void;
}

const Typography: FC<TypographyProps> = ({ content, style, onClick }) => {
  return (
    <span className={classNames('leading-normal', style!)} onClick={onClick}>
      {content}
    </span>
  );
};

export default Typography;
