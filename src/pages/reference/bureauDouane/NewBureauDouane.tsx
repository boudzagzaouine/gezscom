import React, { useRef } from 'react';
import FormArticle from 'features/Article/FormArticle';
import { bureauDouane0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormBureauDouane from 'features/BureauDouane/FormBureauDouane';
export default function NewArticle() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouveau Bureau Douane
            </Bcyan>
            <FormBureauDouane bureauDouane={bureauDouane0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

