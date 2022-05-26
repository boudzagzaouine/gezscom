import axios from "axios";
import classNames from "classnames";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Bcyan from "widgets/Bcyan";
import { useDeleteRawMaterialMutation } from "config/rtk/rtkRawMaterial";
import Modal from "widgets/Modal";
type DeleteRawMaterialPorp = {
  id: string;
  refetch: () => void;
};
const DeleteRawMaterial = (
  { id, refetch }: DeleteRawMaterialPorp,
  ref: Ref<void>
) => {
  const [del] = useDeleteRawMaterialMutation();
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const openModal = (i: string) => {
    setId0(i);
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  const [showModal, setShowModal] = React.useState(false);
  /*const delTemp = () => {
    axios.delete("http://localhost:1000/api/v1/rawMaterials/" + id0).then(() => { });
  };*/
  return (
    <>
      <Modal
        title={"suppression"}
        show={showModal}
        format={+classNames("5")}
        close={() => {
          setShowModal(false);
        }}
      >
        <div>
          <h2>suppression de matière première num: {id0}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(del)
            }
          >
            {" "}
            <input type="hidden" {...register("id")} />
            <Bcyan
              type="submit"
              className="mt-2 float-right"
              onClick={() => {
                setTimeout(() => {
                  refetch();
                  setShowModal(false);
                }, 500);
              }}
            >
              Supprimer
            </Bcyan>
            <Bcyan
              className="mt-2 float-right"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Annuler
            </Bcyan>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(DeleteRawMaterial);
