import { TrashIcon } from "@heroicons/react/outline";
import { ArchiveIcon, ReplyIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import classNames from "classnames";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import { useRestoreBureauDouaneMutation, useRestoreClientMutation } from "../../../config/rtk";
import Modal from "../../../widgets/Modal";
type RestoreBureauDouaneProps = {
  id: string;
};
const RestoreBureauDouane = ({ id }: RestoreBureauDouaneProps, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const [restore] = useRestoreBureauDouaneMutation();
  const [showModal, setShowModal] = React.useState(false);
  const openModal = (i: string) => {
    setId0(i);
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  const restoreTemp = () => {
    axios
      .patch("http://localhost:1000/api/v1/bureauDouanes/" + id0 + "/restore")
      .then(() => { });
  };
  return (
    <>
      <Modal title={"restoration"} show={showModal} format={classNames("5")} close={() => { setShowModal(false) }}>
        <div>
          <h2>restoration du bureau douane num: {id0}</h2>
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
          <Bcyan
            className="mt-2 float-right"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Annuler
          </Bcyan>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(RestoreBureauDouane);
