import { DashboardType, WithRequired } from "@maioradv/types";
import { ApiToken } from "../apitokens/types";
import { BooleanClause, NumberClause, QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";

export type Dashboard = {
  id: number;
  slug: string;
  active: boolean;
  applications: DashboardAppplication[];
  dashboardTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DashboardAppplication = {
  slug: string;
  domain: string;
  appId: number;
  dnsId: number;
  parentId?: number;
}

type PartialDasboard = Partial<Omit<Dashboard,'id'|'createdAt'|'updatedAt'|'dashboardTypeId'|'applications'>>

export type CreateDashboardDto = PartialDasboard & WithRequired<PartialDasboard,'slug'> & {
  dashboardType:DashboardType,
  applications:CreateDashboardAppDto[]
}
export type UpdateDashboard = Partial<Omit<CreateDashboardDto,'dashboardType'|'slug'|'applications'>>

export type CreateDashboardAppDto = Omit<DashboardAppplication,'appId'|'parentId'|'dnsId'>

export type MigrateDashboardsDto = {
  dashboardType?: DashboardType;
  ids?:number[]
}

export type BuildDashboardsDto = {
  dashboardType?: DashboardType;
  ids?:number[]
}

export type ScriptDashboardsDto = {
  dashboardType?: DashboardType;
  ids?:number[]
}

export type DashboardWebhookEvents = {
  create:{
    dashboard:Dashboard,
    tokens:ApiToken[]
  },
  remove:{
    dashboard:Dashboard
  }
}

export type SortingDashboardDto = SortingParamsDto<{
  active?:Sorting,
}>

export type ClausesDashboardDto = WhereClausesDto<{
  search?:StringClause,
  slug?:StringClause,
  dashboardTypeId?:NumberClause,
  active?:BooleanClause
}>

export type QueryDashboardDto = QueryParamsDto<SortingDashboardDto,ClausesDashboardDto>