import { FC } from 'react';
import { classNames } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: 'xs' | 'sm' | 'md';
  variant?: 'primary' | 'secondary';
  border?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  color,
  text,
  size = 'md',
  variant = 'primary',
  border = false,
  className,
  ...props
}) => {
  const sizeClass = classNames(
    size === 'xs' ? 'px-6 py-3 text-sm w-40' : '',
    size === 'sm' ? 'px-8 py-4 text-md w-60' : '',
    size === 'md' ? 'px-12 py-6 text-xl w-80' : ''
  );

  const backgroundClass = classNames(
    variant === 'primary' ? 'bg-accent' : '',
    variant === 'secondary' ? 'bg-white' : ''
  );

  return (
    <button
      {...props}
      className={classNames(
        'flex items-center justify-center rounded-full text-black break-keep',
        border ? 'border border-black' : '',
        sizeClass,
        backgroundClass,
        className!
      )}
    >
      {text}
    </button>
  );
};

export default Button;
