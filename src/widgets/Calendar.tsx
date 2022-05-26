import React, { ReactNode } from "react";
import { CalendarContainer } from "react-datepicker";
import cn from "classnames";
type calculClassProps = {
  className: string;
};
const calculClass = ({ className }: calculClassProps) => {
  return cn(className);
};

type CalendarProps = {
  children: ReactNode[];
  className: calculClassProps;
};
const Calendar = ({ children, className }: CalendarProps) => {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        padding: "16px",
        background: "#2B5173",
        color: "#fff",
        float: "left",
        width: "272px",
        boxShadow: "1px 3px 6px 1px #555",
      }}
    >
      <CalendarContainer className={calculClass(className)}>
        <div
          style={{
            position: "relative",
            background: "#B9DAEC",
            float: "left",
            width: "100%",
          }}
        >
          {children}
        </div>
      </CalendarContainer>
    </div>
  );
};

export default Calendar;
