/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const setCookies = async (cookie: string) => {
  (await cookies()).set("accessToken", cookie);
};

export const removeCookies = async () => {
  (await cookies()).delete("accessToken");
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    console.log("decoded data", decodedData);
  }
  return decodedData;
};
