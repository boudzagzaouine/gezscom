import { DeviseJson } from "tools/types";
export type OpenDeviseProp = {
    data: DeviseJson
    refetch: () => void
    save: () => void
    edit: () => void
}