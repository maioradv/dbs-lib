import { ApiModule } from "@maioradv/client-core";
import { HeartbeatDto, OfflineResponseDto } from "./types";

export default class Analytics extends ApiModule {
  heartbeat(data:HeartbeatDto) {
    return this._call<void>('post','/analytics/heartbeat',data)
  }

  offline() {
    return this._call<OfflineResponseDto>('get',`/analytics/offline`)
  }
}