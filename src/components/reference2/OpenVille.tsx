import { VilleJson } from "tools/types";
export type OpenVilleProp = {
  data: VilleJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
