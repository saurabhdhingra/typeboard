import { User } from "types";

export {};

declare global {
  interface JwtPayload extends User {}
}
