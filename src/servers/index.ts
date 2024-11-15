import { ApiModule } from "../model";
import { CreateServer, Server, UpdateServer } from "./types";

export default class Servers extends ApiModule {
  create(data:CreateServer) {
    return this._call<Server>('post','/servers',data)
  }

  update(id:number,data:UpdateServer) {
    return this._call<Server>('patch',`/servers/${id}`,data)
  }
}