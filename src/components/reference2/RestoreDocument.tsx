import { ReplyIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useRestoreDocumentMutation } from "config/rtk";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Modal from "widgets/Modal";
type RestoreDocumentPorp = {
    id: string;
};
const RestoreDocument = ({ id }: RestoreDocumentPorp, ref: Ref<void>) => {
    const [id0, setId0] = useState(id);
    //@ts-ignore
    const { register, handleSubmit } = useForm<string>({
        defaultValues: { id0 },
    });
    const [restore] = useRestoreDocumentMutation();
    const [showModal, setShowModal] = React.useState(false);
    const openModal = (i: string) => {
        setId0(i);
        setShowModal(true);
    };
    const close=()=>{
        setShowModal(false);
    }
    useEffect(() => {
        //@ts-ignore
        ref.current = openModal;
    });
    const restoreTemp = () => {
        axios
            .patch("http://localhost:1000/api/v1/documents/" + id0 + "/restore")
            .then(() => { });
    };
    return (
        <>
            <Modal title={"restoration"} show={showModal} format={5} close={close}>
                <div>
                    <h2>restoration du Document num: {id0}</h2>
                    <form
                        onSubmit={
                            //@ts-ignore
                            handleSubmit(restoreTemp)
                        }
                    >
                        {" "}
                        <input type="hidden" {...register("id")} />
                        <Bcyan
                            type="submit"
                            className="mt-2 float-right"
                            onClick={() => {
                                setTimeout(() => {
                                    setShowModal(false);
                                }, 500);
                            }}
                        >
                           Restorer
                        </Bcyan>
                    </form>
                    <Bred
                        className="mt-2 float-right"
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                       Annuler
                    </Bred>
                </div>
            </Modal>
        </>
    );
};

export default forwardRef(RestoreDocument);
