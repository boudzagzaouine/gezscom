import React, { ChangeEvent, forwardRef, Ref, useEffect, useState } from 'react'
import { Article, article0, ArticleClient, Client, f0, Fournisseur } from 'tools/types'
import Modal from 'widgets/Modal'
//@ts-ignore
import dateFormat from "dateformat";
import DatePicker from "react-datepicker";
import Calendar from "widgets/Calendar";
import { Field, Form } from 'widgets';
import Bsave from 'widgets/Bsave';
import Bcancel from 'widgets/Bcancel';
import { OpenFournisseurProp, openFournisseurs } from 'config/rtk/rtkFournisseur';
import { openArticles } from 'config/rtk/rtkArticle';
import { OpenArticleProp } from "features/reference/Article/Methods/openArticles";
type FormArticleClientProp={
  articleclient:ArticleClient
  client:Client
  refetchList:()=>void
  add:()=>void
  edit:()=>void
}
const FormArticleClient = ({articleclient,client,refetchList,add,edit}:FormArticleClientProp,ref:Ref<void>) => {
  const [showModal, setShowModal] = useState(false);
  const [client0,setClient0]=useState(client)
  const [articleclient0, setArticleclient0] = useState(articleclient);
  const [startDate, setStartDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const openModal = (a: ArticleClient, cl: Client) => {
    setArticleclient0(a);
    setClient0(cl)
    setShowModal(true);
  };
  const fournisseursOpen: OpenFournisseurProp=openFournisseurs() 
  const fournisseurs:Fournisseur[]=fournisseursOpen.data.content
  const famillArticlesOpen: OpenArticleProp=openArticles ()
  const famillArticles:Article[]=famillArticlesOpen.data.content
  const save = articleclient0.id == "" ? add : edit;
  const close = () => {
    setShowModal(false);
  };
  useEffect(()=>{
 //@ts-ignore
 ref.current = openModal;
  })
  const getArticleClient=(date:Date,idclient:string):ArticleClient=> ({
    id:"",
    design:"",
    poid:0,
    prix:0,
   date:date,
    idClient:idclient,
    idFamilleArticle:"",
    idFournisseur:"",
    })
  return (
    <Modal
    title={
      articleclient0.id === "" ? "Nouvel article client" : "Mise à jour de l'article client"
    }
    show={showModal}
    format={5}
    close={close}
  >
 <Form defaultValues={getArticleClient(startDate, client0?.id)} onSubmit={save}>
        <>
          <div className="float-left w-1/2 relative">
            <Field
              type="hidden"
              name="idClient"
              value={client0?.id}
             />
             <Field label="Client" value={client0?.design} />
            <Field type="hidden" name="id" value={articleclient0.id} />
          
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
                onChange={(date: Date) => {
                  setStartDate(date);
                  //  command0.date=startDate
                  setOpenCalendar(false);
                }}
                dateFormat="dd-MM-yyyy"
                calendarContainer={Calendar}
                inline
              />
            )}
          </div>
          <div className="float-left w-1/2">
            <Field
              label="Fournisseur"
              name="idFournisseur"
              as="select"
              optionLabelName="raisonSociale"
              optionKeyName="id"
              options={[f0, ...(fournisseurs || [])]}
            />
            <Field
              label="Famille Article"
              name="idFamilleArticle"
              as="select"
              optionLabelName="design"
              optionKeyName="id"
              options={[article0, ...(famillArticles || [])]}
            />
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
        </>
      </Form>
      <Bcancel
        className="float-right mt-5 b-ajust"
        onClick={() => {
          close();
        }}
      />
  </Modal>
  )
}

export default forwardRef(FormArticleClient)