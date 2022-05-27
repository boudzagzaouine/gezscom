import React from 'react'
  import { DocumentAddIcon } from '@heroicons/react/solid';
import { Button, Field } from 'widgets';
import Bcyan from 'widgets/Bcyan';
import Icon from 'widgets/Icon';
import Section from 'widgets/Section';
import Table from 'widgets/Table'
import { useFetchClientsQuery } from 'config/rtk';
const ListCommandClientGenerer = () => {

  const { data = [], isFetching, refetch } =useFetchClientsQuery();
  return (
    <Section>
      <div className="float-left w-full">
      <Bcyan className="float-right mt-2" onClick={()=>{ }} >Générer Commande(s) fournisseur</Bcyan>
      </div>
          <div className="float-left w-full">
          <h1 className="float-left"><b> Commandes Clients a Générer</b></h1>
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
    <Table className="tab-list float-left w-full mt-2"
        thead={
          <tr>
                  <Table.th><input type="checkbox" name="com"/></Table.th>
                  <Table.th>N° BC</Table.th>
                  <Table.th>Client</Table.th>
                  <Table.th>Date</Table.th>
                  <Table.th>Saison</Table.th>
          </tr>
        }
      >
                  { 
                  //@ts-ignore
                  data.content?.map((commande) => (
                    <tr key={commande.id}>
                      <Table.th><input type="checkbox" name="com"/></Table.th>
                      <Table.td></Table.td>
                      <Table.td></Table.td>
                      <Table.td></Table.td>
                      <Table.td></Table.td>
                    </tr>
                  ))
                }
                </Table>
    </Section>
  )
}

export default ListCommandClientGenerer