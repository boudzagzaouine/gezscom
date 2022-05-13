import React, { useRef } from 'react';
import { incoterm0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormIncoterm from 'features/Incoterm/FormIncoterm';

export default function NewIncoterm() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouveau Incoterm
            </Bcyan>
            <FormIncoterm incoterm={incoterm0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

