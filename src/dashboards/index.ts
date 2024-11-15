import { ApiModule } from "../model";
import { Dashboard, CreateDashboard, UpdateDashboard, BuildDashboards, MigrateDashboards } from "./types";

export default class Dashboards extends ApiModule {
  create(data:CreateDashboard) {
    return this._call<Dashboard>('post','/dashboards',data)
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

  build(data:BuildDashboards = {}) {
    return this._call<boolean>('post','/dashboards/build',data)
  }

  migrate(data:MigrateDashboards = {}) {
    return this._call<boolean>('post','/dashboards/migrate',data)
  }
}