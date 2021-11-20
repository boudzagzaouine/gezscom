import { FC } from "react";

type AvatarProps = {
  image: string;
};

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return <img src={image} className="is_avatar" />;
};
