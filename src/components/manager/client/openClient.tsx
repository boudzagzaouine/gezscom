import { useFetchClientsQuery } from "config/rtk";
import React from "react";
import { Client, getClient } from "tools/types";
export const openClients =():Client[] =>{
  const { data = [], isFetching, refetch } = useFetchClientsQuery();
  refetch()
  //@ts-ignore
  return data.content;
}
