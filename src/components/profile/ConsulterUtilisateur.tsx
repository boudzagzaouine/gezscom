import React, { useState,useEffect } from 'react'
import Section from "../../widgets/Section"
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { ROLE } from 'tools/consts';
import {ClipboardListIcon } from '@heroicons/react/solid';
import NavTabs from 'widgets/NavTabs';
import {  MenuNavTabs } from 'widgets/TypeWidgets';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { u0, Users } from 'tools/types';
type ConsulterUtilisateurProps={
    setShowUser:(b:boolean)=>void
    estModifier:boolean
    setModifier:(b:boolean)=>void
    username:string
}

function ConsulterUtilisateur({setShowUser,estModifier,setModifier,username}:ConsulterUtilisateurProps) {
    const { register, handleSubmit } = useForm();
    const [user,setUser] = useState<Users>(u0);
    const onSubmit = (data:any) => console.log(data);
    useEffect(() => {
        axios.get("http://localhost:4002/user/"+username)
          .then((rep) => {
            setUser(rep.data)
            console.log(rep.data)
          })
      }, [])
    

    const tabs: MenuNavTabs[] = [
        {
            id:-1,
            name: (<><ClipboardListIcon className="" aria-hidden="true" /><span className="">Commandes Clients</span></>),
            featured: (<div className='w-full h-full'>
                <div className='relative text-zinc-400 flex items-center  col-span-2 w-full'>
                    <div className='float-right m-10 w-35'>
                        <SearchIcon  className='w-7 h-7 absolute m-2 '/>
                        <input type="text" placeholder='Recherche' className='pl-8 ' />
                    </div>
                    
                        
                </div>
            </div>),
        },
    ]
  return (
    <Section>
          <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-rows-6'>
                    <div className='row-span-1'>
                        <p className='float-left'>Détail d'utilisateur</p>
                        <XIcon className='w-6 h-6 float-right cursor-pointer' onClick={()=>setShowUser(false)} />
                    </div>
                    <div className='grid grid-cols-6 row-span-4'>
                        <div className='col-span-5'>
                            
                            <div className="my-5">
                                <div className="w-1/2  grid grid-cols-3">
                                    <label  className=" ">Genre</label>
                                        <div className="  ">
                                            <label  >
                                                <input name="genre"  value="h" type="radio" className='mr-1' disabled={!estModifier} checked={true} />
                                                Homme
                                            </label>
                                        </div>
                                        <div className=" ">
                                            <label  >
                                                <input name='genre'  value="f" type="radio"  className='mr-1' disabled={!estModifier}   />
                                                Femme
                                            </label>
                                        </div>
                                </div>
                            </div>
                            <div className="flex my-5 ">
                                <div className="flex items-center">
                                    <label  className="w-56">Nom</label>
                                    <div className=" ">
                                        <input type="text"  className=''  disabled={!estModifier} {...register("nom")} value={user.first_name} />
                                    </div>
                                </div>
                                <div className="flex items-center ml-5">
                                    <label  className="w-44">Prénom</label>
                                    <div className=" ">
                                        <input type="text"   className='' disabled={!estModifier}  {...register("prenom")} value={user.last_name} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-5">
                            <div className="flex items-center my-5">
                                    <label  className="formbuilder-select-label w-56">Rôle</label>
                                    <select className='w-52' disabled={!estModifier}  {...register("role")}  >
                                        {
                                            ROLE.map(val =>  <option value={val}  >{val}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="flex items-center ml-5">
                                    <label  className="w-44">Email</label>
                                    <div className=" ">
                                        <input type="text"   className='' disabled={!estModifier}  {...register("email")} value={user.email}  />
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-5">
                                <div className="flex items-center  ">
                                    <label  className="formbuilder-select-label w-56">Téléphone</label>
                                    <div className=" ">
                                        <input type="text"   className=''  disabled={!estModifier}  {...register("phone")} value={user.tele} />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                    <label  className=""></label>
                                    <div className="">
                                        <div className="my-5">
                                            <label >
                                                <input    value="option-1" type="checkbox" className="mr-5" disabled={!estModifier} />
                                                Créer un lien de du profile automatiquement 
                                            </label>
                                        </div>
                                        <div className="my-5">
                                            <label >
                                                <input   type="checkbox" className="mr-5" disabled={!estModifier} />
                                                Automatise l'utilisateur d'acceder au systeme
                                            </label>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='col-span-1'>
                        <div className=" justify-center col-span-2">
                        <div className="grid justify-center">
                        <div className="w-40 h-40  block mt-10">
                                <img /*"src={(user.image)?user.image:"/images/empty-avatar.png"}"*/ />
                        </div>
                        <div className="text-sm text-gray-600 ">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>
                                            <DotsHorizontalIcon className="w-8 h-8 text-gray-400 m-auto"  />
                                                
                                        </span>
                                        <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                        disabled={!estModifier}
                                        />
                                    </label>
                                </div>
                        </div>
                        
                    </div>
                        </div>
                    </div>
                    <div className='row-span-1'>
                    {
                    !estModifier && <div className="">
                        
                        <button className="h-12 w-40  mb-10  rounded-md bg-gray-800 text-white float-right mr-28 " onClick={()=> setModifier(true)}>Modifier</button>
                    
                     
                     </div>
                }
                {
                    estModifier && <div className="">
                        <button className="h-12 w-40  mb-10 rounded-md bg-gray-800 text-white float-right mr-28 " onClick={()=> setModifier(false)} >Annuler</button>
                        <button className="h-12 w-40  mb-10 rounded-md bg-gray-800 text-white float-right mr-10 " type='submit' onClick={() => setModifier(false)} >Sauvgarder</button>
                    </div>
                }
                    </div>
                </div>
                <div>
                    <NavTabs tab={tabs}></NavTabs>
                </div>
                </form>
        </Section>
  )
}

export default ConsulterUtilisateur