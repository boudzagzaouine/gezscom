import React from 'react'
import NavTabs from 'widgets/NavTabs'
import {MenuNavTabs} from 'widgets/TypeWidgets'

        type ListCommandeClientProps={
            id:string
        }
const ListCommandeClient = ({id}:ListCommandeClientProps) => {
    const  commanndes: MenuNavTabs[]= [
        {
          name: 'coco',
          featured: (<div className="bg-[#f00]">women</div>),
        },
        {
            name: 'fofo',
            featured: (<div className="bg-[#0f0]">men</div>),
          },
          {
            name: 'ffsdfofo',
            featured: (<div className="bg-[#0f0]">mjjjjen</div>),
          },
          {
            name: 'fogggfo',
            featured: (<div className="bg-[#0f0]">mhhhen</div>),
          },
            ] 
  return (
   <>
   <NavTabs tab={commanndes} />
   </>
    )

}

export default ListCommandeClient