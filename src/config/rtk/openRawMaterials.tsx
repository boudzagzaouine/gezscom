import { RawMaterialJson } from "tools/types";
export type OpenRawMaterialProp = {
  data: RawMaterialJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
