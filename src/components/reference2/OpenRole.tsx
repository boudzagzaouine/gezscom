import { RoleJson } from "tools/types";
export type OpenRoleProp = {
    data: RoleJson
    refetch: () => void
    save: () => void
    edit: () => void
}