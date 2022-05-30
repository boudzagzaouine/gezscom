import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { RawMaterial, rawMaterial0, RawMaterialJson } from "tools/types";
import { FAMILLE, REQUEST_EDIT, REQUEST_SAVE, UNIT, VILLE } from "tools/consts";
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
import DeleteRawMaterial from "./Methods/DeleteRawMaterial";
import ArchiveRawMaterial from "./Methods/ArchiveRawMaterial";
import RestoreRawMaterial from "./Methods/RestoreRawMaterial";
import Pagin from "widgets/Pagin";
import { openRawMaterials } from "config/rtk/rtkRawMaterial";
import { OpenRawMaterialProp } from "./Methods/openRawMaterials";
import Mitems0 from "widgets/Mitems0";
import Bsave from "widgets/Bsave";
import BsavEndNew from "widgets/BsavEndNew";
import Bcancel from "widgets/Bcancel";

type FormRawMaterialProps = {
  rawMaterial: RawMaterial;
};
const FormRawMaterial = (
  { rawMaterial }: FormRawMaterialProps,
  ref: Ref<void>
) => {
  const rawMaterialsToOpen: OpenRawMaterialProp = openRawMaterials();
  const rawMaterialJson: RawMaterialJson = rawMaterialsToOpen.data;
  const rawMaterials: RawMaterial[] = rawMaterialJson.content;
  const refetchRawMaterial: () => void = rawMaterialsToOpen.refetch;
  const saveRawMaterial = rawMaterialsToOpen.save;
  const editRawMaterial = rawMaterialsToOpen.edit;

  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetchRawMaterial();
  };

  //const { data = [], isFetching, refetch } = usePaginationRawMaterialsQuery(0);
  //useFetchRawMaterialsQuery();
  const [rawMaterial1, setRawMaterial1] = useState<RawMaterial>(rawMaterial0);
  const [request, setRequest] = useState(REQUEST_SAVE);

  //const [save] = useAddRawMaterialMutation();

  //const [updateRawMaterial] = useEditRawMaterialMutation();

  const [form, setForm] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const [show, setShow] = useState(false);
  const open = (r: RawMaterial) => {
    setRawMaterial1(r);
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

  const showFormulaire = (rawMaterial: RawMaterial) => {
    setRawMaterial1(rawMaterial);
    setForm(true);
    setRequest(REQUEST_EDIT);
  };

  const FormAsEdit = (rawMaterial: RawMaterial) => {
    setDisabled(true);
    showFormulaire(rawMaterial);
  };

  const void_ = () => {};

  const menu = (rawMaterial: RawMaterial): MenuItems[] => {
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
          open(rawMaterial);
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
          del.current(rawMaterial.id);
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
          archive.current(rawMaterial.id);
        },
      },
    ];
  };

  return (
    <>
      {!form && (
        <section className="bg-white float-left w-full h-full mp-8 shadow-lg">
          <DeleteRawMaterial id={""} ref={del} refetch={refetchRawMaterial} />
          <ArchiveRawMaterial id={""} ref={archive} />
          <RestoreRawMaterial id={""} ref={restore} />
          <h1>Familles Matière première</h1>
          <div className="float-left w-full">
            <button
              className="bg-sky-900 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left"
              onClick={() => {
                setDisabled(false);
                open(rawMaterial0);
              }}
            >
              Nouvelle Famille Matière Première
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
                  Désignation
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Nomenclature
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Famille
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Unité de Mesure
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Taux de pertes
                </th>
                <th></th>
              </tr>
            }
          >
            {
              //@ts-ignore
              rawMaterials?.map((rawMaterial: RawMaterial) => {
                return (
                  //@ts-ignore
                  <tr key={rawMaterial.id}>
                    <Table.td>{rawMaterial.design}</Table.td>
                    <Table.td>{rawMaterial.nomenclature}</Table.td>
                    <Table.td>{rawMaterial.family}</Table.td>
                    <Table.td>{rawMaterial.measureUnit}</Table.td>
                    <Table.td>
                      {rawMaterial.tauxPertes}
                      {"%"}
                    </Table.td>
                    <Table.td className="cursor-pointer">
                      <Mitems0 menu={menu(rawMaterial)} />
                    </Table.td>
                  </tr>
                );
              })
            }
          </Table>
          <Pagin
            load={loadPage}
            visible={rawMaterials?.length > 0 ? true : false}
          />
        </section>
      )}

      <Modal
        show={show}
        title={rawMaterial1.id==""?"Nouvelle Famille Matière première":"Modifier Famille Matière première"}
        format={+classNames("5")}
        close={closed}
      >
              <Form
            defaultValues={rawMaterial1}
            onSubmit={
              request == REQUEST_SAVE
                ? saveRawMaterial
                : request == REQUEST_EDIT
                ? editRawMaterial
                : void_
            }
          >
            <div className="float-left w-1/2">
               <Field
                  label="Désignation *"
                  name="design"
                  disabled={disabled} required={true}
                />
               <Field
                  label="Nomenclature *"
                  name="nomenclature"
                  disabled={disabled} required={true}
                />
               <Field
                  label="Famille"
                  name="family"
                  options={FAMILLE}
                  as="select"
                  disabled={disabled} required={true}
                />
				</div>
             <div className="float-left w-1/2">
                <Field
                  label="Unité De Mesure *"
                  name="measureUnit"
                  options={UNIT}
                  as="select"
                  disabled={disabled} required={true}
                />
               <Field
                  label="Taux de perte *"
                  name="tauxPertes"
                  
				  
				  disabled={disabled} required={true}
                  
                />
            </div>
                        <div className="float-right mt-5 b-ajust-r">
                     <Bsave
            className="float-right"
            onClick={() => {
              setTimeout(() => {
                refetchRawMaterial();
                      closed();
              }, 600);
            }}
          />
          {rawMaterial1.id=="" &&<BsavEndNew
                  className="float-right mr-2"
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

export default forwardRef(FormRawMaterial);
