import { PayementModeJson } from "tools/types";
export type OpenPayementModeProp = {
  data: PayementModeJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
