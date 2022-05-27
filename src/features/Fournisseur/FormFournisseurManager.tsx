import { useAddFournisseurMutation, useEditFournisseurMutation } from "config/rtk";
import React, {useState} from "react";
import { DEVISE, ICOTERM, PAYMENT_CHOICE, REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Fournisseur } from "tools/types";
import { Field, Form } from "widgets";
import Avatar from "widgets/Avatar";
import Bcyan from "widgets/Bcyan";
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
    const onSubmit = request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit: undefined;
    const[disabled, setDisabled]=useState(disable);
    return(
        <Section>
            <div className="float-left w-full text-xs">
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
                            <Field label="Mode de Réglement" name="modeDeReglements" as="select" options={PAYMENT_CHOICE} disabled={disabled}/>
                            <Field label="Incoterm" name="incoterm" as="select" options={ICOTERM} disabled={disabled}/>
                            <Field label="Devise" name="devise" as="select" options={DEVISE} disabled={disabled}/>
                            <input name="chek" type="checkbox" disabled={disabled}/>  Entrer les coordonnées bancaires du fournisseur
                            <Field label="Banque" name="nomBanque" disabled={disabled}/>
                            <Field label="RIB" name="ribBanque" disabled={disabled}/>
                            <Field label="SWIFT" name="swift" disabled={disabled}/>
                        </div>
                    </div>
                    <div className="float-left w-1/6">
                        <Avatar />
                    </div>
                    <div className="float-left w-full mt-5">
                        <Bcyan className="float-right" onClick={() => {closed();}}>
                            Annuler
                        </Bcyan>
                        {!disabled  &&  
                        <Bcyan className="float-right" onClick={() => {setTimeout(() => {closed();}, 500);}}>
                            Sauvegarder
                        </Bcyan>
                        }
                        {disabled && (
                        <Bcyan className="float-right" onClick={() => {setDisabled(false);}}>
                            Modifier
                        </Bcyan>
                        )} 
                        {/*!disabled && request == REQUEST_SAVE && (
                        <Bcyan className="float-left" type="submit">
                            Sauvegarder et Nouveau
                        </Bcyan>
                        )*/}
                    </div>
                </Form>             
            </div>
        {disabled && (<ListCommandeFournisseur fournisseur={fournisseur} />)}            
        </Section>
    );
};
export default FormFournisseurManager;