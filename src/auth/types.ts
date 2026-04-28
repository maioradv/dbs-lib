import { ApiToken } from "../apitokens/types";
import Maior, { Operator } from '@maioradv/types'

export type AccessTokenDto = Maior.AccessTokenDto

export enum JwtContextType {
  apiToken = 'ApiToken',
  operator = 'Operator'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
}

export type JwtPayload = Maior.JwtPayload<JwtPayloadContext>

export type Jwt = {
  payload:JwtPayload;
  ApiToken?:ApiToken;
  Operator?:Operator;
}

export enum Permission {
  read_dashboards = 'read_dashboards',
  write_dashboards = 'write_dashboards',
  read_servers = 'read_servers',
  write_servers = 'write_servers',
  write_services = 'write_services',
  read_services = 'read_services',
  read_analytics = 'read_analytics',
  push_metrics = 'push_metrics'
}