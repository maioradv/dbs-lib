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

export enum DashboardTypeSlug {
  tidelizio = 'tidelizio'
}

export type SetupDashboardType = {
  serverId: number;
}