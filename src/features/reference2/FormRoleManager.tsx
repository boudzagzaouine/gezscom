import {
    PencilAltIcon
} from "@heroicons/react/solid";
import { useAddRoleMutation, useEditRoleMutation } from "config/rtk";
import React, { useState } from "react";
import {
    REQUEST_EDIT,
    REQUEST_SAVE
} from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Role } from 'tools/types';
type FormRoleManagerProp = {
    closed: () => void;
    Role: Role;
    request: number;
    disable: boolean;
};
const FormRoleManager = ({
    closed,
    Role,
    request,
    disable,
}: FormRoleManagerProp) => {

    const [save] = useAddRoleMutation();
    const [edit] = useEditRoleMutation();
    const onSubmit =
        request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
    const [disabled, setDisabled] = useState(disable);
    const text = "nouveau"
    const text1 = "modifier"
    return (
        <Section>
            <div className="float-left w-full text-xs">
                {/*  @ts-ignore*/}
                <Form defaultValues={Role} onSubmit={onSubmit}>
                    {request == REQUEST_SAVE ? <h1 className="mb-2">{text} role </h1> : <h1 className="mb-2">{text1} role </h1>}
               
                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                            <Field style={{ margin: ".4rem" }} label="designation" name="designation" disabled={disabled} />
                            <fieldset style={{ background: "none", border: "2px solid black" }} >
                                <legend style={{ padding: "10px" }}>fonctionalités</legend>
                                <div className="ml-8 p-4">
                                    <div >
                                 <input
                                    id="gestions_des_clients"
                                    nombre-colonnes="2"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                 />
                                    <label htmlFor="gestions_des_clients" className="font-medium text-gray-700">gestions des clients</label>
                                
                                    </div>
                                    <ul>
                                        <li className="ml-8">
                                            <input
                                                id="supression_clients"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression_clients" className="font-medium text-gray-700">supression clients</label>
                                        </li>
                                        <li className="ml-8">
                                            <input
                                                id="supression_commande_clients"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression_commande_clients" className="font-medium text-gray-700">supression commande  client</label>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <input
                                            id="gestions des fournisseur"
                                            nombre-colonnes="2"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor="gestions des fournisseur" className="font-medium text-gray-700">gestions des fournisseur</label>
                                        </div>
                                    <ul>
                                        <li className="ml-8">
                                            <input
                                                id="supression fournisseur"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression fournisseur" className="font-medium text-gray-700">supression fournisseur</label>
                                        </li>
                                        <li className="ml-8">
                                            <input
                                                id="supression commande  fournisseur"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression commande  fournisseur" className="font-medium text-gray-700">supression commande  fournisseur</label>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <input
                                            id="gestions d'achats"
                                            nombre-colonnes="2"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor="gestions d'achats" className="font-medium text-gray-700">gestions d'achats</label>
                                    </div>
                                    <ul>
                                        <li className="ml-8">
                                            <input
                                                id="supression bon d'achats"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression bon d'achats" className="font-medium text-gray-700">supression bon d'achats</label>
                                        </li>
                                        <li className="ml-8">
                                            <input
                                                id="supression bon de retours"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="supression bon de retours" className="font-medium text-gray-700">supression bon de retours</label>
                                        </li>
                                    </ul>
                                 <div>
                                        <div className="mt-4">
                                            <input
                                                id="gestions des production"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="gestions des production" className="font-medium text-gray-700">gestions des production</label>
                                        </div>
                                        <ul>
                                            <li className="ml-8">
                                                <input
                                                    id="supression fiche de production"
                                                    nombre-colonnes="2"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="supression fiche de production" className="font-medium text-gray-700">supression fiche de production</label>
                                            </li>
                                            <li className="ml-8">
                                                <input
                                                    id="supression article"
                                                    nombre-colonnes="2"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="supression article" className="font-medium text-gray-700">supression article</label>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <input
                                                id="vente et facturation"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="vente et facturation" className="font-medium text-gray-700">vente et facturation</label>
                                        </div>
                                        <ul>
                                            <li className="ml-8">
                                                <input
                                                    id="supression de facturation"
                                                    nombre-colonnes="2"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="supression de facturation" className="font-medium text-gray-700">supression de facturation</label>
                                            </li>
                                            </ul>
                                        <div className="mt-4">
                                            <input
                                                id="gestions des utilisateurs"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="gestions des utilisateurs" className="font-medium text-gray-700">gestions des utilisateurs</label>
                                        </div>
                                        <ul>
                                            <li className="ml-8">
                                                <input
                                                    id="supression de utilisateur"
                                                    nombre-colonnes="2"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="supression de utilisateur" className="font-medium text-gray-700">supression de utilisateur</label>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <input
                                                id="gestions des colissage"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="gestions des colissage" className="font-medium text-gray-700">gestions des colissage</label>
                                        </div>
                                        <ul>
                                            <li className="ml-8">
                                                <input
                                                    id="supression de fiche colissage"
                                                    nombre-colonnes="2"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="supression de fiche colissage" className="font-medium text-gray-700">supression de fiche colissage</label>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <input
                                                id="gestions des table"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="gestions des table" className="font-medium text-gray-700">gestions des tables</label>
                                        </div>
                                        <div className="mt-4">
                                            <input
                                                id="Editions des En-tete"
                                                nombre-colonnes="2"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label htmlFor="Editions des En-tete" className="font-medium text-gray-700">Editions des En-tete</label>
                                        </div>
                                </div>
                                
                                </div>
                             
                            </fieldset>
                        </div>
                    </div>
                    <div className="float-left w-full mt-1">
                        {!disabled && (
                            <Bcyan
                                className="float-left"
                                onClick={() => {
                                    setTimeout(() => {
                                        closed();
                                    }, 500);
                                }}
                            >
                                sauvegarder
                            </Bcyan>
                        )}
                        {!disabled && request == REQUEST_SAVE && (
                            <Bcyan className="float-left" type="submit">
                                sauvegarder && nouveau
                            </Bcyan>
                        )}
                    </div>
                </Form>
                <Bred
                    className="float-right"
                    onClick={() => {
                        closed();
                    }}
                >
                    Annuler
                </Bred>
                {disabled && (
                    <Bcyan
                        className="float-right"
                        onClick={() => {
                            setDisabled(false);
                        }}
                    >
                        Modifier
                    </Bcyan>
                )}
            </div>
        </Section>
    );
};

export default FormRoleManager;
