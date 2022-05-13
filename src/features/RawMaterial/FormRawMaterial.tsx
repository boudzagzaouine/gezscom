import React, { forwardRef, Ref, useEffect, useState } from "react";
import { RawMaterial } from "tools/types";
import { FAMILLE, REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Form, Field } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";

type FormRawMaterialProps = {
    //closed: () => void;
    rawMaterial: RawMaterial;
    request: number;
    disable: boolean;
};
const FormRawMaterial = ({
    //closed,
    rawMaterial,
    request,
    disable,
}: FormRawMaterialProps, ref: Ref<void>) => {
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
        <Modal show={show} title="Nouvelle Famille Matière Première" format={3} >
            <div className="float-left w-full" >
                <Form defaultValues={rawMaterial}>
                    <div className="float-left w-full" >
                        {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                        <Field label="Designation" name="design" disabled={disabled} />

                        <div className="float-left w-full" >
                            <div className="float-left w-1/2" >
                                <Field label="Nomenclature" name="nomenclature" disabled={disabled} />
                                <div className="float-left w-1/2" >
                                    <Field
                                        label="Famille"
                                        name="famille"
                                        options={FAMILLE}
                                        as="select"
                                        disabled={disabled}
                                    />
                                </div>
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

export default forwardRef(FormRawMaterial);

