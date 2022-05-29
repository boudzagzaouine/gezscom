import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Dum, dum0, DumJson, dumMat0, rawMaterial0 } from "tools/types";
import {
  BUREAU,
  DECLARANTS,
  FOURNISSEUR,
  REGIME,
  REQUEST_EDIT,
  REQUEST_SAVE,
} from "tools/consts";
import { Form, Field, Button } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";
import classNames from "classnames";
import Table from "widgets/Table";
import { MenuItems, MenuNavTabs } from "widgets/TypeWidgets";
import Mitems from "widgets/Mitems";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Pagin from "widgets/Pagin";
import Icon from "widgets/Icon";
import { opendums } from "config/rtk/rtkDums";
import { OpenDumProp } from "./Methods/openDum";
import DeleteDum from "./Methods/DeleteDum";
import ArchiveDum from "./Methods/ArchiveDum";
import RestoreDum from "./Methods/RestoreDum";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { style_icon, style_span } from "tools/constStyle";
import FormMatierePremiere from "features/MatierePremiere/FormMatierePremiere";
import AdressLivraisons from "features/manager/client/AdressLivraisons";
import ListeMatiers from "features/MatPremiere/MatierePremiere";
import NavTabs from "widgets/NavTabs";
import DumMat from "features/MatierePremiere/DumMat";

type FormDumProps = {
  dum: Dum;
};
const FormDum = ({ dum }: FormDumProps, ref: Ref<void>) => {
  const dumsToOpen: OpenDumProp = opendums();
  const dumJson: DumJson = dumsToOpen.data;
  const dums: Dum[] = dumJson.content;
  const refetchDum: () => void = dumsToOpen.refetch;
  const saveDum = dumsToOpen.save;
  const editDum = dumsToOpen.edit;

  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetchDum();
  };

  //const { data = [], isFetching, refetch } = usePaginationDumsQuery(0);
  const [dum1, setDum1] = useState<Dum>(dum0);
  const [request, setRequest] = useState(REQUEST_SAVE);

  //const [save] = useAddDumMutation();

  const [form, setForm] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const [show, setShow] = useState(false);
  const open = (d: Dum) => {
    setDum1(d);
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

  const showFormulaire = (dum: Dum) => {
    setDum1(dum);
    setForm(true);
    setRequest(REQUEST_EDIT);
  };

  const FormAsEdit = (dum: Dum) => {
    setDisabled(true);
    showFormulaire(dum);
  };

  const tabs: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Matière Première</span>
        </>
      ),
      //@ts-ignore
      featured: <DumMat idDum={dum.id} />,
    },
  ];

  const void_ = () => {};

  //const [updateArticle] = useEditDumMutation();

  const menu = (dum: Dum): MenuItems[] => {
    return [
      {
        icon: (
          <ClipboardListIcon
            className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Détail",
        action: () => {
          open(dum);
          setRequest(REQUEST_EDIT);
          setDisabled(true);
        },
      },
      {
        icon: (
          <PencilAltIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Modifier",
        action: () => {
          open(dum);
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
          del.current(dum.id);
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
          archive.current(dum.id);
        },
      },
      {
        icon: (
          <ReplyIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Restorer",
        action: () => {
          //@ts-ignore
          restore.current(dum.id);
        },
      },
    ];
  };

  return (
    <>
      {!form && (
        <section className="bg-white float-left w-full h-full mp-8 shadow-lg">
          <DeleteDum id={""} ref={del} refetch={refetchDum} />
          <ArchiveDum id={""} ref={archive} />
          <RestoreDum id={""} ref={restore} />

          <div className="float-left w-full">
            <button
              className="bg-sky-900 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left"
              onClick={() => {
                setDisabled(false);
                open(dum0);
              }}
            >
              Nouvelle Dum
            </button>
            <div className="float-right">
              <Button className="bg-white float-left border border-[#ddd] border-r-0 p-3 rounded-l-lg">
                <Icon i="search" cl="" />
              </Button>
              <input
                type="text"
                className="py-3 border outline-[#ddd] border-[#ddd] float-left border-l-0 rounded-r-lg w-96"
              />
            </div>
          </div>
          <Table
            className="tab-list float-left w-full mt-8 tab-list float-left w-full"
            thead={
              <tr>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  N° Dum
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Fournisseur
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                  Déclarant
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Bureau
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Régime
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Valeur
                </th>
                <th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                  Date
                </th>
                <th></th>
              </tr>
            }
          >
            {
              //@ts-ignore
              dums?.map((dum: Dum) => {
                return (
                  //@ts-ignore
                  <tr key={dum.id}>
                    <Table.td>{dum.numDum}</Table.td>
                    <Table.td>{dum.fournisseur}</Table.td>
                    <Table.td>{dum.declarant}</Table.td>
                    <Table.td>{dum.bureauDouane}</Table.td>
                    <Table.td>{dum.regime}</Table.td>
                    <Table.td>
                      {dum.valeur}
                      {"$"}
                    </Table.td>
                    <Table.td>{dum.date}</Table.td>

                    <Table.td className="cursor-pointer">
                      <Mitems menu={menu(dum)} />
                    </Table.td>
                  </tr>
                );
              })
            }
          </Table>
          <Pagin load={loadPage} visible={dums?.length ? true : false} />
        </section>
      )}
      <Modal
        show={show}
        title="Nouvelle Dum"
        format={+classNames("5")}
        close={closed}
      >
        <div className="float-left w-full">
          <Form
            defaultValues={dum1}
            onSubmit={
              request == REQUEST_SAVE
                ? saveDum
                : request == REQUEST_EDIT
                ? editDum
                : void_
            }
          >
            <div className="float-left w-full">
              <div>
                <div className="float-left w-1/2">
                  <Field label="N° Dum" name="numDum" disabled={disabled} />
                </div>
                <div className="float-left w-1/2">
                  <Field
                    label="Regime"
                    name="regime"
                    options={REGIME}
                    as="select"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div>
                <div className="float-left w-1/2">
                  <Field
                    label="Date"
                    name="date"
                    type="date"
                    disabled={disabled}
                  />
                </div>
                <div className="float-left w-1/2">
                  <Field
                    label="Fournisseur"
                    name="fournisseur"
                    options={FOURNISSEUR}
                    as="select"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div>
                <div className="float-left w-1/2">
                  <Field
                    label="Bureau"
                    name="bureauDouane"
                    options={BUREAU}
                    as="select"
                    disabled={disabled}
                  />
                </div>
                <div className="float-left w-1/2">
                  <Field
                    label="Déclarant"
                    name="declarant"
                    options={DECLARANTS}
                    as="select"
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
            {!disabled && (
              <>
                <Bcyan
                  className="m-4 mt-10"
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      refetchDum();
                      closed();
                    }, 500);
                  }}
                >
                  Sauvegarder
                </Bcyan>
              </>
            )}
            {disabled && (
              <Bcyan
                className="float-right m-4 mt-10"
                onClick={() => {
                  setDisabled(false);
                }}
              >
                modifier
              </Bcyan>
            )}
            {!disabled && (
              <Bcyan
                className="float-right m-4 mt-10"
                onClick={() => {
                  setDisabled(false);
                  setShow(false);
                }}
              >
                Annuler
              </Bcyan>
            )}
          </Form>

          <NavTabs tab={tabs}></NavTabs>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(FormDum);
