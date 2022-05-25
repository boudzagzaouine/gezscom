
import { DumJson } from "tools/types";
export type OpenDumProp = {
    data: DumJson
    refetch: () => void
    save: () => void
    edit: () => void
}