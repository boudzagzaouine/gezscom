import React, { ChangeEvent, useState } from "react";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import {
  arc0,
  Commande,
  ArticleCommande,
  ArticleClient,
  articleClient0,
} from "tools/types";
import Table from "widgets/Table";
import Bcancel from "widgets/Bcancel";
import Bsave from "widgets/Bsave";
import {
  OpenArticleClientByClientProp,
  openArticleClientsByClient,
} from "config/rtk/RtkArticleClient";
type FormArticleCommandeProp = {
  articleCommande: ArticleCommande;
  idClient: string;
  saveArticle: (art: ArticleCommande) => void;
  close: () => void;
  refetch: () => void;
};
const FormArticleCommande = ({
  articleCommande,
  idClient,
  saveArticle,
  close,
  refetch,
}: FormArticleCommandeProp) => {
  const articleClientsOpen: OpenArticleClientByClientProp =
    openArticleClientsByClient(idClient);
  const articlesClients: ArticleClient[] = articleClientsOpen.data;
  const [articleCommande1, setArticleCommande1] =
    useState<ArticleCommande>(articleCommande);
  return (
    <>
      <tr className="relative">
        <div className="absolute left-0 top-0 bg-[#ccc]">
          <Form defaultValues={articleCommande1} onSubmit={saveArticle}>
            <Table.td>
              <Field
                label=""
                name="design"
                as="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setArticleCommande1({
                    ...articleCommande1,
                    design: e.target.value,
                  });
                }}
              >
                {[articleClient0, ...(articlesClients || [])]?.map(
                  (c: ArticleClient) => (
                    <option value={c.design}>{c.design}</option>
                  )
                )}
              </Field>
            </Table.td>
            <Table.td>
              <Field name="qte" placeholder="qte" />
            </Table.td>
            <Table.td>
              <Field name="portion" placeholder="portion" />
            </Table.td>
            <Table.td>
              <Field name="pu" placeholder="pu" />
            </Table.td>
            <Table.td>
              <div className="float-right w-full">
                <Bsave
                  onClick={() => {
                    setTimeout(() => {
                      refetch();
                    }, 500);
                  }}
                />
              </div>
            </Table.td>
          </Form>
          <div className="float-right w-full">
            <Bcancel
              className="absolute right-0"
              onClick={() => {
                close();
              }}
            />
          </div>
        </div>
      </tr>
    </>
  );
};

export default FormArticleCommande;
