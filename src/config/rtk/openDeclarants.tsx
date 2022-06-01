import { DeclarantJson } from "tools/types";
export type OpenDeclarantProp = {
  data: DeclarantJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
