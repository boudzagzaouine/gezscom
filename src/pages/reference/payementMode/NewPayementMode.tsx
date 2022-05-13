import React, { useRef } from 'react';
import { payementMode0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormPayementMode from 'features/PayementMode/FormPayementMode';

export default function NewPayementMode() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouveau Mode de Réglement
            </Bcyan>
            <FormPayementMode payementMode={payementMode0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

