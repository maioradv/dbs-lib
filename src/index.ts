import { DbsApiClient } from "./client";
import { ApiConfigs } from "./config";

export { DbsApiClient }
export type DbsApiConfigs = ApiConfigs

export * from './types'
export * from './error'
export * from './auth/types'
export * from './dashboards/types'
export * from './servers/types'
export * from './credentials/types'

export function dbsApiClient(opt:DbsApiConfigs): DbsApiClient {
  return new DbsApiClient(opt)
}