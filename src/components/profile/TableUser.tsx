import React from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline';

const TableUser = () => {




  return (
    <>
        <tr className="bg-white border-b relative ">
        <td className="py-2 px-4 w-4/12 whitespace-nowrap text-sm font-medium text-gray-900">
          <div className='grid grid-cols-4 items-center  justify-center  '>
            <div className='bg-gray-200 w-16 h-16 rounded-xl col-span-1  '>
                
            </div>
            <div className='col-span-3 text-left'>
                <p>Utilisateur 1</p>
            </div>
          </div>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            Larry the Bird
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            Larry the Bird
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <DotsVerticalIcon className='h-8 w-8 p-0 text-black cursor-pointer' href='./' />  
        </td>
        <td>
        </td>
        </tr>
        
        
    </>
  )
}

export default TableUser


