import classNames from "classnames";
import React from "react";
import { TableProps, TdProps, ThProps, TrProps } from "./types";

const Table = ({ thead, children, className, ...props }: TableProps) => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow-sm ring-1 ring-black ring-opacity-5">
            <table
              {...props}
              className={classNames(className, "min-w-full border-separate")}
            >
              <thead className="bg-gray-50">{thead}</thead>
              <tbody className="bg-white">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tr = (props: TrProps) => <tr {...props} />;

const Th = ({ className, ...props }: ThProps) => {
  return (
    <th
      scope="col"
      {...props}
      className={classNames(
        className,
        "sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
      )}
    />
  );
};

const Td = ({ className, action = false, ...props }: TdProps) => {
  return (
    <td
      {...props}
      className={classNames(
        className,
        { "relative text-right font-medium sm:pr-6": action },
        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
      )}
    />
  );
};

Table.th = Th;
Table.td = Td;
Table.tr = Tr;

export default Table;
