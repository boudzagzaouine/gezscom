import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import {
  PayementMode,
  payementMode0,
  RegimeDouanier,
  regimeDouanier0,
  RegimeDouanierJson,
} from "tools/types";
import { REQUEST_EDIT, REQUEST_SAVE, VILLE } from "tools/consts";
import { Form, Field } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";
import classNames from "classnames";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import Mitems from "widgets/Mitems";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import DeleteRegimeDouanier from "./Methods/DeleteRegimeDouanier";
import ArchiveRegimeDouanier from "./Methods/ArchiveRegimeDouanier";
import RestoreRegimeDouanier from "./Methods/RestoreRegimeDouanier";
import Pagin from "widgets/Pagin";
import { openRegimeDouaniers } from "config/rtk/rtkRegimeDouanier";
import { OpenRegimeDouanierProp } from "./Methods/openRegimeDouaniers";
import Mitems0 from "widgets/Mitems0";
import Bcancel from "widgets/Bcancel";
import BsavEndNew from "widgets/BsavEndNew";
import Bsave from "widgets/Bsave";

type FormRegimeDouanierProps = {
  regimeDouanier: RegimeDouanier;
};
const FormRegimeDouanier = (
  { regimeDouanier }: FormRegimeDouanierProps,
  ref: Ref<void>
) => {
  const regimeDouaniersToOpen: OpenRegimeDouanierProp = openRegimeDouaniers();
  const regimeDouanierJson: RegimeDouanierJson = regimeDouaniersToOpen.data;
  const regimeDouaniers: RegimeDouanier[] = regimeDouanierJson.content;
  const refetchRegimeDouanier: () => void = regimeDouaniersToOpen.refetch;
  const saveRegimeDouanier = regimeDouaniersToOpen.save;
  const editRegimeDouanier = regimeDouaniersToOpen.edit;

  //const { data = [], isFetching, refetch } = usePaginationRegimeDouaniersQuery(0);
  const [regimeDouanier1, setRegimeDouanier1] =
    useState<PayementMode>(payementMode0);
  const [request, setRequest] = useState(REQUEST_SAVE);

  //const [save] = useAddRegimeDouanierMutation();

  const [form, setForm] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const [show, setShow] = useState(false);
  const open = (r: RegimeDouanier) => {
    setRegimeDouanier1(r);
    setShow(true);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = open;
  });

  const closed = () => {
    setShow(false);
    setDisabled(true);
  };

  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetchRegimeDouanier();
  };

  const showFormulaire = (regimeDouanier: RegimeDouanier) => {
    //@ts-ignore
    setRegimeDouanier1(regimeDouanier);
    setForm(true);
    setRequest(REQUEST_EDIT);
  };

  const FormAsEdit = (regimeDouanier: RegimeDouanier) => {
    setDisabled(true);
    showFormulaire(regimeDouanier);
  };

  const void_ = () => {};

  //const [updateRegimeDouanier] = useEditRegimeDouanierMutation();

  const menu = (regimeDouanier: RegimeDouanier): MenuItems[] => {
    return [
      {
        icon: (
          <PencilAltIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Modifier",
        action: () => {
          open(regimeDouanier);
          setRequest(REQUEST_EDIT);
          setDisabled(false);
        },
      },
      {
        icon: (
          <TrashIcon
            className="mr-3 h-8 w-8 text-rose-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Supprimer",
        action: () => {
          //@ts-ignore
          del.current(regimeDouanier.id);
        },
      },
      {
        icon: (
          <ArchiveIcon
            className="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Archiver",
        action: () => {
          //@ts-ignore
          archive.current(regimeDouanier.id);
        },
      },
    ];
  };

  return (
    <>
      {!form && (
        <section className="bg-white float-left w-full h-full mp-8 shadow-lg">
          <DeleteRegimeDouanier
            id={""}
            ref={del}
            refetch={refetchRegimeDouanier}
          />
          <ArchiveRegimeDouanier id={""} ref={archive} />
          <RestoreRegimeDouanier id={""} ref={restore} />
          <h1>Régimes Douaniers</h1>
          <div className="float-left w-full">
            <button
              className="bg-sky-900 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left"
              onClick={() => {
                setDisabled(false);
                open(regimeDouanier0);
              }}
            >
              Nouveau Régime Douanier
            </button>
            <div className="float-right">
              <button className="bg-white float-left border border-[#ddd] border-r-0 p-3 rounded-l-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                className="py-3 border outline-[#ddd] border-[#ddd] float-left border-l-0 rounded-r-lg w-96"
                placeholder="Recherche"
              />
              {/* <button>icon</button> */}
            </div>
          </div>
          <Table
            className="tab-list float-left w-full mt-8 tab-list float-left w-full"
            thead={
              <tr>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Code
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Désignation
                </th>
                <th></th>
              </tr>
            }
          >
            {
              //@ts-ignore
              regimeDouaniers?.map((regimeDouanier: RegimeDouanier) => {
                return (
                  //@ts-ignore
                  <tr key={regimeDouanier.id}>
                    <Table.td>{regimeDouanier.code}</Table.td>
                    <Table.td>{regimeDouanier.design}</Table.td>
                    <Table.td className="cursor-pointer">
                      <Mitems0 menu={menu(regimeDouanier)} />
                    </Table.td>
                  </tr>
                );
              })
            }
          </Table>
          <Pagin
           load={loadPage} max={300}
            visible={regimeDouaniers?.length > 0 ? true : false}
          />
        </section>
      )}

      <Modal
        show={show}
        title={regimeDouanier1.id==""?"Nouveau Régime Douanier":"Modifier Régime Douanier"}
        format={+classNames("5")}
        close={closed}
      >
        <Form
            defaultValues={regimeDouanier1}
            onSubmit={
              request == REQUEST_SAVE
                ? saveRegimeDouanier
                : request == REQUEST_EDIT
                ? editRegimeDouanier
                : void_
            }
          >
            <div className="float-left w-5/6">
            <div className=" float-left w-1/2">
              <Field
               label="Code *"
                name="code"
                disabled={disabled} required={true}
                
              />
              </div>
              </div>
              <div className="float-left w-5/6">
              <div className="float-left w-1/2">
                  <Field
                    label="Désignation *"
                    name="design"
                    disabled={disabled} required={true}
                    
                  />
                </div>
           </div>
          <div className=" mt-5 b-ajust-r">
                     <Bsave
            className="float-right"
            onClick={() => {
              setTimeout(() => {
                refetchRegimeDouanier();
                      closed();
              }, 600);
            }}
          />
          {regimeDouanier1.id=="" &&<BsavEndNew
                  className="float-left mr-2"
                  onClick={() => {
                    setShow(true);
                  }}
                />}
               
              </div>
        
          </Form>
               <Bcancel
               className="float-right mt-5 b-ajust"
               onClick={() => {
                 setDisabled(true);
                  setShow(false);
               }}
             />
  
    </Modal>
    </>
  );
};

export default forwardRef(FormRegimeDouanier);
