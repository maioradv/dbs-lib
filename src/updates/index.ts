import { ApiModule } from "@maioradv/client-core";
import { TiDelizioUpdateDto } from "./types";

export default class Updates extends ApiModule {
  tidelizio() {
    return this._call<TiDelizioUpdateDto>('get',`/updates/tidelizio`)
  }
}