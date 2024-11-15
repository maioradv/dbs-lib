import { ConfigError } from "./error"
import { WithRequired } from "./types"

export type ApiConfigs = {
  credentials?:{
    apiToken:string
  },
  sandbox?:boolean,
}

export type ValidatedApiConfigs = ApiConfigs & WithRequired<ApiConfigs,'sandbox'>

export function validateConfigs(configs:ApiConfigs): ValidatedApiConfigs {
  return {
    ...configs,
    sandbox: configs.sandbox ?? false
  }
}