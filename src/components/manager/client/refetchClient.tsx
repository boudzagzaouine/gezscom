import { useFetchClientsQuery } from "config/rtk/RtkClient";
export const refetchClient = (): void => {
  const { refetch } = useFetchClientsQuery();
  refetch();
};
