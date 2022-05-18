import React, { useEffect, useState } from 'react'
import Section from "../../widgets/Section"
import { SearchIcon } from '@heroicons/react/solid';
import Table from 'widgets/Table';
import { ArchiveIcon, ClipboardListIcon,TableIcon, PencilAltIcon, ReplyIcon, TrashIcon,BriefcaseIcon } from '@heroicons/react/solid';
import Mitems from 'widgets/Mitems';
import { MenuItems } from 'widgets/TypeWidgets';
import axios from 'axios';
import { useRouter } from 'next/router';
import { usePaginationClientsQuery } from 'config/rtk';
import Pagin from 'widgets/Pagin';

type ListUtilisateurProps={
  setEstAjt:(b:boolean)=>void
setShowUser:(b:boolean)=>void
setModifier:(b:boolean)=>void
setUsername:(b:string)=>void

}



function ListUtilisateur({setEstAjt,setShowUser,setModifier,setUsername}:ListUtilisateurProps) {
    // const [data, setData] = useState([]);
    const [users,setUsers] = useState([])
    const router = useRouter()
    const [page, setPage] = useState(0);
    const loadPage = (p: number) => {
      setPage(p);
      refetch();
    };
    const { data = [], isFetching, refetch } = usePaginationClientsQuery(page);
    useEffect(() => {
      axios.get("http://localhost:4002/user")
        .then((rep) => {
          setUsers(rep.data)
          console.log(rep.data)
        })
    }, [])
 
    const FromDetails = (u:any) => {
        setUsername(u.username)
        setShowUser(true)
        
    };


    
    const FormAsUpdate = (u:any) => {
      setUsername(u.username)
      setShowUser(true)
      setModifier(true)
     
        
    };
    const deleteProduct = (u:any) => {

            console.log(u.username)
            // DELETE request using axios inside useEffect React hook
            axios.delete("http://localhost:4002/user/delete/" + u.username).then(
            (response) => {
                console.log("Record Deleted Successfully");
            }, (error) => {
                console.log("Operation Failed Here");
            }
            
        );  
        //@ts-ignore
        router.reload(window.location.pathname)  

              
      
            
    };

//sdfsdf
    const menu = (user: any): MenuItems[] => {
        return [
          {
            icon: (
              <ClipboardListIcon
                className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
                aria-hidden="true"
              />
            ),
            text: "Détail",
            action: () => {
              // console.log(user)
              FromDetails(user);
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
              FormAsUpdate(user);
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
              deleteProduct(user);
            },
          },
          

        ];
      };
  return (
    <Section>
            <div className=''>
                <div className='grid grid-cols-6 justify-start'>
                    <div className='col-span-4'>
                    <button className="h-10 w-40   rounded-md bg-gray-800 text-white float-left  " onClick={()=> setEstAjt(true)}>Nouvel Utilisateur</button>
                    </div>
                    <div className='relative text-zinc-400 flex items-center col-span-2'>
                        <SearchIcon  className='w-7 h-7 absolute ml-1 '/>
                        <input type="text" placeholder='Recherche' className='pl-8 w-full' />
                    </div>
                   
                </div>

                            
                        <Table className='tab-list mt-8 tab-list float-left w-full'
                thead = 
                    {<tr>
                        <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Utilisateur</th>
                        <th className=' top-0 z-10    py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900'>Contact</th>
                        <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 '>Rôle</th>
                        <th className=' top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 '></th>
                    </tr>}
            >
                    {users.map((p: any) => {
                        return (
                            <tr key={p.id}>
                                <Table.td >
                                <figure>
                                    <img src={(p.image)?p.image:"/images/empty-avatar.png"} alt="" />
                                    <figcaption>
                                    <span>{p.username}</span>
                                    &nbsp;&nbsp;
                                    </figcaption>
                                </figure>
                                </Table.td>
                                <Table.td>
                                      <p>{p.email}</p><br/>
                                      <p>{p.phone}</p>
                                </Table.td>
                                <Table.td>
                                  <p>{p.role}</p>
                                </Table.td>
                                <Table.td className='cursor-pointer'><Mitems menu={menu(p)} /></Table.td>
                            </tr>
                        )
                    })}
            </Table>
              <Pagin load={loadPage}  />
           
            
                        </div>
        </Section>
  )
}

export default ListUtilisateur