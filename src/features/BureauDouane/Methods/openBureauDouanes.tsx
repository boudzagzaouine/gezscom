
import { BureauDouaneJson } from "tools/types";
export type OpenBureauDouaneProp = {
    data: BureauDouaneJson
    refetch: () => void
    save: () => void
    edit: () => void
}