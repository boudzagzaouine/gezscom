import { useAddTransporteurMutation, useEditTransporteurMutation } from "config/rtk/rtkTransporteur";
import React, { useEffect, useRef, useState } from "react";
import {
    REQUEST_EDIT,
    REQUEST_SAVE
} from "tools/consts";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Section from "widgets/Section";
import { Transporteur } from 'tools/types';

type FormTransporteurManagerProp = {
    closed: () => void;
    Transporteur: Transporteur;
    request: number;
    disable: boolean;
};
const FormTransporteurManager = ({
    closed,
    Transporteur,
    request,
    disable,
}: FormTransporteurManagerProp) => {
    const [save] = useAddTransporteurMutation();
    const [edit] = useEditTransporteurMutation();
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
                <Form defaultValues={Transporteur} onSubmit={onSubmit}>
                    {request == REQUEST_SAVE ? <h1 className="mb-2">{text} Transporteur </h1> : <h1 className="mb-2">{text1} Transporteur </h1>}

                    <div className="float-left w-5/6">

                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                            <Field ref={imputFocus} label="designation" name="designation" disabled={disabled} />
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

export default FormTransporteurManager;
