import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import { AccessTokenDto } from "./auth/types";
import Dashboards from "./dashboards";
import { AuthError } from "./error";
import Servers from "./servers";

export class DbsApiClient implements ClientApiI
{
  protected SANDBOX_URL = 'http://localhost:3000'
  protected PRODUCTION_URL = 'https://dbs.maior.cloud'
  protected client:Axios;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  dashboards:Dashboards;
  servers:Servers;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = this.configApi.sandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    return axios
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.dashboards = new Dashboards(this.client)
    this.servers = new Servers(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = await this.authentication.token(this.configApi.credentials.apiToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }
}