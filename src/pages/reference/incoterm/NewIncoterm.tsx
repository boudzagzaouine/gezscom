import React, { useRef } from 'react';
import { incoterm0 } from 'tools/types';

import FormIncoterm from 'features/Incoterm/FormIncoterm';

export default function NewIncoterm() {
    const form = useRef(null)
    return (
        <div>

            <FormIncoterm incoterm={incoterm0} disable={true} ref={form} />
        </div>
    );
};
