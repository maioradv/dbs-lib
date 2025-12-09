import { ApiModule } from "../model";
import { Heartbeat, OfflineResponse } from "./types";

export default class Analytics extends ApiModule {
  heartbeat(data:Heartbeat) {
    return this._call<void>('post','/analytics/heartbeat',data)
  }

  offline() {
    return this._call<OfflineResponse>('get',`/analytics/offline`)
  }
}