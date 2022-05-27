import React, { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "./TypeWidgets";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Bcyan from "./Bcyan";
import Bcyanxl from "./Bcyanxl";
const calculClass = ({ className }: ButtonProps) => {
  return cn(className);
};
/*""*/

const BsavEndNew: FC<ButtonProps> = ({
  label,
  children = label,
  className,
  ...props
}) => {
  return (
    <Bcyanxl className={calculClass({ ...props, className })} {...props}>
      Sauvegarder et Nouveau
    </Bcyanxl>
  );
};

export default BsavEndNew;
