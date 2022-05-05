import Link from 'next/link'
import { ChangeEventHandler, useState } from 'react'
import { useFetchClientsQuery } from '../../config/rtk'
import { REQUEST_EDIT, REQUEST_SAVE } from '../../tools/consts'
import { c0, Client } from '../../tools/types'
import Bcyan from '../../widgets/Bcyan'
import Button from '../../widgets/Button'
import Icon from '../../widgets/Icon'
import View from '../../widgets/View'
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
    const [button,setButton]=useState("")
   //const [clients,setClients]=useState(data.content)
   
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
                <View>
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
                                        <td  className="block-buttons">
                                            <Button
                                                className="to-transparent text-black border-transparent"
                                                onClick={() => {
                                                    setButton(client.id)
                                                }}
                                            >
                                                <Icon i="dots-vetical" cl="" />
                                            </Button>
                                            
                                          {button==client.id &&  <ul>
                                            <li  onClick={() => {
                                                    setClient0(client)
                                                    setForm(true)
                                                    setRequest0(REQUEST_EDIT)
                                                }}>
                  <span className="icon">
                                <Icon i="save" cl="" />
                            </span>
                            <span className="text">coco</span>
                </li>
                <li>
                  <span className="icon">
                                <Icon i="save" cl="" />
                            </span>
                            <span className="text">coco</span>
                </li>
                <li>
                  <span className="icon">
                                <Icon i="save" cl="" />
                            </span>
                            <span className="text">coco</span>
                </li>

</ul>}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </View>
            )}
        </>
    )
}

export default ClientManager
