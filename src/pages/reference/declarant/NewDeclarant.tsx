import React, { useRef } from 'react';
import { declarant0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormDeclarant from 'features/Declarant/FormDeclarant';

export default function NewArticle() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouveau Déclarant
            </Bcyan>
            <FormDeclarant declarant={declarant0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

