
import { RawMaterialJson } from "tools/types";
export type OpenClientProp = {
    data: RawMaterialJson
    refetch: () => void
    save: () => void
    edit: () => void
}