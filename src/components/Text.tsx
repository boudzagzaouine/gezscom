import type { FC } from "react";
import type { TextProps } from "components/types";

export const Text: FC<TextProps> = ({ as: Component = "span", ...props }) => {
  return <Component {...props} />;
};
