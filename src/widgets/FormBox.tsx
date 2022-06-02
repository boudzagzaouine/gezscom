import React from 'react';

import Bcancel from './Bcancel';
import Bsave from './Bsave';
import BsavEndNew from './BsavEndNew';
import { Field } from './Field';
import { Form } from './Form';
import Modal from './Modal';

const FormBox = () => {
  return (
    <Modal
    show={show}
    title={""}
    format={5}
    close={close}
  >
    <div className="float-left w-full text-sm">
              <Form
        defaultValues={emptyObject}
        onSubmit={
         ()=>{}
        }
      >
        <div className=" float-left w-1/2">
          <Field
            label={""}
            name="design"
            disabled={false}//required={true}
          />
      </div>
     
        
        <div className="mt-5 b-ajust-r">
                 <Bsave
        className="float-right"
        onClick={() => {
          setTimeout(() => {
           // refetchArticle();
            close();
          }, 500);
        }}
      />
      <BsavEndNew
               className="ml-10 mr-2"
               onClick={() => {
                 setTimeout(() => {
                //  refetchArticle();
                   }, 500);
               }}
            />
           
          </div>
    
      </Form>
           <Bcancel
           className="float-right mt-5 b-ajust"
           onClick={() => {
             setShow(false);
           }}
         />
      </div>
  </Modal>
  )
}

export default FormBox