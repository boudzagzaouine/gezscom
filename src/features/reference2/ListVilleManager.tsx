import { TrashIcon } from '@heroicons/react/outline';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon } from '@heroicons/react/solid';
import ArchiveVille from 'components/reference2/ArchiveVille';
import DeleteVille from 'components/reference2/DeleteVille';
import { OpenVilleProp } from 'components/reference2/OpenVille';
import RestoreVille from 'components/reference2/RestoreVille';
import { usePaginationVillesQuery } from 'config/rtk';
import { openVilles } from 'config/rtk/rtkVille';
import React, { useRef, useState } from 'react';
import { REQUEST_EDIT, REQUEST_SAVE } from 'tools/consts';
import { i0, Ville, VilleJson } from 'tools/types';
import Bcyan from 'widgets/Bcyan';
import { Button } from 'widgets/Button';
import Icon from 'widgets/Icon';
import Mitems from 'widgets/Mitems';
import Pagin from 'widgets/Pagin';
import Section from 'widgets/Section';
import Table from 'widgets/Table';
import { MenuItems } from 'widgets/TypeWidgets';
import FormVilleManager from './FormVilleManager';
function ListVilleManager() {
    const villesToOpen: OpenVilleProp = openVilles();
    const villeJson: VilleJson = villesToOpen.data
    const villes: Ville[] = villeJson.content
    const refetchVille: () => void = villesToOpen.refetch
    const saveVille = villesToOpen.save
    const editVille = villesToOpen.edit
    const search = (key: string, obj: Ville[]): Ville[] => {
        const Villesearch: Ville[] = obj.filter(
            (o: Ville) => {
                return o.id.match(key) != null ||
                    o.designation.match(key) != null
            }
        );
        return Villesearch
    }
    const [form, setForm] = useState(false)
    const [Ville0, setVille0] = useState(i0)
    const [requesi0, setRequesi0] = useState(REQUEST_SAVE)
    const [page, setPage] = useState(0);
    const { data = [], isFetching, refetch } = usePaginationVillesQuery(page)
    const [button, setButton] = useState("")
    const loadPage = (p: number) => {
        setPage(p);
        refetch();
    };
    const [disabled, setDisabled] = useState(true);
    const del = useRef(null);
    const archive = useRef(null);
    const restore = useRef(null);

    const showFormulaire = (Ville: Ville) => {
        setVille0(Ville);
        setForm(true);
        setRequesi0(REQUEST_EDIT);
    };
    const FormAsAdd = () => {
        setDisabled(false);
        setVille0(i0);
        setForm(true);
        setRequesi0(REQUEST_SAVE);
    };
    const FormAsEdit = (Ville: Ville) => {
        setDisabled(true);
        showFormulaire(Ville);
    };
    const FormAsUpdate = (Ville: Ville) => {
        setDisabled(false);
        showFormulaire(Ville);
    };
    const menu = (Ville: Ville): MenuItems[] => {
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
                    FormAsEdit(Ville);
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
                    FormAsUpdate(Ville);
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
                    del.current(Ville.id);
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
                    archive.current(Ville.id);
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
                    restore.current(Ville.id);
                },
            },
        ];
    };

    return (
        <>
            {form && (
                <FormVilleManager
                    request={requesi0}
                    Ville={Ville0}
                    closed={() => {
                        setForm(false);
                        setRequesi0(REQUEST_SAVE);
                        refetch();
                    }}
                    disable={disabled}
                />
            )}
            {!form && (
                <Section>
                    <DeleteVille refetch={refetch} id={""} ref={del} />
                    <ArchiveVille id={""} ref={archive} />
                    <RestoreVille id={""} ref={restore} />
                    <div className="float-left w-full">
                        <Bcyan
                            className="float-left"
                            onClick={() => {
                                //setClieni0(c0);
                                //setForm(true);
                                FormAsAdd()
                            }}
                        >
                            ajouter ville
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
                                <Table.th>Pays</Table.th>
                                <Table.th></Table.th>
                            </tr>
                        }
                    >
                        {

                            //@ts-ignore
                            villes?.map((Ville) => (
                                //   data?.map((ville) => (
                                <tr key={Ville.id}>
                                    <Table.td>
                                        {Ville.id}
                                    </Table.td>
                                    <Table.td>
                                        <span>{Ville.designation}</span>

                                    </Table.td>
                                    <Table.td>
                                        <span>{Ville.pays.designation}</span>

                                    </Table.td>

                                    <Table.td>
                                        <Mitems key={Ville.id} menu={menu(Ville)} />
                                    </Table.td>
                                </tr>
                            ))
                        }
                    </Table>


                    <Pagin load={loadPage} visibled={villes?.length > 0} />
                </Section>
            )}
        </>
    )
}

export default ListVilleManager