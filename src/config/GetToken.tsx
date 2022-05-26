import { useSession } from "next-auth/react";
import React from "react";

export const GetToken = async () => {
  const { data: token, status } = useSession();
  //@ts-ignore
  const jwt: string = await token?.accessToken;
  return jwt;
};
