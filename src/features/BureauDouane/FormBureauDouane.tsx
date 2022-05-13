import React, { forwardRef, Ref, useEffect, useState } from "react";
import { Article, article0, BureauDouane, bureauDouane0 } from "tools/types";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Form, Field } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";
import { useAddArticleMutation, useArchiveArticleMutation, useDeleteArticleMutation, useEditArticleMutation, useFetchOneArticleQuery, useRestoreArticleMutation, useFetchArticlesQuery } from "config/rtk";
import classNames from "classnames";
import Table from "widgets/Table";
import { MenuItems } from 'widgets/TypeWidgets';
import Mitems from 'widgets/Mitems';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon, TrashIcon } from "@heroicons/react/outline";
import axios from "axios";

//zzzzz
type FormBureauDouaneProps = {
    bureauDouane: Article;
    disable: boolean;
};
const FormBureauDouane = ({
    bureauDouane,
    disable,
}: FormBureauDouaneProps, ref: Ref<void>) => {
    const { data = [], isFetching, refetch } = useFetchBureauDouaneQuery()
    const [bureauDouane1, setBureauDouane1] = useState<BureauDouane>(bureauDouane0);
    const [request, setRequest] = useState(REQUEST_SAVE)

    const [save] = useAddArticleMutation();

    const [disabled, setDisabled] = useState(disable);

    const [show, setShow] = useState(false);
    const open = (a: Article) => {
        setBureauDouane1(b);
        setShow(true);
    }
    useEffect(() => {
        //@ts-ignore
        ref.current = open;
    });

    const closed = () => {
        setShow(false);
        setNewA(article0);
        setDisabled(false);
    }


    /*useEffect(() => {
        axios.get("http://localhost:1000/api/v1/articles").then(res => {
            //@ts-ignore
            setArticles(res);
            console.log(res);
        }
        )
    }, [])*/
    const void_ = () => { }

    const details = useFetchOneArticleQuery(article.id);

    const [updateArticle] = useEditArticleMutation();

    const [deleteArticle] = useDeleteArticleMutation();

    const [archiveArticle] = useArchiveArticleMutation();

    const [restoreArticle] = useRestoreArticleMutation();

    const menu = (article: Article): MenuItems[] => {
        return ([
            {
                icon: (
                    <ClipboardListIcon
                        className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Détail",
                action: () => { details },
            },
            {
                icon: (
                    <PencilAltIcon
                        className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Modifier",
                action: () => { open(article); setRequest(REQUEST_EDIT) },
            },
            {
                icon: (
                    <TrashIcon
                        className="mr-3 h-8 w-8 text-rose-900 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Supprimer",
                action: () => { deleteArticle },
            },
            {
                icon: (
                    <ArchiveIcon
                        className="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Archiver",
                action: () => { archiveArticle },
            },
            {
                icon: (
                    <ReplyIcon
                        className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Restorer",
                action: () => { restoreArticle },
            },
        ]);

    };

    return (

        <>
            {/* {!isOpen &&  */}
            <section className='bg-white float-left w-full h-full mp-8 shadow-lg'>
                <h1>Nouvelle Famille Article</h1>
                <div className='float-left w-full'>
                    <button className='bg-cyan-800 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left' onClick={() => { open(article0) }}>Nouvelle Famille Article</button>
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
                            <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Designation</th>
                            <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Nomenclature</th>
                            <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 '>Taux de pertes</th>

                        </tr>}
                >
                    {//@ts-ignore
                        data.content?.map((article: Article) => {
                            return (
                                //@ts-ignore
                                <tr key={article.id}>
                                    <Table.td>{article.design}</Table.td>
                                    <Table.td>{article.nomenclature}</Table.td>
                                    <Table.td>{article.tauxPertes}</Table.td>

                                    <Table.td className='cursor-pointer'><Mitems menu={menu(article)} /></Table.td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </section>

            <Modal show={show} title="Nouvelle Famille Article" format={classNames("3")}>
                <div className="float-left w-full">
                    <Form defaultValues={bureauDouane1} onSubmit={request == REQUEST_SAVE ? save : request == REQUEST_EDIT ? updateArticle : void_}>
                        <div className="float-left w-full">
                            <Field label="Designation" name="design" disabled={!disabled} />

                            <div className="float-left w-full">
                                <div className="float-left w-1/2">
                                    <Field label="Nomenclature" name="nomenclature" disabled={!disabled} />
                                </div>
                                <div className="float-left w-1/2">
                                    <Field label="Taux de pertes" name="tauxPertes" disabled={!disabled} />
                                </div>
                            </div>
                        </div>
                        <Bcyan onClick={() => {
                            setShow(true);
                        }}>
                            Sauvegarder et Nouveau
                        </Bcyan>

                        <Bcyan
                            className="float-right m-4 mt-10 px-4"
                            type="submit"
                            onClick={() => {
                                setTimeout(() => {
                                    refetch()
                                    closed();
                                }, 500);
                            }}
                        >
                            Sauvegarder
                        </Bcyan>
                    </Form>

                    <div>



                        <Bcyan onClick={() => {
                            setShow(false);
                        }}>
                            Annuler
                        </Bcyan>
                    </div>
                </div>
            </Modal>
        </>
    );

};





export default forwardRef(FormArticle);

