import { Exemple, exemple0 } from "components/MyMaquete/tools/types";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import Modal from "widgets/Modal";
import { Field, Form } from "widgets";
import {
  OpenExempleProp,
  operationExemple,
} from "components/MyMaquete/rtk/RtkExemple";
type FormExempleProps = {
  exemple: Exemple;
};
const FormExemple = ({ exemple }: FormExempleProps, ref: Ref<void>) => {
  const [showModal, setShowModal] = useState(false);
  const [exemple1, setExemple1] = useState<Exemple>(exemple0);
  const openModal = (e: Exemple) => {
    setExemple1(e);
    setShowModal(true);
  };
  const operations: OpenExempleProp = operationExemple();
  const add = operations.save;
  const edit = operations.edit;
  const save = exemple1.id == "" ? add : edit;
  const refetch = operations.refetch;
  const close = () => {
    setShowModal(false);
  };
  useEffect(() => {
    refetch();
    //@ts-ignore
    ref.current = openModal;
  });
  return (
    <Modal title="exemple maquette" close={close} format={5} show={showModal}>
      <Form defaultValues={exemple0} onSubmit={save}>
        <div className="float-left -full">
          <Field label="Designation" name="design" />
          <Field label="Quantité" name="qte" />
        </div>
      </Form>
    </Modal>
  );
};

export default forwardRef(FormExemple);
