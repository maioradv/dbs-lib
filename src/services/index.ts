import { ApiModule, PaginatedDto, queryParams } from "@maioradv/client-core";
import { Service, CreateServiceDto, QueryServiceDto, FindAllServiceDto } from "./types";

export default class Services extends ApiModule {
  create(data:CreateServiceDto) {
    return this._call<Service>('post','/services',data)
  }

  findAll(args:QueryServiceDto = {}): Promise<PaginatedDto<FindAllServiceDto>> {
    return this._call('get','/services',queryParams(args))
  } 

  remove(id:number) {
    return this._call<Service>('delete',`/services/${id}`)
  }
}