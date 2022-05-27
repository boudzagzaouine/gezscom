import { useAddFournisseurMutation, useEditFournisseurMutation } from "config/rtk";
import { openDevises } from "config/rtk/rtkDevise";
import { openIncoterms } from "config/rtk/rtkIncoterm";
import { openPayementModes } from "config/rtk/rtkPayementMode";
import React, {useState} from "react";
import { DEVISE, ICOTERM, PAYMENT_CHOICE, REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Devise, Fournisseur, Incoterm, PayementMode } from "tools/types";
import { Field, Form } from "widgets";
import Avatar from "widgets/Avatar";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bsave from "widgets/Bsave";
import Section from "widgets/Section";
import ListCommandeFournisseur from "./ListCommandeFournisseur";

type FormFournisseurManagerProp = {
    closed:()=> void;
    fournisseur: Fournisseur;
    request: number;
    disable: boolean;
};
const FormFournisseurManager = ({
    closed,
    fournisseur,
    request,
    disable,
}: FormFournisseurManagerProp) =>{
    const [save] = useAddFournisseurMutation();
    const [edit] = useEditFournisseurMutation();
    const tabDevises: Devise[] = openDevises().data.content;
    const devises: string[] = tabDevises?.map((d) => d.symbole);
    const tabIncoterms: Incoterm[] = openIncoterms().data.content;
    const tabPayementModes: PayementMode[] = openPayementModes().data.content;
    const incoterms = tabIncoterms?.map((d) => d.code);
    const payementModes = tabPayementModes?.map((d) => d.code);
    const onSubmit = request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit: undefined;
    const[disabled, setDisabled]=useState(disable);
    return(
        <Section>
                <Form defaultValues={fournisseur} onSubmit={onSubmit}>
                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && <Field type="hidden" name="id"/>}
                            <Field label="Nom du fournisseur" name="raisonSociale" disabled={disabled}/>
                            <Field label="Contact" name="contact" disabled={disabled}/>
                            <Field label="Téléphone" name="tel" disabled={disabled}/>
                            <Field label="Email" name="email" disabled={disabled}/>
                            <Field label="Adresse" name="adresse" as="textarea" disabled={disabled}/>
                        </div>
                        <div className="float-left w-1/2">
                            <Field label="Mode de Réglement" name="modeDeReglements" as="select" options={payementModes} disabled={disabled}/>
                            <Field label="Incoterm" name="incoterm" as="select" options={incoterms} disabled={disabled}/>
                            <Field label="Devise" name="devise" as="select" options={devises} disabled={disabled}/>
                             <Field label="Entrer les coordonnées bancaires du fournisseur " type="checkbox" disabled={disabled}/>
                            <Field label="Banque" name="nomBanque" disabled={disabled}/>
                            <Field label="RIB" name="ribBanque" disabled={disabled}/>
                            <Field label="SWIFT" name="swift" disabled={disabled}/>
                        </div>
                    </div>
                    <div className="float-left w-1/6">
                        <Avatar />
                    </div>
                    <Bsave
              type="submit"
              className="float-right mt-5 b-ajust-r"
              onClick={() => {
                setTimeout(() => {
                  closed();
                }, 500);
              }}
            />
           </Form>
          <Bcancel
            className="float-right mt-5 b-ajust"
            onClick={() => {
              closed();
            }}
          />        
        {disabled && (<ListCommandeFournisseur fournisseur={fournisseur} />)}            
        </Section>
    );
};
export default FormFournisseurManager;