import { TrashIcon } from "@heroicons/react/outline";
import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon
} from "@heroicons/react/solid";
import ArchiveRole from "components/reference2/ArchiveRole";
import DeleteRole from "components/reference2/DeleteRole";
import RestoreRole from "components/reference2/RestoreRole";
import { OpenRoleProp, openRoles } from "config/rtk/rtkRole";
import React, { useRef, useState } from "react";
import { r0, Role, RoleJson } from "tools/types";
import Bcyan from "widgets/Bcyan";
import { Button } from "widgets/Button";
import Icon from "widgets/Icon";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormRoleManager from "./FormRoleManager";
function ListRoleManager() {
  const [page, setPage] = useState(0);
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
 
  const rolesToOpen: OpenRoleProp = openRoles(page);
  const roleJson: RoleJson = rolesToOpen.data;
  const roles: Role[] = roleJson.content;
  const refetch: () => void = rolesToOpen.refetch;
  const save = rolesToOpen.save;
  const edit = rolesToOpen.edit;
   const refCom = useRef(null);
   const del = useRef(null);
   const archive = useRef(null);
   const restore = useRef(null);

  const menu = (role: Role): MenuItems[] => {
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
          //@ts-ignore
          refCom.current(role,true);
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
          //@ts-ignore
          refCom.current(role,false);
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
          del.current(role.id);
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
          archive.current(role.id);
        },
      },
    ];
  };

  return (
    <>

        <Section>
          <DeleteRole refetch={refetch} id={""} ref={del} />
          <ArchiveRole id={""} ref={archive} />
          <RestoreRole id={""} ref={restore} />
          <h1>Rôles</h1>
          <div className="float-left w-full">
            <Bcyan
              className="float-left"
              onClick={() => {
                //@ts-ignore
                refCom.current(r0,false);
              }}
            >
              Nouveau Rôle
            </Bcyan>  
              <FormRoleManager
            refetch={refetch}
            save={save}
            edit={edit}
          Role={r0}
         disable={false}
          ref={refCom}
            />
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
                <Table.th>Nombre des utilisateurs</Table.th>
                <Table.th></Table.th>
              </tr>
            }
          >
            {roles?.map((Role) => (
              <tr key={Role.id}>
                <Table.td>
                  <span>{Role.design}</span>
                </Table.td>
                <Table.td>
                  <span>{Role.nbrUtilisateur}</span>
                </Table.td>

                <Table.td>
                  <Mitems menu={menu(Role)} />
                </Table.td>
              </tr>
            ))}
          </Table>

          <Pagin load={loadPage} max={roles?.length} visible={roles?.length > 0} />
        </Section>
    </>
  );
}

export default ListRoleManager;
