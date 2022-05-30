import React, { ChangeEvent, forwardRef, Ref, useEffect, useState } from 'react'
import { adr0, AdressLiv, c0, Client, cm0, Commande } from 'tools/types'
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
import NavTabs from 'widgets/NavTabs';
import { BriefcaseIcon } from '@heroicons/react/solid';
import { style_icon, style_span } from 'tools/constStyle';
import ListArticleCommandes from './ListArticleCommandes';
type FormCommandeProp={
  command:Commande
  client:Client
  clients:Client[]
 refetchList:()=>void
  add:()=>void
  edit:()=>void
}
const FormCommande = ({command,add,edit,refetchList,client,clients}:FormCommandeProp,ref:Ref<void>) => {
  const [showModal, setShowModal] = useState(false);
  const [command0, setCommand0] = useState(command);
  const [client0,setClient0] =useState(client)
  const [clients0,setClients0] =useState(clients)
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
<div className="float-left w-1/2 relative">
{command0.idClient!=""?
<Field label="Client" value={client0?.design} />:
<Field
                label="Client"
                name="client__"
                as="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  let c: Client = JSON.parse(e.target.value);
                  setClient0(c);
                }}
              >
                {[c0, ...(clients0 || [])]?.map((c: Client) => (
                  <option value={JSON.stringify(c)}>{c.design}</option>
                ))}
              </Field>}
              <Field
              label="Date Commande"
              name="date33"
              value={dateFormat(startDate, "dd-mm-yyyy")}
              onFocus={() => {
                setOpenCalendar(true);
              }}
            />
           {openCalendar && (
              <DatePicker
                selected={startDate}
                name="date11"
                onChange={(d: Date) => {
                  setStartDate(d);
                  setCommand0({...command0,date:d})
                  setOpenCalendar(false);
                }}
                dateFormat="dd-MM-yyyy"
                calendarContainer={Calendar}
                inline
              />
            )}
</div>
<div className="float-left w-1/2">
  <Field  label="Adress de livraison1"
              name="adrLiv1"
              />
              <span>coco:{command0.adrLiv}</span>
              <Field
              label="Adress de livraison2"
              name="adrLiv2"
              as="select"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setCommand0({...command0,adrLiv:e.target.value})
               }}
            >
              {[adr0, ...(adressLivs || [])]?.map((c: AdressLiv) => (
                  <option value={c.adress}>{c.adress}</option>
                ))}
            </Field>
            <Field
              label="Adress de livraison3"
              name="adrLiv"
              as="select"
              value={command0.adrLiv}
              options={[adr0, ...(adressLivs || [])]} 
              optionKeyName="adress"
              optionLabelName="adress"
            />
           <Field label="Saison" name="season" />
          </div>
          <Bsave
            className="float-right mt-5 b-ajust-r"
            onClick={() => {
              setTimeout(() => {
                refetchList();
                close();
              }, 600);
            }}
          />
     </Form>
      <Bcancel
        className="float-right mt-5 b-ajust"
        onClick={() => {
          close();
        }}
      />
{command0.id != "" && <NavTabs tab={[
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Articles de la commande</span>
        </>
      ),
      featured: <ListArticleCommandes idClient={client0.id} idCommande={command0.id} />,
    },
  ]} />}
        </Modal>
  )
}

export default forwardRef(FormCommande)