import React, { forwardRef, Ref, useEffect, useState } from "react";
import { Incoterm } from "tools/types";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Form, Field } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";

type FormIncotermProps = {
    //closed: () => void;
    incoterm: Incoterm;
    request: number;
    disable: boolean;
};
const FormIncoterm = ({
    //closed,
    incoterm,
    request,
    disable,
}: FormIncotermProps, ref: Ref<void>) => {
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
        <Modal show={show} title="Nouveau Incoterm" format={3} >
            <div className="float-left w-full" >
                <Form defaultValues={incoterm}>
                    <div className="float-left w-full" >
                        {request == REQUEST_EDIT && <Field type="hidden" name="id" />}
                        <Field label="code" name="code" disabled={disabled} />

                        <div className="float-left w-full" >
                            <div className="float-left w-1/2" >
                                <Field label="Designation" name="design" disabled={disabled} />
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

export default forwardRef(FormIncoterm);

