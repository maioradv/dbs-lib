import { WithRequired } from "../types";

export type Credential = {
  id: number;
  password: string;
  user: string;
  name: string|null;
  port: number|null;
  createdAt: Date;
  updatedAt: Date;
}

type PartialCredential = Partial<Omit<Credential,'id'|'createdAt'|'updatedAt'>>

export type CreateCredential = PartialCredential & WithRequired<PartialCredential,'user'|'password'>
