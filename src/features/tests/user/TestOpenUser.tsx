import React from 'react'
import {OpenUserProp,openUsers} from "config/rtk/RtkUser"
import {User} from "tools/types"
const TestOpenUser = () => {
    const userOpen:OpenUserProp=openUsers()
    const users:User[]=userOpen.data
    console.log(users)
  return (
    <div>
      <h1>test user</h1>
        <ul>
        {users.map((user)=>(
<li key={user.id}>{user.firstName}</li>
))}
        </ul>
    </div>
  )
}

export default TestOpenUser