import React, { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "./TypeWidgets";
import { DotsVerticalIcon } from "@heroicons/react/solid";
const calculClass = ({ className }: ButtonProps) => {
  return cn(
    "bg-transparent p-3 text-gray-700 hover:bg-gray-50 py-2 px-4  text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    className
  );
};
/*""*/

const Bcyan: FC<ButtonProps> = ({
  label,
  children = label,
  className,
  ...props
}) => {
  return (
    <button className={calculClass({ ...props, className })} {...props}>
      <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default Bcyan;
