import { DechargeJson } from "tools/types";
export type OpenDechargeProp = {
  data: DechargeJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
