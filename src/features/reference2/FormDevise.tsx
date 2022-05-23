import {
    PencilAltIcon
} from "@heroicons/react/solid";
import { useAddDeviseMutation, useEditDeviseMutation } from "config/rtk";
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
import { Devise } from 'tools/types';

type FormDeviseManagerProp = {
    closed: () => void;
    Devise: Devise;
    request: number;
    disable: boolean;
    imputFocus: any
};
const FormDeviseManager = ({
    closed,
    Devise,
    request,
    disable,
    imputFocus
}: FormDeviseManagerProp) => {
    const [save] = useAddDeviseMutation();
    const [edit] = useEditDeviseMutation();
    const onSubmit =
        request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
    const [disabled, setDisabled] = useState(disable);
    const text = "nouveau"
    const text1 = "modifier"
    return (
        <Section>
            <div className="float-left w-full text-xs">
                {/*  @ts-ignore*/}
                <Form defaultValues={Devise} onSubmit={onSubmit}>
                    {request == REQUEST_SAVE ? <h1 className="mb-2">{text} devise </h1> : <h1 className="mb-2">{text1} devise </h1>}
                  
                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                            <Field ref={imputFocus} label="designation" name="designation" disabled={disabled} />
                            <Field label="code_iso" name="code_iso" disabled={disabled} />
                            <Field label="symbole" name="symbole" disabled={disabled} />
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
                       modifier
                    </Bcyan>
                )}
            </div>
        </Section>
    );
};

export default FormDeviseManager;
