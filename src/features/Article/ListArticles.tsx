import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
//import Bcyan from "widgets/Bcyan";
import Table from "widgets/Table";
import { ListArticleProps } from "widgets/TypeWidgets";
import { Article, article0 } from "tools/types";
import Modal from "widgets/Modal";
import { usePaginationArticlesQuery } from "config/rtk";
import Section from "widgets/Section";
import classNames from "classnames";

const ListArticles = ({ article }: ListArticleProps, ref: Ref<void>) => {

    const [page, setPage] = useState(0);
    const loadPage = (p: number) => {
        setPage(p);
        refetch();
    };
    const { data = [], isFetching, refetch } = usePaginationArticlesQuery(page);

    const [showModal, setShowModal] = useState(false);
    /*const openModal = () => {
       
    }*/
    useEffect(() => {
        //@ts-ignore
        setShowModal(true);
    });
    return (

        <Modal show={showModal} title="Nouvelle Famille Article" format={classNames("3")}>
            <>
                <Table className="tab-list float-left w-full mt-2"
                    thead={
                        <tr>
                            <Table.th> Designation </Table.th>
                            <Table.th> Nomenclature </Table.th>
                            <Table.th> Taux de pertes </Table.th>
                        </tr>
                    }>

                    {//@ts-ignore
                        data.content?.map((article) => {
                            return (
                                //@ts-ignore
                                <tr key={article.id}>
                                    <Table.td>{article.design} </Table.td>
                                    <Table.td> {article.nomenclature} </Table.td>
                                    <Table.td> {article.tauxPertes} </Table.td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </>
        </Modal>
    );
};

export default forwardRef(ListArticles);


