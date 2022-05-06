import { TrashIcon } from "@heroicons/react/outline";
import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Bcyan from "widgets/Bcyan";
import { useDeleteClientMutation } from "../config/rtk";
import Modal from "./Modal";
type DeleteClientPorp = {
  id: string;
};
const DeleteClient = ({ id }: DeleteClientPorp, ref: Ref<void>) => {
  //@ts-ignore
  const { register, handleSubmit } = useForm<string>({
    defaultValues: { id },
  });
  const [del] = useDeleteClientMutation();
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
      <Modal title={"suppression"} ref={modal}>
        <div>
          <h2>suppression de client num: {id}</h2>
          <form
            onSubmit={
              //@ts-ignore
              handleSubmit(del)
            }
          >
            {" "}
            <input type="hidden" {...register("id")} />
            <Bcyan type="submit" className="mt-2 float-right">
              <TrashIcon
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

export default forwardRef(DeleteClient);
