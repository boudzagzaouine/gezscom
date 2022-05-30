import { ArchiveIcon, ClipboardListIcon, DocumentAddIcon, PencilAltIcon, ReplyIcon, TrashIcon } from '@heroicons/react/solid';
import { usePaginationCommandesFournisseurQuery } from 'config/rtk';
import { OpenCommandesFournisseurProp, openPaginationCommandesFournisseurs } from 'config/rtk/rtkFournisseur';
import React, { useRef, useState } from 'react'
import { REQUEST_EDIT, REQUEST_SAVE } from 'tools/consts';
import { f0, cf0, getCf0, Fournisseur, CommandeFournisseur } from 'tools/types';
import { Button } from 'widgets';
import Bcyan from 'widgets/Bcyan';
import Icon from 'widgets/Icon';
import Mitems from 'widgets/Mitems';
import Mitems0 from 'widgets/Mitems0';
import Pagin from 'widgets/Pagin';
import Section from 'widgets/Section';
import Table from 'widgets/Table'
import { MenuItems } from 'widgets/TypeWidgets';
import FormCommandes1 from './FormCommandes1';

const ListAllCommandes = () => {
    const [page, setPage] = useState(0);
      const loadPage = (p: number) => {
        setPage(p);
        refetch();
      };
      const openCommandFournisseur:OpenCommandesFournisseurProp =openPaginationCommandesFournisseurs(page)
      const commandFournisseurs:CommandeFournisseur[]=openCommandFournisseur.data.content
      const refetch=openCommandFournisseur.refetch
     const  refCom=useRef(null);
    const [form, setForm]=useState(false);
    const [commandFournisseur0, setcommandFournisseur0]=useState(cf0);
    const [disabled, setDisabled]=useState(true);
    const [request0, setRequest0]=useState(REQUEST_SAVE);
    const showFormulaire = (commande: CommandeFournisseur)=>{
      setcommandFournisseur0(commande);
      setForm(true);
      setRequest0(REQUEST_EDIT);
    };
    const FormAsEdit = (commande: CommandeFournisseur)=>{
      setDisabled(true);
      showFormulaire(commande);
    };
    const FormAsUpdate=(commande: CommandeFournisseur)=>{
      setDisabled(false);
      showFormulaire(commande);  
    };
  return (
    <>
 <Section>
          <div className="float-left w-full">
          <Bcyan className="float-left mt-2" onClick={()=>{
      //@ts-ignore
      refCom.current(cf0)
    }} >
    Nouvelle Commande
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
    <FormCommandes1 command={cf0} ref={refCom}/>
    <Table className="tab-list float-left w-full mt-2"
        thead={
          <tr>
                  <Table.th>N° Commande</Table.th>
                  <Table.th>Fournisseur</Table.th>
                  <Table.th>Date de Commande</Table.th>
                  <Table.th>Date Livraison</Table.th>
                  <Table.th>Origine</Table.th>
                  <Table.th>Montant</Table.th>
                  <Table.th></Table.th>
          </tr>
        }
      >
                  { 
                  
                  commandFournisseurs?.map((commande) => (
                    <tr key={commande.id}>
                      <Table.td>{commande.id}</Table.td>
                      <Table.td>
                        fournisseur
                      </Table.td>
                      <Table.td>{commande.dateCommande}</Table.td>
                      <Table.td>{commande.dateLivraison}</Table.td>
                      <Table.td>-</Table.td>
                      <Table.td>Montant</Table.td>
                      <Table.td>
                          <Mitems
        archive={() => {
          //@ts-ignore
          archive.current(commande.id);
        }}
        del={() => {
          //@ts-ignore
          del.current(commande.id);
        }}
        edit={() => {
          FormAsEdit(commande);
        }}
        obj={commande}
        update={() => {
          FormAsUpdate(commande);
        }}
      />
                        </Table.td>
                    </tr>
                  ))
                }
                </Table>
                <Pagin visible={commandFournisseurs?.length >0} load={loadPage} max={commandFournisseurs?.length } />
    </Section>
  </>
  )
}

export default ListAllCommandes