import { BriefcaseIcon } from '@heroicons/react/solid'
import React, { forwardRef, Ref, useEffect, useState } from 'react'
import { Commande } from 'tools/types'
import { Field, Form } from 'widgets'
import Bred from 'widgets/Bred'
import Modal from 'widgets/Modal'
import NavTabs from 'widgets/NavTabs'
import { MenuNavTabs } from 'widgets/TypeWidgets'
import ListCommandes from './ListCommandes'
type CommandProps={
    command:Commande
}
const AddCommande = ({command}:CommandProps,ref: Ref<void>) => {
    const [showModal, setShowModal] = React.useState(false);
    const [command0,setCommand0]=useState(command)
  const openModal = (c: Commande) => {
    setCommand0(c)
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
 /*  const  commanndes: MenuNavTabs[]= [
    {
      id:1,
      name: (<><BriefcaseIcon className={style_icon} aria-hidden="true" /><span className={style_span}>Commandes Clients</span></>),
      featured: (<ListCommandes client={client}/>),
    },
        ]  */
  return (
    <Modal title={"restoration"} show={showModal}>

<Form defaultValues={command0}>
<div className="float-left w-1/2">
<Field label="Client" name="idClient"  />
<Field label="N°BC" name="design"  />
<Field label="Date de commande" name="date"  />
</div>
<div className="float-left w-1/2">
<Field label="Adress delivraison" name="adressLiv"  />
<Field label="Saison" name="design"  />
</div>
</Form>
{/* <NavTabs tab={commanndes} /> */}
<Bred onClick={()=>{setShowModal(false)}} >
close
</Bred>
    </Modal>
  )
}

export default forwardRef(AddCommande)