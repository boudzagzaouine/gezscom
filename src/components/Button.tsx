import type { FC } from "react";
import type { ButtonProps } from "components/types";
import cn from 'classnames';

const calculClass = ({variant, full}: ButtonProps) => {
  return cn(
    {
      'p-2 px-4 rounded bg-gray-50 text-red-500': variant === 'secondary',
      'button bg-blue-700': variant === 'primary',
      'w-full': full,
    }

  );
}

export const Button: FC<ButtonProps> = ({
  label,
  children = label,
  ...props
}) => {

  return (
    <button
      className={calculClass(props)}
      {...props}
    >
      {children}
    </button>
  );
};
