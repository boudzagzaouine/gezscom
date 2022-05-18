import { getSession, signIn, useSession } from "next-auth/react";
import React, { ReactNode, useState } from "react";
import { HOME } from "tools/consts";
import Nav from "./Nav";
import NavVert from "./NavVert";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  
  const [selected, setSelected] = useState(HOME);
  const updateSel = (s: number) => {
    setSelected(s);
  };
  //@ts-ignore
  const { data: session, status } = useSession()
  return (
    <>
      <Nav selected={selected} />
      {session &&   <section className="bg-slate-100 float-left w-full">
        <div className="w-1/6 float-left">
          <NavVert updateSel={updateSel} />
        </div>
       <div className=" py-6 sm:px-6 lg:px-8 w-5/6 float-left">{children}</div> 

      </section>}
      {!session && <div><h1>gescom</h1></div> }
    </>
  );
};

export default Layout;
