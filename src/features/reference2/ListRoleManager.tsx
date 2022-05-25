import { TrashIcon } from '@heroicons/react/outline';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon } from '@heroicons/react/solid';
import ArchiveRole from 'components/reference2/ArchiveRole';
import DeleteRole from 'components/reference2/DeleteRole';
import { OpenRoleProp } from 'components/reference2/openRole';
import RestoreRole from 'components/reference2/RestoreRole';
import { openRoles, usePaginationRolesQuery } from 'config/rtk/rtkRole';
import React, { useRef, useState } from 'react';
import { REQUEST_EDIT, REQUEST_SAVE } from 'tools/consts';
import { r0, Role, RoleJson } from 'tools/types';
import Bcyan from 'widgets/Bcyan';
import { Button } from 'widgets/Button';
import Icon from 'widgets/Icon';
import Mitems from 'widgets/Mitems';
import Pagin from 'widgets/Pagin';
import Section from 'widgets/Section';
import Table from 'widgets/Table';
import { MenuItems } from 'widgets/TypeWidgets';
import FormRoleManager from './FormRoleManager';
function ListRoleManager() {
    const rolesToOpen: OpenRoleProp = openRoles();
    const roleJson: RoleJson = rolesToOpen.data
    const roles: Role[] = roleJson.content
    const refetchRole: () => void = rolesToOpen.refetch
    const saveRole = rolesToOpen.save
    const editRole = rolesToOpen.edit
    const search = (key: string, obj: Role[]): Role[] => {
        const rolesearch: Role[] = obj.filter(
            (o: Role) => {
                return o.id.match(key) != null ||
                    o.designation.match(key) != null
            }
        );
        return rolesearch
    }
    const [form, setForm] = useState(false)
    const [Roler0, setRoler0] = useState(r0)
    const [requesr0, setRequesr0] = useState(REQUEST_SAVE)
    const [page, setPage] = useState(0);
    const { data = [], isFetching, refetch } = usePaginationRolesQuery(page)
    const [button, setButton] = useState("")
    const loadPage = (p: number) => {
        setPage(p);
        refetch();
    };
    const [disabled, setDisabled] = useState(true);
    const del = useRef(null);
    const archive = useRef(null);
    const restore = useRef(null);

    const showFormulaire = (Role: Role) => {
        setRoler0(Role);
        setForm(true);
        setRequesr0(REQUEST_EDIT);
    };
    const FormAsAdd = () => {
        setDisabled(false);
        setRoler0(r0);
        setForm(true);
        setRequesr0(REQUEST_SAVE);
    };
    const FormAsEdit = (Role: Role) => {
        setDisabled(true);
        showFormulaire(Role);
    };
    const FormAsUpdate = (Role: Role) => {
        setDisabled(false);
        showFormulaire(Role);
    };
    const menu = (Role: Role): MenuItems[] => {
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
                    FormAsEdit(Role);
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
                    FormAsUpdate(Role);
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
                    del.current(Role.id);
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
                    archive.current(Role.id);
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
                    restore.current(Role.id);
                },
            },
        ];
    };

    return (
        <>
            {form && (
                <FormRoleManager
                    request={requesr0}
                    Role={Roler0}
                    closed={() => {
                        setForm(false);
                        setRequesr0(REQUEST_SAVE);
                        refetch();
                    }}
                    disable={disabled}
                />
            )}
            {!form && (
                <Section>
                    <DeleteRole refetch={refetch} id={""} ref={del} />
                    <ArchiveRole id={""} ref={archive} />
                    <RestoreRole id={""} ref={restore} />
                    <div className="float-left w-full">
                        <Bcyan
                            className="float-left"
                            onClick={() => {
                                //setClienr0(c0);
                                //setForm(true);
                                FormAsAdd()
                            }}
                        >
                            ajouter role
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
                    <Table className="tab-list float-left w-full mt-8"
                        thead={
                            <tr>
                                <Table.th>id</Table.th>
                                <Table.th>designation</Table.th>
                                <Table.th>nobre des utilisateurs</Table.th>
                                <Table.th></Table.th>
                            </tr>
                        }
                    >
                        {
                            roles?.map((Role) => (
                                //   data?.map((role) => (
                                <tr key={Role.id}>
                                    <Table.td>
                                        {Role.id}
                                    </Table.td>
                                    <Table.td>
                                        <span>{Role.designation}</span>

                                    </Table.td>
                                    <Table.td>
                                        <span>{Role.nbrUtilisateur}</span>

                                    </Table.td>

                                    <Table.td>
                                        <Mitems menu={menu(Role)} />
                                    </Table.td>
                                </tr>
                            ))
                        }
                    </Table>


                    <Pagin load={loadPage} visibled={roles?.length > 0} />
                </Section>
            )}
        </>
    )
}

export default ListRoleManager