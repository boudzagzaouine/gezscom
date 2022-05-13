import React, { useRef } from 'react';
import { article0, unitMeasure0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
import FormUnitMeasure from 'features/UnitMeasure/FormUnitMeasure';
export default function NewUnitMeasure() {
    const form = useRef(null)
    return (
        <div>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouvelle Unité de Mesure
            </Bcyan>
            <FormUnitMeasure unitMeasure={unitMeasure0} request={REQUEST_SAVE} disable={true} ref={form} />
        </div>
    );
};

