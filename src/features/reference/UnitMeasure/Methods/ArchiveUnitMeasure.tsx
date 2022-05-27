import axios from "axios";
import classNames from "classnames";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { setTimeout } from "timers";
import Bcyan from "widgets/Bcyan";
import { useArchiveUnitMeasureMutation } from "config/rtk/rtkUnitMeasure";
import Modal from "widgets/Modal";
type ArchiveUnitMeasurePorp = {
  id: string;
};
const ArchiveUnitMeasure = ({ id }: ArchiveUnitMeasurePorp, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const [archive] = useArchiveUnitMeasureMutation();
  const [showModal, setShowModal] = React.useState(false);
  const openModal = (i: string) => {
    setId0(i);
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  /*const archiveTemp = () => {
    axios
      .patch(process.env.NEXT_PUBLIC_URL+"/unitMeasures/" + id0 + "/archive")
      .then(() => { });
  };*/
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
          <h2>archivage d'unité de mesure num: {id0}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(archive)
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

export default forwardRef(ArchiveUnitMeasure);
