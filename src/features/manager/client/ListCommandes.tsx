import React, { useState } from 'react'
import { Client } from 'tools/types'
import Table from 'widgets/Table'
import { ListClientsProps } from 'widgets/TypeWidgets';

const ListCommandes = ({client}:ListClientsProps) => {
    const [commandes,setCommandes]=useState(client.commandes);
  return (
    <>
    <Table className="tab-list float-left w-full mt-2"
        thead={
          <tr>
                  <Table.th>N° BC</Table.th>
                  <Table.th>Client</Table.th>
                  <Table.th>Date</Table.th>
                  <Table.th>Saison</Table.th>
                  <Table.th>Montant</Table.th>
          </tr>
        }
      >
                  { commandes?.map((commande) => (
                      <tr key={commande.id}>
                        <Table.td>{commande.id}</Table.td>
                        <Table.td>
                          {client.design}
                        </Table.td>
                        <Table.td>{commande.date}</Table.td>
                        <Table.td>{commande.season}</Table.td>
                        <Table.td>
                       {commande.amount}
                        </Table.td>
                      </tr>
                    ))
                  }
                </Table>
    </>
  )
}

export default ListCommandes