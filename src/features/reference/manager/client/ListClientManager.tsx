import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import ArchiveClient from "components/manager/client/ArchiveClient";
import DeleteClient from "components/manager/client/DeleteClient";
import Mitems from "widgets/Mitems";
import Pagin from "widgets/Pagin";
import RestoreClient from "components/manager/client/RestoreClient";
import { usePaginationClientsQuery } from "config/rtk";
import React, { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { STYLE_ICON } from "tools/constStyle";
import { c0, Client } from "tools/types";
import { Button } from "widgets";
import Bcyan from "widgets/Bcyan";
import Icon from "widgets/Icon";
import Section from "widgets/Section";
import { MenuItems } from "widgets/TypeWidgets";
import FormClientManager from "./FormClientManager";
import Table from "widgets/Table";
const ListClientManager = () => {
  const search = (key: string, obj: Client[]): Client[] => {
    const clientsearch: Client[] = obj.filter((o: Client) => {
      return (
        o.id.match(key) != null ||
        o.design.match(key) != null ||
        o.concat.match(key) != null ||
        o.image.match(key) != null ||
        o.email.match(key) != null ||
        o.tel.match(key) != null ||
        o.device.match(key) != null ||
        o.adrLiv.match(key) != null ||
        o.incoterm.match(key) != null ||
        o.paymentChoice.match(key) != null ||
        o.adrFact.match(key) != null ||
        o.bank.match(key) != null ||
        o.rib.match(key) != null ||
        o.swift.match(key) != null
      );
    });
    return clientsearch;
  };
  const [form, setForm] = useState(false);
  const [client0, setClient0] = useState(c0);
  const [request0, setRequest0] = useState(REQUEST_SAVE);
  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const { data = [], isFetching, refetch } = usePaginationClientsQuery(page);
  const [disabled, setDisabled] = useState(true);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const showFormulaire = (client: Client) => {
    setClient0(client);
    setForm(true);
    setRequest0(REQUEST_EDIT);
  };
  const FormAsAdd = () => {
    setDisabled(false);
    setClient0(c0);
    setForm(true);
    setRequest0(REQUEST_SAVE);
  };
  const FormAsEdit = (client: Client) => {
    setDisabled(true);
    showFormulaire(client);
  };
  const FormAsUpdate = (client: Client) => {
    setDisabled(false);
    showFormulaire(client);
  };
  const menu = (client: Client): MenuItems[] => {
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
          FormAsEdit(client);
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
          FormAsUpdate(client);
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
          del.current(client.id);
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
          archive.current(client.id);
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
          restore.current(client.id);
        },
      },
    ];
  };
  return (
    <>
      {form && (
        <FormClientManager
          request={request0}
          client={client0}
          closed={() => {
            setForm(false);
            setRequest0(REQUEST_SAVE);
            refetch();
          }}
          disable={disabled}
        />
      )}
      {!form && (
        <Section>
          <DeleteClient id={""} ref={del} />
          <ArchiveClient id={""} ref={archive} />
          <RestoreClient id={""} ref={restore} />
          <div className="float-left w-full">
            <Bcyan
              className="float-left"
              onClick={() => {
                //setClient0(c0);
                //setForm(true);
                FormAsAdd();
              }}
            >
              <UserAddIcon className={STYLE_ICON} aria-hidden="true" />
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
                <Table.th>nom client</Table.th>
                <Table.th>id</Table.th>
                <Table.th>contact</Table.th>
                <Table.th>Icoterm</Table.th>
                <Table.th>Mode règlement</Table.th>
                <Table.th></Table.th>
              </tr>
            }
          >
            {
              //@ts-ignore
              data.content?.map((client) => (
                //   data?.map((client) => (
                <tr key={client.id}>
                  <Table.td>
                    <figure>
                      <img src={"/images/empty-contact.png"} alt="" />
                      <figcaption>
                        <span>{client.design}</span>
                        &nbsp;&nbsp;
                        <span>{client.concat}</span>
                      </figcaption>
                    </figure>
                  </Table.td>
                  <Table.td>{client.id}</Table.td>
                  <Table.td>
                    <ul>
                      <li>{client.tel}</li>
                      <li>{client.email}</li>
                    </ul>
                  </Table.td>
                  <Table.td>{client.incoterm}</Table.td>
                  <Table.td>{client.paymentChoice}</Table.td>
                  <Table.td>
                    <Mitems menu={menu(client)} />
                  </Table.td>
                </tr>
              ))
            }
          </Table>

          <Pagin load={loadPage} />
        </Section>
      )}
    </>
  );
};

export default ListClientManager;
