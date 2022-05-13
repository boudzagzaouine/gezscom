import ListArticles from "features/Article/ListArticles";
import React, { useRef } from "react";
import { article0 } from "tools/types";
import Bcyan from "widgets/Bcyan";

const AllArticles = () => {
    const form = useRef(null);

    return (
        <>
            <Bcyan onClick={() => {
                //@ts-ignore
                form.current()
            }}>
                Nouvelle Article
            </Bcyan>
            <ListArticles article={article0} />
        </>
    );
};

export default AllArticles;

