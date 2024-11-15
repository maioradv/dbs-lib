import { WithRequired } from "../types";

export type Dashboard = {
  id: number;
  slug: string;
  active: boolean;
  applications: DashboardApp[];
  dashboardTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DashboardApp = {
  slug: string;
  appId: number;
  domain: string;
}

export enum DashboardSlug {
  tidelizio = 'tidelizio'
}

type PartialDasboard = Partial<Omit<Dashboard,'id'|'createdAt'|'updatedAt'|'dashboardTypeId'|'applications'>>

export type CreateDashboard = PartialDasboard & WithRequired<PartialDasboard,'slug'> & {
  dashboardType:DashboardSlug,
  applications:CreateDashboardApp[]
}
export type UpdateDashboard = Partial<Omit<CreateDashboard,'dashboardType'|'slug'|'applications'>>

export type CreateDashboardApp = Omit<DashboardApp,'appId'>

export type MigrateDashboards = {
  dashboardType?: DashboardSlug;
  ids?:number[]
}

export type BuildDashboards = {
  dashboardType?: DashboardSlug;
  ids?:number[]
}
