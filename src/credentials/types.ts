import { OmitRequire } from "@maioradv/types";

export type Credential = {
  id: number;
  password: string;
  user: string;
  name: string|null;
  port: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCredentialDto = OmitRequire<Credential,'id'|'createdAt'|'updatedAt','user'|'password'>
