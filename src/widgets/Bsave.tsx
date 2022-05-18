import React, { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "./TypeWidgets";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Bcyan from "./Bcyan";
const calculClass = ({ className }: ButtonProps) => {
  return cn(className);
};
/*""*/

const Bsave: FC<ButtonProps> = ({
  label,
  children = label,
  className,
  ...props
}) => {
  return (
    <Bcyan className={calculClass({ ...props, className })} {...props}>
      Sauvegarder
    </Bcyan>
  );
};

export default Bsave;
