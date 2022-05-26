import { c0, Client } from "./types";

export const getClient = (id: string, obj: Client[]): Client => {
  const apr = obj?.find((o: Client) => {
    return o.id === id;
  });
  return apr || c0;
};
