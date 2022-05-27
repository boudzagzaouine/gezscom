import axios from "axios";
import classNames from "classnames";
import { useArchiveDumMutation } from "config/rtk/rtkDums";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { setTimeout } from "timers";
import Bcyan from "widgets/Bcyan";
import Modal from "widgets/Modal";
type ArchiveDumPorp = {
  id: string;
};
const ArchiveDum = ({ id }: ArchiveDumPorp, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const [archive] = useArchiveDumMutation();
  const [showModal, setShowModal] = React.useState(false);
  const openModal = (i: string) => {
    setId0(i);
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  const archiveTemp = () => {
    axios
      .patch(process.env.NEXT_PUBLIC_URL+"/dums/" + id0 + "/archive")
      .then(() => {});
  };
  return (
    <>
      <Modal
        title={"archivage"}
        show={showModal}
        format={+classNames("5")}
        close={() => {
          setShowModal(false);
        }}
      >
        <div>
          <h2>archivage du Dum num: {id0}</h2>
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
              Archiver
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

export default forwardRef(ArchiveDum);
