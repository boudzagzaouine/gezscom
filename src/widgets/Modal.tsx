import React, { forwardRef, ReactNode, Ref, useEffect } from "react";
import { boolean } from "yup";
import Xclose from "./Xclose";
import cn from "classnames";
type ModalProps = {
  children: ReactNode;
  title: string;
  show: boolean;
  format: number;
<<<<<<< HEAD
  close: () => void
=======
  close:()=>void
>>>>>>> develop
};
const calculClass = ({ className }: any) => {
  return cn(
    "bg-cyan-800 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    className
  );
};
<<<<<<< HEAD
const Modal = ({ children, title, show, format, close }: ModalProps) => {
=======
const Modal = ({ children, title, show, format,close }: ModalProps) => {
>>>>>>> develop
  const [showModal, setShowModal] = React.useState(show);
  const open = () => {
    //setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    // ref.current = open;
    setShowModal(show);
  }); //
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
<<<<<<< HEAD
            <div
              className={"relative w-full my-6 mx-auto max-w-" + format + "xl"}
            >

              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <Xclose close={close} />
=======
           <div
              className={"relative w-full my-6 mx-auto max-w-" + format + "xl"}
            >
              
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <Xclose close={close}/>    
>>>>>>> develop
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};
export default Modal;
