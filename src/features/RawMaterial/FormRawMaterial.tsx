import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Article, article0, BureauDouane, bureauDouane0, Declarant, declarant0, PayementMode, payementMode0, RawMaterial, rawMaterial0 } from "tools/types";
import { FAMILLE, REQUEST_EDIT, REQUEST_SAVE, UNIT, VILLE } from "tools/consts";
import { Form, Field } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";
import { useAddArticleMutation, useArchiveArticleMutation, useDeleteArticleMutation, useEditArticleMutation, useFetchOneArticleQuery, useRestoreArticleMutation, useFetchArticlesQuery, useFetchBureauDouanesQuery, useFetchOneBureauDouaneQuery, useEditBureauDouaneMutation, useDeleteBureauDouaneMutation, useArchiveBureauDouaneMutation, useRestoreBureauDouaneMutation, useFetchDeclarantsQuery, useAddDeclarantMutation, useEditDeclarantMutation, useDeleteDeclarantMutation, useArchiveDeclarantMutation, useRestoreDeclarantMutation, useFetchPayementModesQuery, useAddPayementModeMutation, useEditPayementModeMutation, useArchivePayementModeMutation, useRestorePayementModeMutation, useDeletePayementModeMutation, useAddRawMaterialMutation, useFetchRawMaterialsQuery, useEditRawMaterialMutation, useDeleteRawMaterialMutation, useArchiveRawMaterialMutation, useRestoreRawMaterialMutation, usePaginationRawMaterialsQuery } from "config/rtk";
import classNames from "classnames";
import Table from "widgets/Table";
import { MenuItems } from 'widgets/TypeWidgets';
import Mitems from 'widgets/Mitems';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon, TrashIcon } from "@heroicons/react/outline";
import DeleteRawMaterial from "./Methods/DeleteRawMaterial";
import ArchiveRawMaterial from "./Methods/ArchiveRawMaterial";
import RestoreRawMaterial from "./Methods/RestoreRawMaterial";
import Pagin from "widgets/Pagin";


