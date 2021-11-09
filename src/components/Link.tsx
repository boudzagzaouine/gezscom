import NLink from "next/link";
import type { FC } from "react";
import type { AnchorProps, LinkProps } from "components/types";

export const Link: FC<LinkProps> = ({
  href,
  as: Component = "a",
  ...props
}) => {
  return (
    <NLink href={href}>
      <Component {...props} />
    </NLink>
  );
};

export const ExternalLink: FC<AnchorProps> = (props) => {
  return <a {...props} />;
};
