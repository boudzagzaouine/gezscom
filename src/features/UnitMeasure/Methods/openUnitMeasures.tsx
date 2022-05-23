
import { UnitMeasureJson } from "tools/types";
export type OpenUnitMeasureProp = {
    data: UnitMeasureJson
    refetch: () => void
    save: () => void
    edit: () => void
}