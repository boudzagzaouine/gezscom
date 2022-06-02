import { openCrud, OpenCrudProp } from 'config/rtk/rtkGen';
import React from 'react';
import { PayementMode, payementMode0 } from 'tools/types';
import { Field, Form } from 'widgets';
import Bcyan from 'widgets/Bcyan';
import Bsave from 'widgets/Bsave';
import Section from 'widgets/Section';

const TestOpengeneral = () => {
   const open: OpenCrudProp=openCrud ("payementModes")
  
  const list: PayementMode[] = open.data.content;
  const refetch: () => void = open.refetch;
  const save = open.save;
  const edit = open.edit;
  /***********************************************/
  
  return (
    <Section>
        <table className="float-left w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>design</th>
              <th>code</th>
            </tr>
          </thead>
          <tbody>
            {
              list?.map((d: PayementMode) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.design}</td>
                  <td>{d.code}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Form defaultValues={payementMode0} onSubmit={save}>
          <Field label="id" name="id" />
          <Field label="design " name="design" />
          <Field label="code" name="code" />
          <Bsave
            onClick={() => {
              setTimeout(() => {
                refetch();
              }, 600);
            }}
          />
        </Form>
        <Bcyan
          onClick={() => {
            refetch();
          }}
        >
          reload
        </Bcyan> 
 
    </Section>
  );
};

export default TestOpengeneral;
