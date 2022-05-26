import React, { useRef, useState } from "react";
import Section from "widgets/Section";
import Table from "widgets/Table";
import Pagin from "widgets/Pagin";
import FormExemple from "components/MyMaquete/features/forms/FormExemple";
import {
  Exemple,
  exemple0,
  ExempleJson,
} from "components/MyMaquete/tools/types";
import {
  OpenExempleProp,
  openPaginationExemples,
} from "components/MyMaquete/rtk/RtkExemple";
const ListExemple = () => {
  const [page, setPage] = useState(0);
  const openExemples: OpenExempleProp = openPaginationExemples(page);
  const exemplesJson: ExempleJson = openExemples.data;
  const exemples: Exemple[] = exemplesJson.content;
  const refetch: () => void = openExemples.refetch;
  const loadPage = (p: number) => {
    setPage(p);
    refetch();
  };
  const formExemple = useRef(null);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);
  return (
    <Section>
      <FormExemple exemple={exemple0} ref={formExemple} />
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            <Table.th>DESIGN</Table.th>
            <Table.th>QTE</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {exemples?.map((exemple) => (
          <tr key={exemple.id}>
            <Table.td>{exemple.design}</Table.td>
            <Table.td>{exemple.qte}</Table.td>
            <Table.td></Table.td>
          </tr>
        ))}
      </Table>
      <Pagin load={loadPage} visible={exemples?.length > 0} />
    </Section>
  );
};

export default ListExemple;
