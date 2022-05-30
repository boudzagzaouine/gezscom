import { TrashIcon } from "@heroicons/react/outline";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import ArchiveType from "components/reference2/ArchiveType";
import DeleteType from "components/reference2/DeleteType";
import { OpenTypeProp } from "components/reference2/OpenType";
import RestoreType from "components/reference2/RestoreType";
import { openTypes, usePaginationTypesQuery } from "config/rtk/rtkType";
import React, { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { d0, Type, TypeJson } from "tools/types";
import Bcyan from "widgets/Bcyan";
import { Button } from "widgets/Button";
import Icon from "widgets/Icon";
import Mitems from "widgets/Mitems";
import Mitems0 from "widgets/Mitems0";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormTypeManager from "./FormTypeManager";
function ListTypeManager() {
  const typesToOpen: OpenTypeProp = openTypes();
  const typeJson: TypeJson = typesToOpen.data;
  const types: Type[] = typeJson.content;
  const refetchType: () => void = typesToOpen.refetch;
  const saveType = typesToOpen.save;
  const editType = typesToOpen.edit;
  const search = (key: string, obj: Type[]): Type[] => {
    const typesearch: Type[] = obj.filter((o: Type) => {
      return o.id.match(key) != null || o.designation.match(key) != null;
    });
    return typesearch;
  };
  const [form, setForm] = useState(false);
  const [Documend0, setDocumend0] = useState(d0);
  const [requesd0, setRequesd0] = useState(REQUEST_SAVE);
  const [page, setPage] = useState(0);
  const { data = [], isFetching, refetch } = usePaginationTypesQuery(page);
  const [button, setButton] = useState("");
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const [disabled, setDisabled] = useState(true);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const showFormulaire = (Type: Type) => {
    setDocumend0(Type);
    setForm(true);
    setRequesd0(REQUEST_EDIT);
  };
  const FormAsAdd = () => {
    setDisabled(false);
    setDocumend0(d0);
    setForm(true);
    setRequesd0(REQUEST_SAVE);
  };
  const FormAsEdit = (Type: Type) => {
    setDisabled(true);
    showFormulaire(Type);
  };
  const FormAsUpdate = (Type: Type) => {
    setDisabled(false);
    showFormulaire(Type);
  };
  const menu = (Type: Type): MenuItems[] => {
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
          FormAsUpdate(Type);
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
          del.current(Type.id);
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
          archive.current(Type.id);
        },
      },
    ];
  };

  return (
    <>
      {form && (
        <FormTypeManager
          request={requesd0}
          Type={Documend0}
          closed={() => {
            setForm(false);
            setRequesd0(REQUEST_SAVE);
            refetch();
          }}
          disable={disabled}
        />
      )}
      {!form && (
        <Section>
          <DeleteType refetch={refetch} id={""} ref={del} />
          <ArchiveType id={""} ref={archive} />
          <RestoreType id={""} ref={restore} />
          <h1>Type</h1>
          <div className="float-left w-full">
            <Bcyan
              className="float-left"
              onClick={() => {
                //setCliend0(c0);
                //setForm(true);
                FormAsAdd();
              }}
            >
              Nouveau Type
            </Bcyan>

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
            className="tab-list float-left w-full mt-8"
            thead={
              <tr>
                <Table.th>Désignation</Table.th>
                <Table.th></Table.th>
              </tr>
            }
          >
            {
              //@ts-ignore
              types?.map((Type) => (
                //   data?.map((type) => (
                <tr key={Type.id}>
                  <Table.td>
                    <figure>
                      <figcaption>
                        <span>{Type.designation}</span>
                      </figcaption>
                    </figure>
                  </Table.td>

                  <Table.td>
                    <Mitems0 menu={menu(Type)} />
                  </Table.td>
                </tr>
              ))
            }
          </Table>

          <Pagin load={loadPage} visibled={types?.length > 0} />
        </Section>
      )}
    </>
  );
}

export default ListTypeManager;
