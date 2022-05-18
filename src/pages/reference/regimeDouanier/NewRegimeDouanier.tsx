import React, { useRef } from 'react';
import { regimeDouanier0 } from 'tools/types';
import FormRegimeDouaniers from 'features/RegimeDouanier/FormRegimeDouaniers';

export default function NewRegimeDouanier() {
    const form = useRef(null)
    return (
        <div>
            <FormRegimeDouaniers ref={form} />
        </div>
    );
};

