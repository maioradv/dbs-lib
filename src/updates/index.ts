import { ApiModule } from "@maioradv/client-core";
import { AccountsUpdateDto } from "./types";

export default class Updates extends ApiModule {
  accounts() {
    return this._call<AccountsUpdateDto>('get',`/updates/accounts`)
  }
}