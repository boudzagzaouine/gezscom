import { BriefcaseIcon } from "@heroicons/react/solid";
import { openFournisseurs ,OpenFournisseurProp} from "config/rtk/rtkFournisseur";
import { useAddCommandeFournisseurMutation, useEditCommandeFournisseurMutation } from "config/rtk";
import React, { ChangeEvent, forwardRef, Ref, useEffect, useState } from "react";
import { style_icon, style_span } from "tools/constStyle";
import { CommandeFournisseur, f0, Fournisseur, getFournisseur } from "tools/types";
import { Field, Form } from "widgets";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bsave from "widgets/Bsave";
import Modal from "widgets/Modal";
import NavTabs from "widgets/NavTabs";
import { MenuNavTabs } from "widgets/TypeWidgets";
import FormLigneDeCommande from "./FormLigneDeCommande";

type CommandesProps={
    command:CommandeFournisseur;
}

const FormCommandes = ({command}:CommandesProps,ref: Ref<void>) => {
  const [showModal, setShowModal] = React.useState(false);
  const [command0,setCommand0]=useState(command)
  const fournisseursOpen:OpenFournisseurProp=openFournisseurs()
  const fournisseurs:Fournisseur[]=fournisseursOpen.data.content
  const add=fournisseursOpen.save;
  const edit=fournisseursOpen.edit;
  
  const openModal = (c: CommandeFournisseur) => {
    setCommand0(c)
    setShowModal(true);
  };
 const save=command0.id==""?add:edit
  const close=()=>{
    setShowModal(false);
  }
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  const  commandes: MenuNavTabs[]= [
    {
      id:1,
      name: (<><BriefcaseIcon className={style_icon} aria-hidden="true" /><span className={style_span}>Matières Premières</span></>),
      featured: (<FormLigneDeCommande idCommandeFournisseur={command0.id}/>),
    },
        ]  
  return (
    <Modal title={command0.id===""?"Nouvelle Commande Fournisseur":"Mise à jour de la commande"} show={showModal} format={5} close={close}>

<Form defaultValues={command0} onSubmit={save}>
{({  watch }) => {
  //@ts-ignore
          const idFournisseur = watch("idFournisseur");
          const raisonsoc=watch("dateCommande");
          const fournisseur:Fournisseur=f0;
          console.log(idFournisseur)
          console.log(raisonsoc)
          console.log(command0)
          return (
            <>
  <div className="mt-1">
<Field type="hidden"  name="idFournisseur"  />
{ command0.idFournisseur!=""?(
  <>
  <Field type="hidden" name="idFournisseur"/>
  <Field label="Fournisseur" value={raisonsoc}/>
  </>
):
<Field label="Fournisseur" 
name="idFournisseur" 
as ="select" options={[f0,...fournisseurs]} optionLabelName="raisonSociale" />
}
<Field label="Date Livraison *" name="dateLivraison"  type="date"/>
<Field label="Date Commande *" name="dateCommande" type="date" />

{/* <DatePicker className="border-[#f00]" selected={startDate} onChange={(date:any) => setStartDate(date)} /> */}
</div>
{/*<Bcyan className="float-right mt-2" onClick={()=>{setShowModal(false)}} >
Annuler
</Bcyan>
<Bcyan className="float-right mt-2" >
 Sauvegarder
</Bcyan> */}<Bsave className="float-right mt-2 b-ajust-r" onClick={() => {
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
 <NavTabs tab={commandes} /> 
   </Modal>
  )
}

export default forwardRef(FormCommandes)