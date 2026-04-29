import { WithRequired } from "@maioradv/types";
import { CreateCredentialDto } from "../credentials/types";
import { QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";

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

export type CreateServerDto = PartialServer & WithRequired<PartialServer,'ip'|'name'> & {
  login?:CreateCredentialDto,
  ssh?:CreateCredentialDto
}
export type UpdateServerDto = Partial<CreateServerDto>

export type SortingServerDto = SortingParamsDto<{
  ip?:Sorting,
  name?:Sorting
}>

export type ClausesServerDto = WhereClausesDto<{
  search?:StringClause,
}>

export type QueryServerDto = QueryParamsDto<SortingServerDto,ClausesServerDto>