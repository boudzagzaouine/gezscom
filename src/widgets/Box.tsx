import React, { forwardRef, ReactNode, Ref, useEffect } from "react";
import { boolean } from "yup";
import Xclose from "./Xclose";
import cn from "classnames";
import {
  ArchiveIcon,
  ReplyIcon,
  TrashIcon,
  XIcon,
} from "@heroicons/react/solid";
import { ARCHIVE, DEL, RESTORE } from "tools/consts";
type BoxProps = {
  children: ReactNode;
  title: string | Element;
  show: boolean;
  action: number;
  close: () => void;
};

const Box = ({ children, title, show, action, close }: BoxProps) => {
  const [showBox, setShowBox] = React.useState(show);
  const act =
    action == ARCHIVE
      ? "archive"
      : action == RESTORE
      ? "restore"
      : action == DEL
      ? "del"
      : "";
  const style = "float-left h-8 w-8 text-rose-900";
  const icon =
    action == ARCHIVE ? (
      <ArchiveIcon className={style} aria-hidden="true" />
    ) : action == RESTORE ? (
      <ReplyIcon className={style} aria-hidden="true" />
    ) : action == DEL ? (
      <TrashIcon className={style} aria-hidden="true" />
    ) : (
      <></>
    );
  const open = () => {
    //setShowBox(true);
  };
  useEffect(() => {
    //@ts-ignore
    // ref.current = open; className={"relative w-full my-6 mx-auto max-w-" + format + "xl"}
    setShowBox(show);
  }); //
  /*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }*/
  return (
    <>
      {showBox && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative xs:w-full pt-8 pl-2 pr-2 pb-2  rounded-lg shadow-lg">
              <div className="absolute h-full w-full rounded-lg  bg-[#000]/30 inset-0"></div>
              <div className="absolute top-0 left-2 text-rose-900 my">
                <ArchiveIcon className={style} aria-hidden="true" />
                <div className="mt ml-2 text-lg float-left text-slate-50">
                  Demande de confirmation
                </div>
              </div>
              <button
                className={
                  "absolute top-0 right-0 cursor-pointer px-2.5 py bg-transparent"
                }
                onClick={() => {
                  close();
                }}
              >
                <XIcon
                  className=" h-8 w-8 text-slate-50 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </button>
              <div className={"relative"}>
                {/*content*/}
                <div className="border-0 rounded-lg  relative flex flex-col w-300 bg-white outline-none focus:outline-none">
                  {/*body*/}
                  <div className="relative p-6 flex-auto">{children}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};
export default Box;
