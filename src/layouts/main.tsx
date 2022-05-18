import { getSession, signIn, useSession } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";
import { HOME } from "tools/consts";
import Nav from "./Nav";
import NavVert from "./NavVert";

interface LayoutProps {
  children: ReactNode;
}

const Layout =   ({ children }: LayoutProps) => {
  
  const [selected, setSelected] = useState(HOME);
  const updateSel = (s: number) => {
    setSelected(s);
  };
  /* 
  const { data: session, status } = useSession()
  console.log("session="+JSON.stringify(session)+" , status = "+status)
  const [loading,setLoading]=useState(true)
  const securePage = async () =>{
    const session = await getSession()
    if(session){
      setLoading(true)
    }else{
   //   setLoading(false)
    } }
  useEffect(()=>{
    securePage()
    if(loading && !session)window.location.href="/"
  },[]) */
  return (
    <>
      <Nav selected={selected} loading={true} />
      <section className="bg-slate-100 float-left w-full">
        <div className="w-1/6 float-left">
          <NavVert updateSel={updateSel} />
        </div>
       <div className=" py-6 sm:px-6 lg:px-8 w-5/6 float-left">{children}</div> 

      </section>
     {/*  {loading && session && <section className="bg-slate-100 float-left w-full">
        <div className="w-1/6 float-left">
          <NavVert updateSel={updateSel} />
        </div>
       <div className=" py-6 sm:px-6 lg:px-8 w-5/6 float-left">{children}</div> 

      </section>}
      {loading && !session && <img src="/images/wait.gif" className="w-1/4 float-left" alt="" />}
      {!loading  && !session && <div><h1>gescom</h1></div> } */}
    </>
  );
};

export default Layout;
