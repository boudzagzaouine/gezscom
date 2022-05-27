import { TrashIcon } from "@heroicons/react/outline";
import { ArchiveIcon, ReplyIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import { useRestoreClientMutation } from "config/rtk/RtkClient";
import Modal from "widgets/Modal";
import { code0 } from "tools/types";
import { Field, Form } from "widgets";
import Brestore from "widgets/Brestore";
type RestoreClientPorp = {
  id: string;
};
const RestoreClient = ({ id }: RestoreClientPorp, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const [restore] = useRestoreClientMutation();
  const [showModal, setShowModal] = React.useState(false);
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
  const restoreTemp = () => {
    axios
      .patch("http://localhost:1000/api/v1/clients/" + id0 + "/restore")
      .then(() => {});
  };
  return (
    <>
      <Modal title={"restoration"} show={showModal} format={5} close={close}>
         <h2>restoration du client num: {id0}</h2>
         <Form
            defaultValues={code0}
            onSubmit={restoreTemp}
          >
           <Field
                type="hidden"
                name="id"
               />

            <Brestore
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
          />
     </Modal>
    </>
  );
};

export default forwardRef(RestoreClient);
