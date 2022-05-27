import { ArchiveIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
//import { useArchiveFournisseurMutation } from "config/rtk";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { STYLE_ICON } from "tools/constStyle";
import Bcyan from "widgets/Bcyan";
import Bred from "widgets/Bred";
import Modal from "widgets/Modal";

type ArchiveFournisseurProp={
    id:String;
};
const ArchiveFournisseur=( {id}: ArchiveFournisseurProp, ref:Ref<void>)=>{
    const [id0, setId0]=useState(id);
    //@ts-ignore
    const{ register, handleSubmit} =useForm<string>({
        defaultValues: {id0},
    });
   // const [archive]=useArchiveFournisseurMutation();
    const [showModal, setShowModal]=React.useState(false);
    const openModal=(i:string)=>{
        setId0(i);
        setShowModal(true);
    };
    const close=()=>{
      setShowModal(false);
    }
    useEffect(()=>{
        //@ts-ignore
        ref.current=openModal;
    });
    const archiveTemp=()=>{
        axios.patch("http://localhost:1000/api/v1/fournisseurs/" + id0 + "/archive").then(()=>{});
    };
    return(
        <>
        <Modal title={"Archivage"} show={showModal} format={5} close={close}>
        <div>
          <h2>Archivage du Fournisseur num: {id0}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(archiveTemp)
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
              <ArchiveIcon
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

export default forwardRef(ArchiveFournisseur);