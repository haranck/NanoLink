import { Buffer } from "buffer";

export const encodeUrl = (url: string): string => {
  return Buffer.from(url).toString("base64url");
};

export const decodeUrl = (encoded: string): string => {
  return Buffer.from(encoded, "base64url").toString("utf-8");
};