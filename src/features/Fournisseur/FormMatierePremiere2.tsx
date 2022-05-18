import { openFournisseurs } from "components/Fournisseur/openFournisseur";
import { useAddMatierePremiereMutation, useFetchMatierePremiereQuery } from "config/rtk";
import React, { forwardRef, Ref, useEffect, useState,ChangeEvent,useRef } from "react";
import { LIST_FAMILLE_MATIERE_PREMIERE, ORIGINE } from "tools/consts";
import { Fournisseur, MatierePremiere,f0 } from "tools/types";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Modal from "widgets/Modal";

type MatierePremiereProps={
    Matierep:MatierePremiere
}

const FormMatierePremiere = ({Matierep}:MatierePremiereProps,ref: Ref<void>) => {
    const [showModal, setShowModal] = React.useState(false);
    const [matiere0,setMatiere0]=useState(Matierep)
    const [fournisseur0,setFournisseur0]=useState<Fournisseur>(f0)
    const { data = [], isFetching, refetch } = useFetchMatierePremiereQuery();
    //@ts-ignore
    const [fournisseurs,setFournisseurs]=useState(data?.content)
    const fournisseur:Fournisseur[]=openFournisseurs();
     //@ts-ignore
    const [idFournisseurs,setidFournisseurs]=useState(fournisseurs?.map(x=>x.raisonSociale))
    const [save]=useAddMatierePremiereMutation();
    const openModal = (m: MatierePremiere) => {
    setMatiere0(m)
    setShowModal(true);
  };
  const close=()=>{
    setShowModal(false);
  }
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
    matiere0.idFournisseur=fournisseur0.id
  });
  const fieldIdFourn = useRef(null)
  return (
    <Modal title={"Nouvelle Matiére premiére"} show={showModal} format={5} close={close}>
<Form defaultValues={matiere0} onSubmit={save}>

            <>
  <div className="mt-1">
<Field label="idFournisseur" name="idFournisseur"  ref={fieldIdFourn} />
{ Matierep.fournisseur.id!=""?(
  <>
 <Field label="Fournisseur" name="id" value={Matierep.fournisseur.id}  />
 </>
):
<>
{/*<Field 
label="Fournisseuir" 
name="idFournisseur" 
as ="select" 
options={fournisseur?.map((f:Fournisseur)=>(f.raisonSociale))} 
optionLabelName="raisonSociale"
/>*/}
<Field label="Fournisseur" 
name="idFournisseur" 
as ="select" options={[f0,...fournisseur]} optionLabelName="raisonSociale" />

 
{/*<Field
                    label="test fournisseur"
                    name="cococo"
                    as="select"
                    onChange={
                      (e:any)=>{
                        let f:Fournisseur = JSON.parse(e.target.value)
                        setFournisseur0(f)
                        //@ts-ignore
                        fieldIdFourn.current.value=f.id
                        
                      }
                    }
                  >
                  {[f0,...fournisseur||[]].map((c:Fournisseur)=>(
                    <option value={JSON.stringify(c)}>{c.raisonSociale}</option>
                  ))}
                  </Field>*/}
</>

}

<Field label="Désignation" name="designation"  />
<Field label="Famille matiére premiére" name="familleMatierePremiere" as="select" options={LIST_FAMILLE_MATIERE_PREMIERE}/>
<Field label="Prix" name="prix" />
<Field label="Origine" name="origine" as="select" options={ORIGINE}/>
{/* <DatePicker className="border-[#f00]" selected={startDate} onChange={(date:any) => setStartDate(date)} /> */}
</div>
<Bcyan className="float-right mt-2" onClick={()=>{setShowModal(false)}} >
Annuler
</Bcyan>
<Bcyan className="float-right mt-2" >
 Sauvegarder
 </Bcyan> 
  </>
   
</Form>
   </Modal>
  )
}

export default forwardRef(FormMatierePremiere)