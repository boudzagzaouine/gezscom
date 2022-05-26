import { RegimeDouanierJson } from "tools/types";
export type OpenRegimeDouanierProp = {
  data: RegimeDouanierJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
