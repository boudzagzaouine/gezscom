import React, { useRef } from 'react';
import FormArticle from 'features/Article/FormArticle';
import { Article, article0 } from 'tools/types';
import { REQUEST_EDIT, REQUEST_SAVE } from "tools/consts";
import Bcyan from "widgets/Bcyan";
export default function NewArticle() {
    const form = useRef(null)
    return (
        <div>
            <FormArticle article={article0} disable={true} ref={form} />
        </div>
    );
};

