import { ArchiveIcon, BanIcon, ClipboardListIcon, DuplicateIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import Mitems from 'components/Mitems'
import Link from 'next/link'
import { ChangeEventHandler, useState } from 'react'
import { MenuItems } from 'widgets/TypeWidgets'
import { useFetchClientsQuery } from '../../config/rtk'
import { REQUEST_EDIT, REQUEST_SAVE } from '../../tools/consts'
import { c0, Client } from '../../tools/types'
import Bcyan from '../../widgets/Bcyan'
import Button from '../../widgets/Boton'
import Icon from '../../widgets/Icon'
import Section from '../../widgets/Section'
import FormClientManager from './formulaires/FormClientManager'

const ClientManager = () => {
   const search = (key:string,obj:Client[]):Client[] => {
        const clientsearch:Client[] = obj.filter(
            (o:Client) => { return o.id.match(key)!=null||
                o.design.match(key)!=null||
                o.concat.match(key)!=null||
                o.image.match(key)!=null||
                o.email.match(key)!=null||
                o.tel.match(key)!=null||
                o.device.match(key)!=null||
                o.adrLiv.match(key)!=null||
                o.incoterm.match(key)!=null||
                o.paymentChoice.match(key)!=null||
                o.adrFact.match(key)!=null||
                o.bank.match(key)!=null||
                o.rib.match(key)!=null||
                o.swift.match(key)!=null; }
          );
        return clientsearch
    }
    const [form, setForm] = useState(false)
    const [client0, setClient0] = useState(c0)
    const [request0, setRequest0] = useState(REQUEST_SAVE)
    const { data = [], isFetching, refetch } = useFetchClientsQuery()
    const showFormulaire=(client:Client)=>{
        setClient0(client)
        setForm(true)
        setRequest0(REQUEST_EDIT)
    }
   const menu=(client:Client):MenuItems[]=>{
       return [
    {"icon":<ClipboardListIcon className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500" aria-hidden="true" />,"text":"Détail","action":()=>{showFormulaire(client)}},
    {"icon":<PencilAltIcon className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500" aria-hidden="true" />,"text":"Modifier","action":()=>{alert("fofo")}},
    {"icon":<TrashIcon className="mr-3 h-8 w-8 text-rose-900 group-hover:text-gray-500" aria-hidden="true" />,"text":"Supprimer","action":()=>{alert("fofo")}},
    {"icon":<ArchiveIcon className="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500" aria-hidden="true" />,"text":"Archiver","action":()=>{alert("fofo")}},
]
}
    return (
        <>
            {form && (
                <FormClientManager
                    request={request0}
                    client={client0}
                    closed={() => {
                        setForm(false)
                        setRequest0(REQUEST_SAVE)
                        refetch()
                    }}
                />
            )}
            {!form && (
                <Section>
                    <div className="float-left w-full">
                        <Bcyan
                            className="float-left"
                            onClick={() => {
                                setClient0(c0)
                                setForm(true)
                            }}
                        >
                            <Icon i="user-add" cl="" />
                        </Bcyan>

                        <div className="float-right">
                            <Button className="bg-white float-left border border-r-0 p-3 rounded-l-lg">
                                <Icon i="search" cl="" />
                            </Button>
                            <input
                                type="text"
                                className="py-3 border outline-slate-200 float-left border-l-0 rounded-r-lg w-96"
                            />
                        </div>
                    </div>
                    <table className="tab-list float-left w-full mt-8">
                        <tr>
                            <th>nom client</th>
                            <th>contact</th>
                            <th>Icoterm</th>
                            <th>Mode règlement</th>
                            <th></th>
                        </tr>
                        <tbody>
                            {
                                //@ts-ignore
                                data.content?.map((client) => (
                                    <tr key={client.id}>
                                        <td>
                                            <figure>
                                                <img
                                                    src={
                                                        '/images/empty-avatar.png'
                                                    }
                                                    alt=""
                                                />
                                                <figcaption>
                                                    <span>{client.design}</span>
                                                    &nbsp;&nbsp;
                                                    <span>{client.concat}</span>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>{client.tel}</li>
                                                <li>{client.email}</li>
                                            </ul>
                                        </td>
                                        <td>{client.incoterm}</td>
                                        <td>{client.paymentChoice}</td>
                                        <td>
                                        <Mitems menu={menu(client)} />
                                        </td>
                                     
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Section>
            )}
        </>
    )
}

export default ClientManager
