import React from 'react'
import Image from 'next/image'

function OneUser() {
  return (
    <div className=''>
        <div className=''>
            <Image src="/../../public/images/empty-avatar.png" layout='fill' />
        </div>
        <div className=''>
            <p>Utilisateur 1</p>
        </div>
    </div>
  )
}

export default OneUser