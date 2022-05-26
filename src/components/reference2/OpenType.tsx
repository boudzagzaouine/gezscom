import { TypeJson } from "tools/types";
export type OpenTypeProp = {
  data: TypeJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
