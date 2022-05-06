import DeleteClient from "components/DeleteClient";
import Modal from "components/Modal";
import React, { useRef } from "react";

export default function Test() {
  const del = useRef(null);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          //@ts-ignore
          del.current();
        }}
      >
        Open regular modal
      </button>
      <DeleteClient id={"808ea784-950b-41cc-b429-cfedab3ad40e"} ref={del} />
    </>
  );
}
