import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Article, article0, ArticleJson } from "tools/types";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { Form, Field, Button } from "widgets";
import Modal from "widgets/Modal";
import Bcyan from "widgets/Bcyan";
import { useAddArticleMutation, useEditArticleMutation, usePaginationArticlesQuery } from "config/rtk";
import classNames from "classnames";
import Table from "widgets/Table";
import { MenuItems } from 'widgets/TypeWidgets';
import Mitems from 'widgets/Mitems';
import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon, TrashIcon } from "@heroicons/react/outline";
import DeleteArticle from "./Methods/DeleteArticle";
import ArchiveArticle from "./Methods/ArchiveArticle";
import RestoreArticle from "./Methods/RestoreArticle";
import Pagin from "widgets/Pagin";
import Icon from "widgets/Icon";
import { OpenArticleProp } from "./Methods/openArticles";
import { openArticles } from "config/rtk/rtkArticle";

type FormArticleProps = {
    article: Article;
};
const FormArticle = ({
    article
}: FormArticleProps, ref: Ref<void>) => {

    const articlesToOpen: OpenArticleProp = openArticles();
    const articleJson: ArticleJson = articlesToOpen.data;
    const articles: Article[] = articleJson.content;
    const refetchArticle: () => void = articlesToOpen.refetch;
    const saveArticle = articlesToOpen.save;
    const editArticle = articlesToOpen.edit;

    const [page, setPage] = useState(0);
    const loadPage = (p: number) => {
        setPage(p);
        refetchArticle();
    };

    //const { data = [], isFetching, refetch } = usePaginationArticlesQuery(0);
    const [article1, setArticle1] = useState<Article>(article0);
    const [request, setRequest] = useState(REQUEST_SAVE);

    //const [save] = useAddArticleMutation();

    const [form, setForm] = useState(false);

    const [disabled, setDisabled] = useState(true);

    const del = useRef(null);
    const archive = useRef(null);
    const restore = useRef(null);

    const [show, setShow] = useState(false);
    const open = (a: Article) => {
        setArticle1(a)
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

    const showFormulaire = (article: Article) => {
        setArticle1(article);
        setForm(true);
        setRequest(REQUEST_EDIT);
    };

    const FormAsEdit = (article: Article) => {
        setDisabled(true);
        showFormulaire(article);
    };


    const void_ = () => { }

    //const [updateArticle] = useEditArticleMutation();


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
                action: () => { open(article); setRequest(REQUEST_EDIT); setDisabled(true) },
            },
            {
                icon: (
                    <PencilAltIcon
                        className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                ),
                text: "Modifier",
                action: () => { open(article); setRequest(REQUEST_EDIT); setDisabled(false) },
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
                    del.current(article.id);
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
                    archive.current(article.id);
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
                    restore.current(article.id);
                },
            },
        ]);

    };

    return (

        <>
            {!form && (
                <section className='bg-white float-left w-full h-full mp-8 shadow-lg'>
                    <DeleteArticle id={""} ref={del} refetch={refetchArticle} />
                    <ArchiveArticle id={""} ref={archive} />
                    <RestoreArticle id={""} ref={restore} />
                    <h1>Nouvelle Famille Article</h1>
                    <div className='float-left w-full'>
                        <button className='bg-cyan-800 p-3 text-white rounded border border-cyan-900py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-left' onClick={() => {
                            setDisabled(false)
                            open(article0)
                        }}>Nouvelle Famille Article</button>
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
                    <Table className='tab-list float-left w-full mt-8 tab-list float-left w-full'
                        thead={
                            <tr>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Designation</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Nomenclature</th>
                                <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 '>Taux de pertes</th>
                                <th></th>

                            </tr>}
                    >
                        {//@ts-ignore
                            articles?.map((article: Article) => {
                                return (
                                    //@ts-ignore
                                    <tr key={article.id}>
                                        <Table.td>{article.design}</Table.td>
                                        <Table.td>{article.nomenclature}</Table.td>
                                        <Table.td>{article.tauxPertes}{"%"}</Table.td>

                                        <Table.td className='cursor-pointer'><Mitems menu={menu(article)} /></Table.td>
                                    </tr>
                                )
                            })
                        }
                    </Table>
                    <Pagin load={loadPage} visibled={articles?.length > 0 ? true : false} />

                </section>
            )}
            <Modal show={show} title="Nouvelle Famille Article" format={+classNames("5")} close={closed}>
                <div className="float-left w-full">
                    <Form defaultValues={article1} onSubmit={request == REQUEST_SAVE ? saveArticle : request == REQUEST_EDIT ? editArticle : void_}>
                        <div className="float-left w-full">
                            <Field className="sm:grid-cols-6 sm:gap-6" label="Designation" name="design" disabled={disabled} />

                            <div className="float-left w-full">
                                <div className="float-left w-1/2">
                                    <Field label="Nomenclature" name="nomenclature" disabled={disabled} required="required" />
                                </div>
                                <div className="float-left w-1/2">
                                    <Field label="Taux de pertes" name="tauxPertes" disabled={disabled} required="required" />
                                </div>
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
                                        refetchArticle()
                                        closed();
                                    }, 500);
                                }}
                            >
                                Sauvegarder
                            </Bcyan></>}
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
                                setDisabled(false);
                                setShow(false);
                            }}>
                            Annuler
                        </Bcyan>}
                    </div>
                </div>
            </Modal>
        </>
    );

};


export default forwardRef(FormArticle);

