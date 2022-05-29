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
  useEffect(() => {
    refetchAdressLiv();
    refetchClient();
    //@ts-ignore
    ref.current = openModal;
  });
  const commanndes: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Articles de la Commande</span>
        </>
      ),
      featured: <ArticlesCommande idCommande={command0.id} />,
    },
  ];
  const fieldIdClient = useRef(null);
  const fieldAdressLiv = useRef(null);
  if (client0 == undefined && client?.id != "") {
    refetchAdressLiv();
    setTimeout(() => {
      setClient0(client);
    }, 200);
  }
  const getCommande = (date: Date, idclient: string): Commande => {
    return {
      id: command0.id,
      date: date,
      amount: command0.amount,
      season: command0.season,
      idClient: idclient,
      adrLiv: command0.adrLiv,
    };
  };
  return (
    <Modal
      title={
        command0.id === "" ? "Nouvelle commande" : "Mise à jour de la commande"
      }
      show={showModal}
      format={5}
      close={close}
    >
     <Form defaultValues={getCommande(startDate, idclient)} onSubmit={save}>
        <>
          <div className="float-left w-1/2 relative">
            <Field
              type="hidden"
              name="idClient"
              value={client0?.id}
              ref={fieldIdClient}
            />
            <Field type="hidden" name="id" value={command0.id} />
            {command0.idClient != "" ? (
              <>
                <Field label="Client" value={client0?.design} />
              </>
            ) : (
              <Field
                label="Client *"
                name="cococo"
                as="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  let c: Client = JSON.parse(e.target.value);
                  setClient0(c);
                }}
              >
                {[c0, ...(clients0 || [])]?.map((c: Client) => (
                  <option value={JSON.stringify(c)}>{c.design}</option>
                ))}
              </Field>
            )}
            <Field
              label="Date Commande *"
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
  <Field  label="Adress de livraison"
              name="adrLiv1"
              />
              <span>coco:{command0.adrLiv}</span>
            <Field
              label="Adresse de livraison *"
              name="adrLiv"
              as="select"
              optionLabelName="adress"
              optionKeyName="adress"
              options={[adr0, ...(adressLivs || [])]}
            />
            <Field label="Saison *" name="season" />
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