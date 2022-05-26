import { TransporteurJson } from "tools/types";
export type OpenTransporteurProp = {
  data: TransporteurJson;
  refetch: () => void;
  save: () => void;
  edit: () => void;
};
