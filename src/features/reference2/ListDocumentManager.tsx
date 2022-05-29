import { TrashIcon } from "@heroicons/react/outline";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import ArchiveDocument from "components/reference2/ArchiveDocument";
import DeleteDocument from "components/reference2/DeleteDocument";
import { OpenDocumentProp } from "components/reference2/OpenDocument";
import RestoreDocument from "components/reference2/RestoreDocument";
import {
  openDocuments,
  usePaginationDocumentsQuery,
} from "config/rtk/rtkDocument";
import React, { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { d0, Document, DocumentJson } from "tools/types";
import Bcyan from "widgets/Bcyan";
import { Button } from "widgets/Button";
import Icon from "widgets/Icon";
import Mitems from "widgets/Mitems";
import Mitems0 from "widgets/Mitems0";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormDocumentManager from "./FormDocumentManager";
function ListDocumentManager() {
  const documentsToOpen: OpenDocumentProp = openDocuments();
  const documentJson: DocumentJson = documentsToOpen.data;
  const documents: Document[] = documentJson.content;
  const refetchDocument: () => void = documentsToOpen.refetch;
  const saveDocument = documentsToOpen.save;
  const editDocument = documentsToOpen.edit;
  const search = (key: string, obj: Document[]): Document[] => {
    const documentsearch: Document[] = obj.filter((o: Document) => {
      return o.id.match(key) != null || o.designation.match(key) != null;
    });
    return documentsearch;
  };
  const [form, setForm] = useState(false);
  const [Documend0, setDocumend0] = useState(d0);
  const [requesd0, setRequesd0] = useState(REQUEST_SAVE);
  const [page, setPage] = useState(0);
  const { data = [], isFetching, refetch } = usePaginationDocumentsQuery(page);
  const [button, setButton] = useState("");
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const [disabled, setDisabled] = useState(true);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const showFormulaire = (Document: Document) => {
    setDocumend0(Document);
    setForm(true);
    setRequesd0(REQUEST_EDIT);
  };
  const FormAsAdd = () => {
    setDisabled(false);
    setDocumend0(d0);
    setForm(true);
    setRequesd0(REQUEST_SAVE);
  };
  const FormAsEdit = (Document: Document) => {
    setDisabled(true);
    showFormulaire(Document);
  };
  const FormAsUpdate = (Document: Document) => {
    setDisabled(false);
    showFormulaire(Document);
  };
  const menu = (Document: Document): MenuItems[] => {
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
          FormAsEdit(Document);
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
          FormAsUpdate(Document);
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
          del.current(Document.id);
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
          archive.current(Document.id);
        },
      },
    ];
  };

  return (
    <>
      {form && (
        <FormDocumentManager
          request={requesd0}
          Document={Documend0}
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
          <DeleteDocument refetch={refetch} id={""} ref={del} />
          <ArchiveDocument id={""} ref={archive} />
          <RestoreDocument id={""} ref={restore} />
          <h1>Document</h1>
          <div className="float-left w-full">
            <Bcyan
              className="float-left"
              onClick={() => {
                //setCliend0(c0);
                //setForm(true);
                FormAsAdd();
              }}
            >
              Nouveau Document
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
              documents?.map((Document) => (
                //   data?.map((document) => (
                <tr key={Document.id}>
                  <Table.td>
                    <span>{Document.designation}</span>
                  </Table.td>

                  <Table.td>
                    <Mitems0 menu={menu(Document)} />
                  </Table.td>
                </tr>
              ))
            }
          </Table>

          <Pagin load={loadPage} visibled={documents?.length > 0} />
        </Section>
      )}
    </>
  );
}

export default ListDocumentManager;
