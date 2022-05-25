import { DocumentJson } from "tools/types";
export type OpenDocumentProp = {
    data: DocumentJson
    refetch: () => void
    save: () => void
    edit: () => void
}