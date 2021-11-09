import type { FC } from "react";
import type { ButtonProps } from "components/types";

export const Button: FC<ButtonProps> = ({
  label,
  children = label,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
