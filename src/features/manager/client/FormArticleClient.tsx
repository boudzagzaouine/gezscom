import React, { forwardRef, Ref, useEffect } from 'react'
import { ArticleClient, Client } from 'tools/types'
type FormArticleClientProp={
  articleclient:ArticleClient
  client:Client
  refetchList:()=>void
}
const FormArticleClient = ({articleclient,client,refetchList}:FormArticleClientProp,ref:Ref<void>) => {
  useEffect(()=>{

  })
  return (
    <div>FormArticleClients</div>
  )
}

export default forwardRef(FormArticleClient)