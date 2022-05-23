import  Section  from 'widgets/Section';
import React from 'react'
import { OpenClientProp, openClients } from 'components/manager/client/openClients'
import { Client, ClientJson ,c0, AdressLivJson, AdressLiv, cm0, adr0} from 'tools/types';
import { Field, Form } from 'widgets';
import Bsave from 'widgets/Bsave';
import { openAdressLivProps, openAdressLivs } from 'components/manager/client/openAdressLivs';
import Bcyan from 'widgets/Bcyan';
import Pagin from 'widgets/Pagin';
const TestOpenClient = () => {
    const clientsToOpen: OpenClientProp = openClients();
    const clientJson: ClientJson = clientsToOpen.data
    const clients: Client[] = clientJson.content
    const refetchClient:()=>void=clientsToOpen.refetch
    const saveClient=clientsToOpen.save
    const editClient=clientsToOpen.edit
    /***********************************************/
    const adressLivsToOpen: openAdressLivProps = openAdressLivs();
  ///  const adressLivJson: AdressLivJson =adressLivsToOpen.data
    const adressLivs: AdressLiv[] =adressLivsToOpen.data.content
    const refetchAdressLiv:()=>void=adressLivsToOpen.refetch
    const saveAdressLiv=adressLivsToOpen.save
    const editAdressLiv=adressLivsToOpen.edit
    return (
        <Section>
       <div className="float-left w-1/2">  
       <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>design</th><th>email</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
          clients?.map((d:Client)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.design}</td>
                <td>{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagin load={loadPage} visibled={clients.lenght>0} />
        <Form defaultValues={c0} onSubmit={editClient}>
                  <Field label="id" name="id"  />
                  <Field label="design " name="design"  />
                   <Field label="email" name="email"  />
                   <Bsave onClick={()=>{
                     setTimeout(() => {
                      refetchClient()
                     }, 600);
                   }} />
     
             </Form>
            <Bcyan onClick={()=>{refetchClient()}}>reload</Bcyan>
        </div>
       <div className="float-left w-1/2">
       <table className="float-left w-full">
          <thead>
            <tr><th>id</th><th>adress</th></tr>
          </thead>
          <tbody>
            {
            //@ts-ignore
            adressLivs?.map((d:AdressLiv)=>(
       //     data?.map((d:AdressLiv)=>(
              <tr key={d.id}>
                <td>{d.id}</td>
               <td>{d.adress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form defaultValues={adr0} onSubmit={saveAdressLiv}>
                  <Field label="id" name="id"  />
                  <Field label="adress" name="adress"  />
                   <Bsave onClick={()=>{
                     setTimeout(() => {
                       refetchAdressLiv()
                     }, 600);
                   }} />
     
             </Form>
            
  
       </div>
          </Section>   
      
    )
}

export default TestOpenClient