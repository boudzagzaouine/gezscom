import React from 'react'
type CloseCalendarProps={
    open:boolean
    setOpen:(open:boolean)=>void
}
const CloseCalendar = ({open,setOpen}:CloseCalendarProps) => {
  return (
    <>
    {open &&<div className="absolute transparent w-full h-full left-0 top-0" onClick={()=>setOpen(false)} ></div>}
    </>
  )
}

export default CloseCalendar