import React, { ReactNode } from "react";
import cn from "classnames";
interface SectionProps {
  children: ReactNode;
}
const calculClass = ({ className }: any) => {
  return cn(
    "bg-white float-left w-full h-full mp-8 shadow-lg relative ",
    className
  );
};
/*

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
 className,
  ...props
}) => {
  return (
    <input className={calculClass({className})} {...props} />
    );
};
   
export default Input
*/
const Section = ({ children }: SectionProps) => {
  const c: string = "";
  return <section className={calculClass({ c })}>{children}</section>;
};

export default Section;
