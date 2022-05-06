import cn from "classnames";
import type { ButtonProps } from "widgets/types";
import type { FC } from "react";

const calculClass = ({ className, variant, full }: ButtonProps) => {
  return cn(
    "py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    {
      "bg-white border-gray-300 text-gray-700 hover:bg-gray-50":
        variant === "secondary",
      "border-transparent text-white bg-indigo-600 hover:bg-indigo-700":
        variant === "primary",
      "w-full": full,
    },
    className
  );
};

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  children = label,
  ...props
}) => {
  return (
    <button className={calculClass({ ...props, variant })} {...props}>
      {children}
    </button>
  );
};
