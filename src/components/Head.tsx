import NHead from "next/head";
import type { ReactNode } from "react";

export const Head = ({
  title,
  children,
  ...props
}: {
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <NHead {...props}>
      {children}
      {title && <title>{title}</title>}
    </NHead>
  );
};
