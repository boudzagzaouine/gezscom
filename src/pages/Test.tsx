import { openOneClient } from 'components/manager/client/openOneClient'
import TestAdressLiv from 'features/tests/client/TestAdressLiv'
import TestArticleCommande from 'features/tests/client/TestArticleCommande'
import TestClient from 'features/tests/client/TestClient'
import TestCommande from 'features/tests/client/TestCommande'
import React, { useState } from 'react'
import {Client,ClientJson} from 'tools/types'
import DatePicker from "react-datepicker";  
import {OpenClientProp,openClients} from 'components/manager/client/openClients'
import "react-datepicker/dist/react-datepicker.css";  
import TestOpenClient from 'features/tests/opens/TestOpenClient'
  
const Test = () => {
  const [startDate, setStartDate] = useState(new Date());  
  
  return (
    <>
    {/* <h1>{ff}</h1> */}
    {/* <TestClient /> */}
    {/* <TestCommande /> */}
    {/* <TestArticleCommande /> */}
    {/* <TestAdressLiv /> */}
    {/* <DatePicker selected={startDate} onChange={(date:Date) =>   setStartDate(date)} /> */}  
    <TestOpenClient />
    </>
  )
}

export default Test