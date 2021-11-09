import NImage from "next/image";

import type { ImageProps } from "next/image";
import type { FC } from "react";

export const Image: FC<ImageProps> = (props) => {
  return <NImage {...props} />;
};
