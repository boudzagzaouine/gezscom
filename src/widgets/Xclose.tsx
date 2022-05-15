import { XIcon } from '@heroicons/react/solid'
import React from 'react'
type XcloseProp = {
    close: () => void
}
//x-close absolute top-1 right-1 cursor-pointer p-2.5 bg-transparent
const Xclose = ({ close }: XcloseProp) => {
    return (
        <button className="absolute top-1 right-1 cursor-pointer p-2.5 bg-transparent" onClick={() => {
            close();
        }}>
            <XIcon className="h-8 w-8 text-cyan-700 group-hover:text-gray-500" aria-hidden="true" />
        </button>
    )
}

export default Xclose;