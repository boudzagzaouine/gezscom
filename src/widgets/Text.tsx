import type { TextProps } from "widgets/types";

export const Text = <C extends React.ElementType = "span">({
  as,
  ...props
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...props} />;
};
