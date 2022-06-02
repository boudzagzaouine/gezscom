import React, { useRef, useState } from 'react';
import { ARCHIVE, DEL, RESTORE } from 'tools/consts';
import { DateFormat } from 'tools/Methodes';
import { IdsObject } from 'tools/types';
import Bcyan from 'widgets/Bcyan';
import Table from 'widgets/Table';

import Action from './Action';
import Bcancel from './Bcancel';
import Bsave from './Bsave';
import BsavEndNew from './BsavEndNew';
import { Field } from './Field';
import { Form } from './Form';
import MitemsRef from './MitemsRef';
import ModalS from './ModalS';
import Section from './Section';

type ListProp = {
  title:string
  mal:boolean
  body:string[]
  list:IdsObject[]
  emptyObject:IdsObject
  save:()=>void
  edit:()=>void
  refetch:()=>void
  /* path:string 
  title:string */
};
const List = ({title, mal,body,list,emptyObject,save,edit,refetch }: ListProp) => {
  const refCom = useRef(null);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);
  const [show,setShow]=useState(false)
  const [object,setObject]=useState(emptyObject)
  const close=()=>{
    setShow(false)
  }
  const open = (u: IdsObject) => {
    setShow(true)
    setObject(u)
   };
  return (
    <Section>
      <Action id="" path="unitMeasures" design="" type="Unité de Mesure" ref={del} action={DEL} />
          <Action id="" path="unitMeasures" design="" type="Unité de Mesure" ref={archive} action={ARCHIVE} />
          <Action id="" path="unitMeasures" design="" type="Unité de Mesure" ref={restore} action={RESTORE} />
        
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          open(emptyObject);
        }}
      >
       {(mal?"Nouveau ":"Nouvelle ")+title}
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
            {body?.map((b)=>(<Table.th>{b.split("#")[0]}</Table.th>))}
            <Table.th></Table.th>
          </tr>
          
        }
      >
        {list?.map((l)=>(<tr key={l.id}>{
          //@ts-ignore
        body?.map((b:string)=>(<Table.td>{b.split("#")[2]=="attr"?l[b.split("#")[1]]:b.split("#")[2]=="date"?DateFormat(l[b.split("#")[1]]):b.split("#")[2]=="atutr"?l[b.split("#")[1]]:b.split("#")[2]=="join"?b.split("#")[3]:""}</Table.td>)
        )
        }
        <Table.td>
        <MitemsRef
                        archive={() => {
                          //@ts-ignore
                          archive.current(l.id, l.design);
                        }}
                        del={() => {
                          //@ts-ignore
                          del.current(l.id, l.design);
                        }}
                        obj={l}
                        update={() => {
                          open(l);
                        }}
                      />
        </Table.td>
        </tr>))}
      </Table>
      <ModalS
        show={show}
        title={""}
        format={5}
        close={close}
      >
        <div className="float-left w-full text-sm">
                  <Form
            defaultValues={object}
            onSubmit={object.id==""?save:edit}
          >
           {body?.map((b:string)=>(<Field label={b.split("#")[0]} name={b.split("#")[1]} disabled={false} />))}  
            
            <div className="mt-5 b-ajust-r">
                     <Bsave
            className="float-right"
            onClick={() => {
              setTimeout(() => {
                refetch();
                close();
              }, 500);
            }}
          />
          <BsavEndNew
                   className="ml-10 mr-2"
                   onClick={() => {
                     setTimeout(() => {
                     refetch();
                       }, 500);
                   }}
                />
               
              </div>
        
          </Form>
               <Bcancel
               className="float-right mt-5 b-ajust"
               onClick={() => {
                 setShow(false);
               }}
             />
          </div>
      </ModalS>
    </Section>
  );
};
//b.split("#")[1]=="date"?DateFormat(l[b.split("#")[0]]):l[b]
export default List;
