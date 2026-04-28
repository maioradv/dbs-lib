import { ConfigError } from "@maioradv/client-core"
import { WithRequired } from "@maioradv/types"

export type ApiConfigs = {
  credentials?:{
    apiToken?:string,
    operator?:string
  },
  sandbox?:boolean,
}

export type ValidatedApiConfigs = ApiConfigs & WithRequired<ApiConfigs,'sandbox'>

export function validateConfigs(configs:ApiConfigs): ValidatedApiConfigs {
  if(configs.credentials && 
    !configs.credentials.apiToken && !configs.credentials.operator
  ) throw new ConfigError(`Credentials are required`)
  return {
    ...configs,
    sandbox: configs.sandbox ?? false
  }
}