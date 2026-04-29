import { NumberClause, QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from '@maioradv/client-core';

export type DashboardType = {
  id: number;
  slug: string;
  active: boolean;
  applications: DashboardTypeApplication[];
  dashboardTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DashboardTypeApplication = { 
  slug: string;
  appId: number;
  dnsId: number;
  parentId?: number;
}

export type SetupDashboardTypeDto = {
  serverId: number;
}

export type SortingDashboardTypeDto = SortingParamsDto<{
  slug?:Sorting,
  serverId?:Sorting,
}>

export type ClausesDashboardTypeDto = WhereClausesDto<{
  search?:StringClause,
  slug?:StringClause,
  serverId?:NumberClause,
}>

export type QueryDashboardTypeDto = QueryParamsDto<SortingDashboardTypeDto,ClausesDashboardTypeDto>

