import React, { forwardRef, Ref, useEffect, useState } from 'react'
import { AdressLiv, Client, Commande } from 'tools/types'
//@ts-ignore
import dateFormat from "dateformat";
import DatePicker from "react-datepicker";
import Calendar from "widgets/Calendar";
import { Field, Form } from 'widgets';
import Bsave from 'widgets/Bsave';
import Bcancel from 'widgets/Bcancel';
import Modal from 'widgets/Modal'
import { openAdressLivByIdClientProps } from 'components/manager/client/openAdressLivByIdClient';
import { openAdressLivsByIdClient } from 'config/rtk/RtkAdressLiv';
type FormCommandeProp={
  command:Commande
  client:Client
 refetchList:()=>void
  add:()=>void
  edit:()=>void
}
const FormCommandeClient = ({command,add,edit,refetchList,client}:FormCommandeProp,ref:Ref<void>) => {
  const [showModal, setShowModal] = useState(false);
  const [command0, setCommand0] = useState(command);
  const [client0,setClient0] =useState(client)
  const adressLivsToOpen: openAdressLivByIdClientProps =
  openAdressLivsByIdClient(client0?.id);
const adressLivs: AdressLiv[] = adressLivsToOpen.data;
  const [startDate, setStartDate] = useState(command0.date);
  const [openCalendar, setOpenCalendar] = useState(false);
  const openModal = (c: Commande,cl:Client) => {
    setCommand0(c);
    setClient0(cl)
    setShowModal(true);
  };
  const save = command0.id == "" ? add : edit;
  const close = () => {
    setShowModal(false);
  };
  useEffect(()=>{
 //@ts-ignore
 ref.current = openModal;
  })

  return (
    <Modal close={close} format={5} show={showModal} title={command0.id === "" ? "Nouvelle commande" : "Mise à jour de la commande"} >
<Form defaultValues={command0} >
<Field label="Client" value={client0?.design} />
</Form>
    </Modal>
  )
}

export default forwardRef(FormCommandeClient)