import { BriefcaseIcon, SaveIcon, XCircleIcon } from "@heroicons/react/solid";
import { useAddCommandeMutation, useFetchClientsQuery } from "config/rtk";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import { STYLE_ICON, style_icon, style_span } from "tools/constStyle";
import { AdressLiv, c0, Client, Commande, getClient, initSel, initSelObj } from "tools/types";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Modal from "widgets/Modal";
import NavTabs from "widgets/NavTabs";
import { MenuNavTabs } from "widgets/TypeWidgets";
import ArticlesCommande from "./ArticlesCommande";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Bsave from "widgets/Bsave";
import Bcancel from "widgets/Bcancel";
import { openClients } from "components/manager/client/openClient";
type CommandProps = {
  command: Commande;
};

const FormCommande = ({ command }: CommandProps, ref: Ref<void>) => {
  const [showModal, setShowModal] = React.useState(false);
  const [command0, setCommand0] = useState(command);
  const clients:Client[]=openClients()
  const openModal = (c: Commande) => {
    setCommand0(c);
    setShowModal(true);
  };
  const save=()=>{}
  const close=()=>{
    setShowModal(false);
  }
  useEffect(() => {
   //@ts-ignore
    ref.current = openModal;
  });
  const commanndes: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Articles de la commande</span>
        </>
      ),
      featured: <ArticlesCommande idCommande={command0.id} />,
    },
  ];
    return (
    <Modal title={command0.id===""?"Nouvelle commande":"Mise à jour de la commande"} 
    show={showModal} format={5} close={close}>
      <Form defaultValues={command0} onSubmit={save}>
        {({ watch }) => {
          
          //@ts-ignore
          const idClient = watch("idClient");
          const client: Client =c0;
          const adressLivs: string[] =["","gogo","jojo"];
          console.log(idClient);
          return (
            <>
              <div className="float-left w-1/2">
                <Field type="hidden" name="idClient" />
                {command0.idClient != "" ? (
                  <>
                    <Field type="hidden" name="idClient" />
                    <Field label="Client" value={client} />
                  </>
                ) : (
                  <Field
                    label="Client"
                    name="idClient"
                    as="select"
                    options={[c0,...clients]}
                    optionLabelName="design"
                  />
                )}
                <Field label="id" name="id"  />
                <Field label="Date Commande" name="date" type="date"  />
             </div>
              <div className="float-left w-1/2">
                <Field
                  label="Adress de livraison"
                  name="adrLiv"
                  as="select"
                  options={adressLivs}
                />
                <Field label="Saison" name="season" />
              </div>
              <Bsave className="float-right mt-2 b-ajust-r" onClick={() => {
          setTimeout(() => {
            close();
          }, 600);
        }} />
              </>
          );
        }}
      </Form>
      <Bcancel
        className="float-right mt-2 b-ajust"
        onClick={() => {
          close();
        }}
      />
     <NavTabs tab={commanndes} />     
    </Modal>
  );
};

export default forwardRef(FormCommande);
