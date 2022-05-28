import { OpenArticleClientByClientProp, openArticleClientsByClient, useFetchArticleClientsByIdClientQuery } from "config/rtk/RtkArticleClient";
import React, { useRef, useState } from "react";
import { Client, articleClient0, ArticleClient } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import FormArticleClient from "./FormArticleClient";
type ListArticleClientsProp = {
  client: Client;
  refetchParent: () => void;
};
const ListArticleClients = ({ client, refetchParent }: ListArticleClientsProp) => {
  const articleClientsOpen: OpenArticleClientByClientProp = openArticleClientsByClient(client.id);
  const articlesClients: ArticleClient[] = articleClientsOpen.data;
 const refetch = articleClientsOpen.refetch;
 const add =articleClientsOpen.save
 const edit =articleClientsOpen.edit
  const articleClient1: ArticleClient = articleClient0;
  articleClient1.idClient = client.id;
  const refArticleClient = useRef(null);
  const refetchAll = () => {
    refetch();
    refetchParent();
  };
  return (
    <>
      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refArticleClient.current(articleClient0,client);
        }}
      >
        Nouvelle ArticleClient
      </Bcyan>
      <FormArticleClient
        articleclient={articleClient1}
        ref={refArticleClient}
        client={client}
        add={add}
        edit={edit}
        refetchList={refetchAll}
      />
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° BC</Table.th>
            <Table.th>Client</Table.th>
            <Table.th>Date</Table.th>
            <Table.th>famille article</Table.th>
            <Table.th>fournisseur</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {articlesClients?.map((articleclient) => (
          <tr key={articleclient.id}>
            <Table.td>{articleclient.id}</Table.td>
            <Table.td>{articleclient.idClient}</Table.td>
            <Table.td>{articleclient.date}</Table.td>
            <Table.td>{articleclient.idFamilleArticle}</Table.td>
            <Table.td>{articleclient.idFournisseur}</Table.td>
             <Table.td>
              {/*  <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refArticleClient.current(getCm(client,articleclient));
        }}
      >
       ...
      </Bcyan> */}
              <Bedit
                className="float-left mt-2"
                onClick={() => {
                  //@ts-ignore
                  refArticleClient.current(articleclient, client);
                }}
              />
            </Table.td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ListArticleClients;
