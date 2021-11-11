import type { AnchorProps, LinkProps } from "components/types";
import NLink from "next/link";
import type { FC } from "react";

export const Link = <C extends React.ElementType = "a">({
  href,
  as,
  ...props
}: LinkProps<C>) => {
  const Component = as || "a";
  return (
    <NLink href={href}>
      <Component {...props} />
    </NLink>
  );
};

export const ExternalLink: FC<AnchorProps> = (props) => {
  return <a {...props} />;
};
