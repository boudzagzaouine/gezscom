import { TrashIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import { useDeleteClientMutation } from "config/rtk/RtkClient";
import Modal from "widgets/Modal";
import { Field, Form } from "widgets";
import Bdel from "widgets/Bdel";
import { code0 } from "tools/types";
type DeleteClientPorp = {
  id: string;
};
const DeleteClient = ({ id }: DeleteClientPorp, ref: Ref<void>) => {
  const [del] = useDeleteClientMutation();
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const openModal = (i: string) => {
    setId0(i);
    setShowModal(true);
  };
  const close = () => {
    setShowModal(false);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  const [showModal, setShowModal] = React.useState(false);
  const delTemp = () => {
    axios.delete("http://localhost:1000/api/v1/clients/" + id0).then(() => {});
  };
  return (
    <>
      <Modal title={"suppression"} show={showModal} format={5} close={close}>
         <h2>suppression de client num: {id0}</h2>
         <Form
            defaultValues={code0}
            onSubmit={delTemp}
          >
           <Field
                type="hidden"
                name="id"
               />

            <Bdel
              type="submit"
              className="float-right mt-5 b-ajust-r"
              onClick={() => {
                setTimeout(() => {
                  close();
                }, 500);
              }}
            />
           </Form>
          <Bcancel
            className="float-right mt-5 b-ajust"
            onClick={() => {
              close();
            }}
          /></Modal>
    </>
  );
};

export default forwardRef(DeleteClient);
