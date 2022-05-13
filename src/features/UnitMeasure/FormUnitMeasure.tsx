import React, { forwardRef, Ref, useEffect, useState } from "react";
import { UnitMeasure } from "tools/types";
import { DECIMAL, REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Form, Field } from "widgets";
import Section from "widgets/Section";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";

type FormUnitMeasureProps = {
    //closed: () => void;
    unitMeasure: UnitMeasure;
    request: number;
    disable: boolean;
};
const FormUnitMeasure = ({
    //closed,
    unitMeasure,
    request,
    disable,
}: FormUnitMeasureProps, ref: Ref<void>) => {
    //const [save] = useAdd();
    //const [edit] = useEdit();
    //const onSubmit =
    // request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? edit : undefined;
    const [disabled, setDisabled] = useState(disable);

    const [show, setShow] = useState(false);
    const open = () => {
        setShow(true);
    }
    useEffect(() => {
        //@ts-ignore
        ref.current = open;
    })
    return (

        <Modal show={show} title="Nouvelle Unité de Mesure" format={3}>
            <div className="float-left w-full">
                <Form defaultValues={unitMeasure}>
                    <div className="float-left w-full">
                        {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                        <Field label="Designation" name="design" disabled={disabled} />

                        <div className="float-left w-full">
                            <div className="float-left w-1/2">
                                <Field label="Symbole" name="symbole" disabled={disabled} />
                            </div>
                            <div className="float-left w-1/2">
                                <Field
                                    label="Decimal"
                                    name="decimal"
                                    options={DECIMAL}
                                    as="select"
                                    disabled={disabled}
                                />
                            </div>
                        </div>
                    </div>

                </Form>
                <Bcyan onClick={() => {
                    setShow(false)
                }}>
                    annuler
                </Bcyan>
            </div>
        </Modal>

    );

};

export default forwardRef(FormUnitMeasure);

