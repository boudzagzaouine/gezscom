import {  ReplyIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { forwardRef, Ref,  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import { useRestoreFournisseurMutation } from "config/rtk";
import Modal from "widgets/Modal";
type RestoreFournisseurPorp = {
  id: string;
};
const RestoreFournisseur = ({ id }: RestoreFournisseurPorp, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
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
      .patch("https://gescom-api.frimakers.com//api/v1/fournisseurs/" + id0 + "/restore")
      .then(() => {});
  };
  return (
    <>
      <Modal title={"restoration"} show={showModal} format={5} close={close}>
        <div>
          <h2>restoration du Fournisseur num: {id0}</h2>
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
              <ReplyIcon
                className="h-8 w-8 text-[#fff] group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Bcyan>
          </form>
          <Bred
            className="mt-2 float-right"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <XCircleIcon className={STYLE_ICON} aria-hidden="true" />
          </Bred>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(RestoreFournisseur);
