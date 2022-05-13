import React, { useRef } from 'react';
import { rawMaterial0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormRawMaterial from 'features/RawMaterial/FormRawMaterial';

export default function NewIncoterm() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouvelle Famille Matière Première
            </Bcyan>
            <FormRawMaterial rawMaterial={rawMaterial0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

