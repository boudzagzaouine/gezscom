import React, { useRef } from 'react';
import { payementMode0 } from 'tools/types';
import FormPayementMode from 'features/PayementMode/FormPayementMode';

export default function NewPayementMode() {
    const form = useRef(null)
    return (
        <div>

            <FormPayementMode ref={form} />
        </div>
    );
};

