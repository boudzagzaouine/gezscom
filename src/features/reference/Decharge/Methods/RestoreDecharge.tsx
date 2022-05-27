import axios from "axios";
import classNames from "classnames";
import { useRestoreDechargeMutation } from "config/rtk/rtkDecharge";
import React, { forwardRef, Ref, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Bcyan from "widgets/Bcyan";
import Modal from "../../../widgets/Modal";

type RestoreDechargePorp = {
  id: string;
};
const restoreDecharge = ({ id }: RestoreDechargePorp, ref: Ref<void>) => {
  const [id0, setId0] = useState(id);
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id0 },
  });
  const [restore] = useRestoreDechargeMutation();
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
      .patch(process.env.NEXT_PUBLIC_URL+"/decharges/" + id0 + "/restore")
      .then(() => {});
  };
  return (
    <>
      <Modal
        title={"restoration"}
        show={showModal}
        format={+classNames("5")}
        close={() => {
          setShowModal(false);
        }}
      >
        <div>
          <h2>restoration de Decharge num: {id0}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(restore)
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

export default forwardRef(restoreDecharge);
