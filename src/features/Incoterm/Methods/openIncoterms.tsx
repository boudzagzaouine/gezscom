
import { IncotermJson } from "tools/types";
export type OpenIncotermProp = {
    data: IncotermJson
    refetch: () => void
    save: () => void
    edit: () => void
}