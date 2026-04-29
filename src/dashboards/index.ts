import { ApiModule, PaginatedDto, queryParams } from "@maioradv/client-core";
import { Dashboard, CreateDashboardDto, UpdateDashboard, BuildDashboardsDto, MigrateDashboardsDto, QueryDashboardDto, ScriptDashboardsDto } from "./types";

export default class Dashboards extends ApiModule {
  create(data:CreateDashboardDto) {
    return this._call<Dashboard>('post','/dashboards',data)
  }

  findAll(args:QueryDashboardDto = {}): Promise<PaginatedDto<Dashboard>> {
    return this._call('get','/dashboards',queryParams(args))
  } 

  update(id:number,data:UpdateDashboard) {
    return this._call<Dashboard>('patch',`/dashboards/${id}`,data)
  }

  remove(id:number) {
    return this._call<Dashboard>('delete',`/dashboards/${id}`)
  }

  install(id:number) {
    return this._call<boolean>('post',`/dashboards/${id}/install`)
  }

  build(data:BuildDashboardsDto = {}) {
    return this._call<boolean>('post','/dashboards/build',data)
  }

  script(data:ScriptDashboardsDto = {}) {
    return this._call<boolean>('post','/dashboards/script',data)
  }

  migrate(data:MigrateDashboardsDto = {}) {
    return this._call<boolean>('post','/dashboards/migrate',data)
  }
}