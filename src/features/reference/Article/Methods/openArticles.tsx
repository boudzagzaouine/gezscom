
import { ArticleJson } from "tools/types";
export type OpenArticleProp = {
    data: ArticleJson
    refetch: () => void
    save: () => void
    edit: () => void
}