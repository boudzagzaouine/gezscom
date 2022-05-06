import { TrashIcon } from "@heroicons/react/outline";
import { ArchiveIcon } from "@heroicons/react/solid";
import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Bcyan from "widgets/Bcyan";
import { useArchiveClientMutation } from "../config/rtk";
import Modal from "./Modal";
type ArchiveClientPorp = {
  id: string;
};
const ArchiveClient = ({ id }: ArchiveClientPorp, ref: Ref<void>) => {
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id },
  });
  const [archive] = useArchiveClientMutation();
  const modal = useRef(null);
  const openModal = () => {
    //@ts-ignore
    modal.current();
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  return (
    <>
      <Modal title={"archivage"} ref={modal}>
        <div>
          <h2>archivage du client num: {id}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(archive)
            }
          >
            {" "}
            <input type="hidden" {...register("id")} />
            <Bcyan type="submit" className="mt-2 float-right">
              <ArchiveIcon
                className="h-8 w-8 text-[#fff] group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Bcyan>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(ArchiveClient);
