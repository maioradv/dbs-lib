import { ApiModule, PaginatedDto, queryParams } from "@maioradv/client-core";
import { DashboardType, QueryDashboardTypeDto, SetupDashboardTypeDto } from "./types";

export default class DashboardTypes extends ApiModule {
  findAll(args:QueryDashboardTypeDto = {}): Promise<PaginatedDto<DashboardType>> {
    return this._call('get','/dashboard-types',queryParams(args))
  } 

  update(id:number,data:SetupDashboardTypeDto) {
    return this._call<DashboardType>('patch',`/dashboard-types/${id}/setup`,data)
  }
}