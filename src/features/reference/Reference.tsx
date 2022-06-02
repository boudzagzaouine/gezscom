import { OpenIncotermProp, openIncoterms } from 'config/rtk/rtkIncoterm';
import { OpenPayementModeProp, openPayementModes } from 'config/rtk/rtkPayementMode';
import React from 'react';
import { payementMode0 } from 'tools/types';
import List from 'widgets/List';

type ReferenceProps={
  type:string
}
const Reference = ({type}:ReferenceProps) => {
  switch(type){
    case "payementMode":
      const payementModesToOpen: OpenPayementModeProp = openPayementModes();
      return<List title="mode de règlement" mal={true} body={["Désignation#design#attr","Code#code#attr"]}  list={payementModesToOpen.data.content} emptyObject={payementMode0} save={payementModesToOpen.save} edit={payementModesToOpen.edit} refetch={payementModesToOpen.refetch} />;  
    break;
    case "incoterm":
      const incotermsToOpen: OpenIncotermProp = openIncoterms();
      return<List title="incoterm" mal={true} body={["Désignation#design#attr","Code#code#attr"]}  list={incotermsToOpen.data.content} emptyObject={payementMode0} save={incotermsToOpen.save} edit={incotermsToOpen.edit} refetch={incotermsToOpen.refetch} />;  
    break;
  
    default:
    return <></>  
    break;
  }
 
};

export default Reference;
