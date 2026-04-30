import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { ApiToken, CreateApiTokenDto, QueryApiTokenDto, UpdateApiTokenDto } from "./types";

export default class ApiTokens extends ApiModule implements RestApiModuleI {
  create(args:CreateApiTokenDto): Promise<ApiToken> {
    return this._call('post','/apitokens',args)
  }

  findAll(args:QueryApiTokenDto = {}): Promise<PaginatedDto<ApiToken>> {
    return this._call('get','/apitokens',queryParams(args))
  } 

  findOne(id:number): Promise<ApiToken> {
    return this._call('get',`/apitokens/${id}`)
  }

  update(id:number,data:UpdateApiTokenDto): Promise<ApiToken> {
    return this._call('patch',`/apitokens/${id}`,data)
  }

  remove(id:number): Promise<ApiToken> {
    return this._call('delete',`/apitokens/${id}`)
  }
}