const FormRawMaterial = (ref: Ref<void>) => {

    const [page, setPage] = useState(0);
    const loadPage = (p: number) => {
        setPage(p);
        refetch();
    };
    const { data = [], isFetching, refetch } = usePaginationRawMaterialsQuery(0);
    //useFetchRawMaterialsQuery();
    const [rawMaterial1, setRawMaterial1] = useState<RawMaterial>(rawMaterial0);
    const [request, setRequest] = useState(REQUEST_SAVE)

    const [save] = useAddRawMaterialMutation();

    const [updateRawMaterial] = useEditRawMaterialMutation();

    const [form, setForm] = useState(false);

    const [disabled, setDisabled] = useState(true);

    const [show, setShow] = useState(false);
    const open = (r: RawMaterial) => {
        setRawMaterial1(r);
        setShow(true);
    }
    useEffect(() => {
        //@ts-ignore
        ref.current = open;
    });

    const closed = () => {
        setShow(false);
        setDisabled(true);
    }

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


    const void_ = () => { }

    const menu = (rawMaterial: RawMaterial): MenuItems[] => {
        return ([
            {
                icon: (
                    <ClipboardListIcon
                        className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Détail",
                action: () => { open(rawMaterial); setRequest(REQUEST_EDIT); setDisabled(true) },
            },
            {
                icon: (
                    <PencilAltIcon
                        className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Modifier",
                action: () => { open(rawMaterial); setRequest(REQUEST_EDIT); setDisabled(false) },
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
                    restore.current(rawMaterial.id);
                },
            },
        ]);

    };

    return (

        <>
            {!form && (
                <section className='bg-white float-left w-full h-full mp-8 shadow-lg'>
                    <DeleteRawMaterial id={""} ref={del} refetch={refetch} />
                    <ArchiveRawMaterial id={""} ref={archive} />
                    <RestoreRawMaterial id={""} ref={restore} />
                    <h1>Nouvelle Famille Matière Première </h1>
                    <div className='float-left w-full'>
                        <button className='bg-cyan-800 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left' onClick={() => {
                            setDisabled(false)
                            open(rawMaterial0)
                        }}>Nouvelle Matière Première</button>
                        <div className='float-right'>
                            <button className='bg-white float-left border border-[#ddd] border-r-0 p-3 rounded-l-lg'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                            <input type="text" className='py-3 border outline-[#ddd] border-[#ddd] float-left border-l-0 rounded-r-lg w-96' placeholder='Recherche' />
                            {/* <button>icon</button> */}
                        </div>
                    </div>
                    <Table className='tab-list float-left w-full mt-8 tab-list float-left w-full'
                        thead={
                            <tr>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Désignation</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>nomenclature</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Famille</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Unité de Mesure</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Taux de pertes</th>
                                <th></th>


                            </tr>}
                    >
                        {//@ts-ignore
                            data.content?.map((rawMaterial: RawMaterial) => {
                                return (
                                    //@ts-ignore
                                    <tr key={rawMaterial.id}>
                                        <Table.td>{rawMaterial.design}</Table.td>
                                        <Table.td>{rawMaterial.nomenclature}</Table.td>
                                        <Table.td>{rawMaterial.family}</Table.td>
                                        <Table.td>{rawMaterial.measureUnit}</Table.td>
                                        <Table.td>{rawMaterial.tauxPertes}{"%"}</Table.td>
                                        <Table.td className='cursor-pointer'><Mitems menu={menu(rawMaterial)} /></Table.td>
                                    </tr>
                                )
                            })
                        }
                    </Table>
                    <Pagin load={loadPage} />
                </section>
            )}

            <Modal show={show} title="Nouvelle Famille Matière première" format={+classNames("5")} close={closed}>
                <div className="float-left w-full">
                    <Form defaultValues={rawMaterial1} onSubmit={request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? updateRawMaterial : void_}>
                        <div className="float-left w-full">
                            <div className="float-left w-full">
                                <Field className="sm:grid-cols-6 sm:gap-6" label="Designation" name="design" disabled={disabled} />
                            </div>
                            <div className="float-left w-1/2">
                                <Field label="Nomenclature" name="nomenclature" disabled={disabled} />
                            </div>
                            <div className="float-left w-1/2">
                                <Field
                                    label="Famille"
                                    name="family"
                                    options={FAMILLE}
                                    as="select"
                                    disabled={disabled}
                                />
                            </div>
                            <div className="float-left w-1/2">
                                <Field
                                    label="Unité De Mesure"
                                    name="measureUnit"
                                    options={UNIT}
                                    as="select"
                                    disabled={disabled}
                                />
                            </div>
                            <div className="float-left w-1/2">
                                <Field label="Taux de pertes" name="tauxPertes" disabled={disabled} required="required" />
                            </div>
                        </div>
                        {!disabled && <><Bcyan className="m-4 mt-10" onClick={() => {
                            setShow(true);
                        }}>
                            Sauvegarder et Nouveau
                        </Bcyan>

                            <Bcyan className="m-4 mt-10"
                                type="submit"
                                onClick={() => {
                                    setTimeout(() => {
                                        refetch()
                                        closed();
                                    }, 500);
                                }}
                            >
                                Sauvegarder
                            </Bcyan></>
                        }
                    </Form>

                    <div>
                        {disabled && <Bcyan className="float-right m-4 mt-10"
                            onClick={() => {
                                setDisabled(false)
                            }}>
                            modifier
                        </Bcyan>}
                        {!disabled && <Bcyan className="float-right"
                            onClick={() => {
                                setDisabled(true);
                                setShow(false);
                            }}>
                            Annuler
                        </Bcyan>}
                    </div>
                </div >
            </Modal >
        </>
    );

};


export default forwardRef(FormRawMaterial);

