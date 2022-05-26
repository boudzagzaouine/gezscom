import axios from "axios";
import {
  useAddDumMatMutation,
  useEditDumMatMutation,
  useFetchDumMatsByIdDumQuery,
} from "config/rtk/rtkDumMat";
import React, { useState } from "react";
import { style_add_line } from "tools/constStyle";
import { DumMat, dumMat0 } from "tools/types";
import Bedit from "widgets/Bedit";
import Table from "widgets/Table";
import FormDumMat from "./FormDumMat";

type DumMatProps = {
  idDum: string;
};
const DumMat = ({ idDum }: DumMatProps) => {
  /*  const [page, setPage] = useState(0);
     const loadPage = (p: number) => {
       setPage(p);
       refetch();
     }; */
  const { data = [], isFetching, refetch } = useFetchDumMatsByIdDumQuery(idDum);
  const [selectedIdDum, setSelectedIdDum] = useState("new");
  const [formArt, setFormArt] = useState(false);
  const dumMat1: DumMat = dumMat0;
  dumMat1.idDum = idDum;
  const close = () => {
    setFormArt(false);
    setSelectedIdDum("new");
  };
  const open = (id: string) => {
    setFormArt(true);
    setSelectedIdDum(id);
  };
  const [save] = useAddDumMatMutation();
  const [edit] = useEditDumMatMutation();
  return (
    <div>
      <Table
        className="tab-list float-left w-full mt-8"
        thead={
          <tr>
            <Table.th>Famille Matière Première</Table.th>
            <Table.th>Quantité</Table.th>
            <Table.th>Unité de Mesure</Table.th>
            <Table.th>Poids</Table.th>
            <Table.th>Valeur</Table.th>
            <Table.th></Table.th>
          </tr>
        }
      >
        {
          //@ts-ignore
          data.content?.map((dumMatiere) => (
            // articles?.map((article) => (
            <>
              <tr key={dumMatiere.id}>
                <Table.td>{dumMatiere.id}</Table.td>
                <Table.td>{dumMatiere.matierePremiere} </Table.td>
                <Table.td>{dumMatiere.quantite} </Table.td>
                <Table.td>{dumMatiere.unitMeasure}</Table.td>
                <Table.td>{dumMatiere.poids}</Table.td>
                <Table.td>{dumMatiere.valeur}</Table.td>
                <Table.td>
                  <Bedit
                    onClick={() => {
                      open(dumMatiere.id);
                    }}
                  />
                </Table.td>
              </tr>
              {selectedIdDum == dumMatiere.id && formArt && (
                <FormDumMat
                  dumMat={dumMatiere}
                  close={close}
                  saveDumMatiere={edit}
                  refetch={refetch}
                />
              )}
            </>
          ))
        }
        {selectedIdDum == "new" && formArt && (
          <FormDumMat
            dumMat={dumMat1}
            close={close}
            saveDumMatiere={save}
            refetch={refetch}
          />
        )}
        {!formArt && (
          <tr
            onClick={() => {
              open("new");
            }}
          >
            <Table.td className={style_add_line}>ajouter une ligne</Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
            <Table.td className={style_add_line}></Table.td>
          </tr>
        )}
      </Table>
    </div>
  );
};

export default DumMat;
