import React, { useRef } from 'react';
import FormArticle from 'features/Article/FormArticle';

export default function NewArticle() {
    const form = useRef(null)
    return (
        <div>
            <FormArticle ref={form} />
        </div>
    );
};


