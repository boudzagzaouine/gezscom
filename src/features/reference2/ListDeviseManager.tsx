import { TrashIcon } from '@heroicons/react/outline';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon } from '@heroicons/react/solid';
import ArchiveDevise from 'components/reference2/ArchiveDevise';
import DeleteDevise from 'components/reference2/DeleteDevise';
import { OpenDeviseProp } from 'components/reference2/OpenDevise';
import RestoreDevise from 'components/reference2/RestoreDevise';
import { usePaginationDevisesQuery } from 'config/rtk';
import { openDevises } from 'config/rtk/rtkDevise';
import React, { useRef, useState } from 'react';
import { REQUEST_EDIT, REQUEST_SAVE } from 'tools/consts';
import { Devise, DeviseJson, v0 } from 'tools/types';
import Bcyan from 'widgets/Bcyan';
import { Button } from 'widgets/Button';
import Icon from 'widgets/Icon';
import Mitems from 'widgets/Mitems';
import Pagin from 'widgets/Pagin';
import Section from 'widgets/Section';
import Table from 'widgets/Table';
import { MenuItems } from 'widgets/TypeWidgets';
import FormDeviseManager from './FormDevise';

function ListDeviseManager() {
    const devisesToOpen: OpenDeviseProp = openDevises();
    const deviseJson: DeviseJson = devisesToOpen.data
    const devises: Devise[] = deviseJson.content
    const refetchDevise: () => void = devisesToOpen.refetch
    const saveDevise = devisesToOpen.save
    const editDevise = devisesToOpen.edit
    const search = (key: string, obj: Devise[]): Devise[] => {
        const Devisesearch: Devise[] = obj.filter(
            (o: Devise) => {
                return o.id.match(key) != null ||
                    o.code_iso.match(key) != null ||
                    o.symbole.match(key) != null
            }
        );
        return Devisesearch
    }

    const [form, setForm] = useState(false)
    const [Devise0, setDevise0] = useState(v0)
    const [requesv0, setRequesv0] = useState(REQUEST_SAVE)
    const [page, setPage] = useState(0);
    const { data = [], isFetching, refetch } = usePaginationDevisesQuery(page)
    const [button, setButton] = useState("")
    const loadPage = (p: number) => {
        setPage(p);
        refetch();
    };
    const [disabled, setDisabled] = useState(true);
    const del = useRef(null);
    const archive = useRef(null);
    const restore = useRef(null);

    const showFormulaire = (Devise: Devise) => {
        setDevise0(Devise);
        setForm(true);
        setRequesv0(REQUEST_EDIT);
    };
    const FormAsAdd = () => {
        setDisabled(false);
        setDevise0(v0);
        setForm(true);
        setRequesv0(REQUEST_SAVE);
    };
    const FormAsEdit = (Devise: Devise) => {
        setDisabled(true);
        showFormulaire(Devise);
    };
    const FormAsUpdate = (Devise: Devise) => {
        setDisabled(false);
        showFormulaire(Devise);
    };
    const menu = (Devise: Devise): MenuItems[] => {
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
                    FormAsEdit(Devise);
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
                    FormAsUpdate(Devise);
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
                    del.current(Devise.id);
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
                    archive.current(Devise.id);
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
                    restore.current(Devise.id);
                },
            },
        ];
    };
    const imputFocus = useRef()
    const handle = () => {
        //@ts-ignore
        imputFocus.current.focus()
    }

    return (
        <>
            {form && (
                <FormDeviseManager imputFocus={imputFocus}

                    request={requesv0}
                    Devise={Devise0}
                    closed={() => {
                        setForm(false);
                        setRequesv0(REQUEST_SAVE);
                        refetch();
                    }}
                    disable={disabled}
                />
            )}
            {!form && (
                <Section>
                    <DeleteDevise refetch={refetch} id={""} ref={del} />
                    <ArchiveDevise id={""} ref={archive} />
                    <RestoreDevise id={""} ref={restore} />
                    <div className="float-left w-full">
                        <Bcyan
                            className="float-left"
                            onClick={() => {
                                handle
                                //setClienv0(c0);
                                //setForm(true);
                                FormAsAdd()
                            }}


                        >
                            ajouter devise
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
                                <Table.th>code_iso</Table.th>
                                <Table.th>symbole</Table.th>
                                <Table.th></Table.th>
                            </tr>
                        }
                    >
                        {

                            //@ts-ignore
                            devises?.map((Devise) => (
                                //   data?.map((devise) => (
                                <tr key={Devise.id}>
                                    <Table.td>
                                        {Devise.id}
                                    </Table.td>
                                    <Table.td>{Devise.designation}  </Table.td>
                                    <Table.td>{Devise.code_iso}  </Table.td>
                                    <Table.td>{Devise.symbole} </Table.td>
                                    <Table.td>
                                        <Mitems key={Devise.id} menu={menu(Devise)} />
                                    </Table.td>
                                </tr>
                            ))
                        }
                    </Table>


                    <Pagin load={loadPage} visibled={devises.length > 0} />
                </Section>
            )}
        </>
    )
}

export default ListDeviseManager