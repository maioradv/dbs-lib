import { ApiToken } from "../apitokens/types";
import { DashboardTypeSlug } from "../dashboard-types/types";
import { WithRequired } from "../types";

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

export type CreateDashboard = PartialDasboard & WithRequired<PartialDasboard,'slug'> & {
  dashboardType:DashboardTypeSlug,
  applications:CreateDashboardApp[]
}
export type UpdateDashboard = Partial<Omit<CreateDashboard,'dashboardType'|'slug'|'applications'>>

export type CreateDashboardApp = Omit<DashboardAppplication,'appId'|'parentId'|'dnsId'>

export type MigrateDashboards = {
  dashboardType?: DashboardTypeSlug;
  ids?:number[]
}

export type BuildDashboards = {
  dashboardType?: DashboardTypeSlug;
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
