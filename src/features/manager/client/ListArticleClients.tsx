import { useFetchArticleClientsByIdClientQuery } from "config/rtk/RtkArticleClient";
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
  const { data = [], refetch } = useFetchArticleClientsByIdClientQuery(client.id);
  const articleClient1: ArticleClient = articleClient0;
  articleClient1.idClient = client.id;
  const refCom = useRef(null);
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
          refCom.current(articleClient0);
        }}
      >
        Nouvelle ArticleClient
      </Bcyan>
      <FormArticleClient
        articleclient={articleClient1}
        ref={refCom}
        client={client}
        refetchList={refetchAll}
      />
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>N° BC</Table.th>
            <Table.th>Client</Table.th>
            <Table.th>Date</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {data?.map((ArticleClient) => (
          <tr key={ArticleClient.id}>
            <Table.td>{ArticleClient.id}</Table.td>
            <Table.td>{ArticleClient.idClient}</Table.td>
            <Table.td>{ArticleClient.date}</Table.td>
             <Table.td>
              {/*  <Bcyan
        className="float-left mt-2"
        onClick={() => {
          //@ts-ignore
          refCom.current(getCm(client,ArticleClient));
        }}
      >
       ...
      </Bcyan> */}
              <Bedit
                className="float-left mt-2"
                onClick={() => {
                  //@ts-ignore
                  refCom.current(ArticleClient, client);
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
