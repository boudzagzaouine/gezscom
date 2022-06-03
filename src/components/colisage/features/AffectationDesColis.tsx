import React from 'react'
import { Field, Form } from 'widgets';
import Bsave from 'widgets/Bsave';
import Bcancel from 'widgets/Bcancel';
import { palette0 , } from '../tools/types';
import Modal from 'widgets/Modal';
type AffectationColis={
    showAffectation:boolean;
    setshowAffectation:(b:boolean)=>void
}
function GestionColisCommande({showAffectation,setshowAffectation}:AffectationColis) {
    const onSubmit = (data:any) => {
        console.log(data)
  
    }
    const close=()=>{
        setshowAffectation(false)
      }

  return (
    <Modal title={"Affectation des colis"} show={showAffectation} format={5} close={close}>
         <Form  defaultValues={palette0}  onSubmit={onSubmit} >
         <div className='grid grid-rows-6'>
                    <div className='grid  row-span-4'>
                        <div className='m-auto'> 
                            <div className="grid grid-cols-1 my-5 w-full  ">
                                <div>
                                    <p className='text-2xl pt-2'>Veuillez préciser les numéros des palettes</p>
                                </div>
                            </div>
                            <div className="flex my-5">
                                <div className="flex items-center ">
                                   <p className='text-2xl pt-2'>Nombre de colis : </p>
                                   <Field  label="de" name="Remarque"  className="w-20 text-2xl" />
                                   <Field  label="à" name="Remarque"  className="w-20 text-2xl" />
                                </div>
                            </div>
                            <div className=''>
                                <div className=" flex   my-5">
                                    {/* <p className=''></p> */}
                                    
                                    <Field  
                                        label="La palette de destination" 
                                        name="Remarque"  
                                        className="w-50 text-2xl"
                                        as="select"
                                        />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='row-span-1'>
                        <div className="">
                            <Bcancel className="float-right mr-10" onClick={close}/>
                            <Bsave type='submit' className="    float-right mr-10 " />
                        </div>
                    </div>
                </div>
    </Form>
    </Modal>
  )
}

export default GestionColisCommande