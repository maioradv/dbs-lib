import { ApiModule } from "@maioradv/client-core";
import { DashboardType, SetupDashboardType } from "./types";

export default class DashboardTypes extends ApiModule {

  update(id:number,data:SetupDashboardType) {
    return this._call<DashboardType>('patch',`/dashboard-types/${id}/setup`,data)
  }
}