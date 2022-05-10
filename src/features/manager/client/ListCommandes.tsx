import { DocumentAddIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react'
import { cm0 } from 'tools/types';
import Bcyan from 'widgets/Bcyan';
import Table from 'widgets/Table'
import { ListClientsProps } from 'widgets/TypeWidgets';
import AddCommande from './AddCommande';

const ListCommandes = ({client}:ListClientsProps) => {
    const [commandes,setCommandes]=useState(client.commandes);
    const  refCom=useRef(null)
  return (
    <>
    <Bcyan className="float-left mt-2" onClick={()=>{
      //@ts-ignore
      refCom.current(cm0)
    }} >
    <DocumentAddIcon className="h-8 w-8 text-white group-hover:text-gray-500" aria-hidden="true" />
              </Bcyan>
              <AddCommande command={cm0} ref={refCom}/>
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