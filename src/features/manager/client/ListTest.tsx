import React, {
  forwardRef,
  Ref,
  useState,
  useEffect,
  MutableRefObject,
} from "react";
import Modal from "widgets/Modal";

const ListTest = (ref: MutableRefObject<void>) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  return (
    <>
      <Modal title={"test modal"} show={showModal} format={3}>
        <h1>salamo alaykom</h1>
      </Modal>
    </>
  );
};

export default forwardRef(ListTest);
