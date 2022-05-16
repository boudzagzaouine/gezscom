import { openOneClient } from 'components/manager/client/openOneClient'
import TestAdressLiv from 'features/tests/client/TestAdressLiv'
import TestArticleCommande from 'features/tests/client/TestArticleCommande'
import TestClient from 'features/tests/client/TestClient'
import TestCommande from 'features/tests/client/TestCommande'
import React from 'react'
import {Client} from 'tools/types'
const Test = () => {
  const coco="a5bec75c-753b-4dce-9e93-d3b4a08de6f3"
  const cl:Client=openOneClient(coco)
  console.log(cl)
  return (
    <>
    <h1>{cl.design}</h1>
    {/* <TestClient /> */}
    {/* <TestCommande /> */}
    <TestArticleCommande />
    {/* <TestAdressLiv /> */}
    </>
  )
}

export default Test