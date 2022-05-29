import { ArchiveIcon, ClipboardListIcon, PencilAltIcon, ReplyIcon, TrashIcon } from "@heroicons/react/solid";
import { usePaginationMatierePremiereQuery } from "config/rtk";
import { useRef, useState } from "react";
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import { getMp0, mp0, f0, MatierePremiere } from "tools/types";
import { Button } from "widgets";
import Bcyan from "widgets/Bcyan";
import Icon from "widgets/Icon";
import Mitems from "widgets/Mitems";
import Mitems0 from "widgets/Mitems0";
import Pagin from "widgets/Pagin";
import Section from "widgets/Section";
import Table from "widgets/Table";
import { MenuItems } from "widgets/TypeWidgets";
import FormMatierePremiere from "./FormMatierePremiere";

const ListAllMatierePremiere = () => {
  const [page, setPage] = useState(0);
      const loadPage = (p: number) => {
        setPage(p);
        refetch();
      };
  const { data = [], isFetching, refetch } = usePaginationMatierePremiereQuery(page);
  const  refCom=useRef(null);
  const [form, setForm]=useState(false);
  const [matierepremiere0, setMatierepremiere0]=useState(mp0);
  const [request0, setRequest0]=useState(REQUEST_SAVE);
  //console.log(data)
  const [disabled, setDisabled]=useState(true);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);

  const showFormulaire = (matiere: MatierePremiere)=>{
    setMatierepremiere0(matiere);
    setForm(true);
    setRequest0(REQUEST_EDIT);
  };
  const FormAsAdd = ()=>{
    setDisabled(false);
    setMatierepremiere0(mp0);
    setForm(true);
    setRequest0(REQUEST_SAVE);
  };
  const FormAsEdit = (matiere: MatierePremiere)=>{
    setDisabled(true);
    showFormulaire(matiere);
  };
  const FormAsUpdate=(matiere: MatierePremiere)=>{
    setDisabled(false);
    showFormulaire(matiere);  
  };
  const menu=(matiere:MatierePremiere): MenuItems[]=>{
    return[
      {
        icon: (
          <ClipboardListIcon
            className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Détail",
        action: () => {
          FormAsEdit(matiere);
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
          FormAsUpdate(matiere);
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
          del.current(matiere.id);
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
          archive.current(matiere.id);
        },
      },
      // {
      //   icon: (
      //     <ReplyIcon
      //       className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
      //       aria-hidden="true"
      //     />
      //   ),
      //   text: "Restorer",
      //   action: () => {
      //     //@ts-ignore
      //     restore.current(matiere.id);
      //   },
      // },
    ];
  };
  return (
    <Section>
          <div className="float-left w-full">
          <Bcyan className="float-left mt-2" onClick={()=>{
          //@ts-ignore
          refCom.current(getMp0(f0))
        }} >
         Nouvelle Matière première
        </Bcyan>
          <div className="float-right">
              <input
                type="text"
                className="py-3 border outline-[#ddd] border-[#ddd] float-right border-l-0 rounded-r-lg w-96"
                placeholder="Recherche"
              />
              <Button className="bg-white float-right border border-[#ddd] border-r-0 p-3 rounded-l-lg">
                <Icon i="search" cl="" />
              </Button>
            </div>
        </div>
    <FormMatierePremiere Matierep={getMp0(f0)} ref={refCom}/>
    <Table className="tab-list float-left w-full mt-2"
        thead={
          <tr>
                  <Table.th>Code</Table.th>
                  <Table.th>Désignation</Table.th>
                  <Table.th>Prix</Table.th>
                  <Table.th>Fournisseur</Table.th>
                  <Table.th>Famille</Table.th>
                  <Table.th>Origine</Table.th>
                  <Table.th></Table.th>
          </tr>
        }
      >
                  { 
                  //@ts-ignore
                  data.content?.map((matiere) => (
                    <tr key={matiere.id}>
                      <Table.td>{matiere.id}</Table.td>
                      <Table.td>{matiere.designation}</Table.td>
                      <Table.td>{matiere.prix}</Table.td>
                      <Table.td>{matiere.idFournisseur}</Table.td>
                      <Table.td>{matiere.familleMatierePremiere}</Table.td>
                      <Table.td>{matiere.origine}</Table.td>
                      <Table.td><Mitems0 menu={menu(matiere)} /></Table.td>
                    </tr>
                  ))
                }
                </Table>
                <Pagin load={loadPage} />
    </Section>
  )
}
export default ListAllMatierePremiere