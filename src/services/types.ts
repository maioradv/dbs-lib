import { NumberClause, QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from '@maioradv/client-core';
import { Server } from '../servers/types';

export type Service = {
  id: number;
  domain: string;
  integrations: ServiceIntegrations;
  appId: number|null;
  dashboardId: number|null;
  dbCredentialId: number|null;
  ftpCredentialId: number|null;
  dnsId: number|null;
  serverId: number;
  parentId: number|null;
  heartbeatAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type ServiceIntegrations = {
  cloudflareDnsId?:string;
  pleskDatabaseId?:number;
  pleskDbUserId?:number;
  pleskWebSpaceId?:number;
  gitDeploymentPath?:string;
  documentRoot?:string;
  applicationPath?:string;
}

export type CreateServiceDto = Omit<Service,'id'|'createdAt'|'updatedAt'>

export type SortingServiceDto = SortingParamsDto<{
  domain?:Sorting,
  serverId?:Sorting,
  dashboardId?:Sorting,
}>

export type ClausesServiceDto = WhereClausesDto<{
  search?:StringClause,
  dashboardId?:NumberClause,
}>

export type QueryServiceDto = QueryParamsDto<SortingServiceDto,ClausesServiceDto>

export type FindAllServiceDto = Service & {
  Server?:Server
}

