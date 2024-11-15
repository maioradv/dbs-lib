import { ApiToken } from "../apitokens/types";

export type AccessTokenDto = {
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token?:string;
}

export enum JwtContextType {
  apiToken = 'ApiToken'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
}

export type JwtPayload = {
  sub: string;
  aud: string[];
  scope: string[];
  iat: number;
  exp: number;
  iss: string;
  context: JwtPayloadContext;
}

export type Jwt = {
  payload:JwtPayload;
  ApiToken?:ApiToken;
}

export enum Permission {
  read_dashboards = 'read_dashboards',
  write_dashboards = 'write_dashboards',
  read_servers = 'read_servers',
  write_servers = 'write_servers',
}