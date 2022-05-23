import { useAddVilleMutation, useEditVilleMutation } from "config/rtk";
import React, { useEffect, useRef, useState } from "react";
import {
    PAYS_CHOICE,
    REQUEST_EDIT,
    REQUEST_SAVE
} from "tools/consts";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Ville } from 'tools/types';

type FormVilleManagerProp = {
    closed: () => void;
    Ville: Ville;
    request: number;
    disable: boolean;
};
const FormVilleManager = ({
    closed,
    Ville,
    request,
    disable,
}: FormVilleManagerProp) => {
    const [save] = useAddVilleMutation();
    const [edit] = useEditVilleMutation();
    const onSubmit =
        request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
    const [disabled, setDisabled] = useState(disable);
    const text = "nouveau"
    const text1 = "modifier"
    const imputFocus = useRef(null)
    useEffect(() => {
        /*  @ts-ignore*/
        imputFocus.current.focus()
    }, [])
    return (
        <Section>
            <div className="float-left w-full text-xs">
                {/*  @ts-ignore*/}
                <Form defaultValues={Ville} onSubmit={onSubmit}>
                    {request == REQUEST_SAVE ? <h1 className="mb-2">{text} ville </h1> : <h1 className="mb-2">{text1} ville </h1>}

                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                            <Field ref={imputFocus} label="designation" name="concat" disabled={disabled} />
                            <Field
                                label="PAYS"
                                name="paymentChoice"
                                options={PAYS_CHOICE}
                                as="select"
                                disabled={disabled}
                            />
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

export default FormVilleManager;
