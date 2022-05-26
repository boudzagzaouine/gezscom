import { PaysJson } from "tools/types";
export type OpenPaysProp = {
  data: PaysJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
