import { CreateCredential } from "../credentials/types";
import { WithRequired } from "../types";

export type Server = {
  id: number;
  ip: string;
  name: string;
  loginCredentialId: number|null;
  sshCredentialId: number|null;
  createdAt: Date;
  updatedAt: Date;
}

type PartialServer = Partial<Omit<Server,'id'|'createdAt'|'updatedAt'|'loginCredentialId'|'sshCredentialId'>>

export type CreateServer = PartialServer & WithRequired<PartialServer,'ip'|'name'> & {
  login?:CreateCredential,
  ssh?:CreateCredential
}
export type UpdateServer = Partial<CreateServer>