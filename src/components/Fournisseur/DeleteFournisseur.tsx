import { TrashIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcancel from "widgets/Bcancel";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import { useDeleteFournisseurMutation } from "config/rtk";
import Modal from "widgets/Modal";
type DeleteFournisseurPorp = {
  refetch: () => void;
  id: string;
};
const DeleteFournisseur = (
  { id, refetch }: DeleteFournisseurPorp,
  ref: Ref<void>
) => {
  const [del] = useDeleteFournisseurMutation();
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
    axios
      .delete("http://localhost:1000/api/v1/fournisseurs/" + id0)
      .then(() => {});
  };
  return (
    <>
      <Modal title={"Suppression"} show={showModal} format={5} close={close}>
        <div>
          <h2>Suppression de Fournisseur num: {id0}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(delTemp)
            }
          >
            {" "}
            <input type="hidden" {...register("id")} />
            <Bcyan
              type="submit"
              className="mt-2 float-right"
              onClick={() => {
                setTimeout(() => {
                  close();
                  refetch();
                }, 500);
              }}
            >
              Supprimer
            </Bcyan>
            <Bcancel
              className="mt-2 float-right"
              onClick={() => {
                close();
              }}
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(DeleteFournisseur);
