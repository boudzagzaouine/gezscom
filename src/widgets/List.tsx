import { OpenCommandeByClientProp, openCommandesByClient, useFetchcommandesByIdClientQuery } from "config/rtk/RtkCommande";
import React, { useRef, useState } from "react";
import { DateFormat } from "tools/Methodes";
import { Client, cm0, Commande, IdsObject } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";

type ListProp = {
  head:string[]
  body:string[]
  list:IdsObject[]
};
const List = ({ head,body,list }: ListProp) => {
  const refCom = useRef(null);
  
  return (
    <>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(cm0,client);
        }}
      >
        Nouvelle commande
      </Bcyan>
     {/*  <FormCommande
add={save}
edit={edit}
        command={cm1}
        ref={refCom}
        client={client}
        clients={[]}
        refetchList={refetchAll}
        disabled={false}
      /> */}
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            {head?.map((h)=>(<Table.th>{h}</Table.th>))}
          </tr>
          
        }
      >
        {list?.map((l)=>(<tr key={l.id}>{
          //@ts-ignore
        body?.map((b:string)=>(<Table.td>{b.split("#")[1]=="attr"?l[b.split("#")[0]]:b.split("#")[1]=="date"?DateFormat(l[b.split("#")[0]]):b.split("#")[1]=="atutr"?l[b.split("#")[0]]:b.split("#")[1]=="join"?b.split("#")[2]:""}</Table.td>))
        }</tr>))}
      </Table>
    </>
  );
};
//b.split("#")[1]=="date"?DateFormat(l[b.split("#")[0]]):l[b]
export default List;
