import { ApiModule, PaginatedDto, queryParams } from "@maioradv/client-core";
import { CreateServerDto, QueryServerDto, Server, UpdateServerDto } from "./types";

export default class Servers extends ApiModule {
  create(data:CreateServerDto) {
    return this._call<Server>('post','/servers',data)
  }

  findAll(args:QueryServerDto = {}): Promise<PaginatedDto<Server>> {
    return this._call('get','/servers',queryParams(args))
  } 

  update(id:number,data:UpdateServerDto) {
    return this._call<Server>('patch',`/servers/${id}`,data)
  }
}