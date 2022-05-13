import React, { useRef } from 'react';
import { regimeDouanier0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormRegimeDouaniers from 'features/RegimeDouanier/FormRegimeDouaniers';

export default function NewRegimeDouanier() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouveau Regime Douanier
            </Bcyan>
            <FormRegimeDouaniers regimeDouanier={regimeDouanier0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

