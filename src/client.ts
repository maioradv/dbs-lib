import axios, { AxiosInstance } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./api";
import Auth from "./auth";
import { AccessTokenDto } from "./auth/types";
import Dashboards from "./dashboards";
import Servers from "./servers";
import DashboardTypes from "./dashboard-types";
import Analytics from "./analytics";
import { AuthError, ClientApiI } from "@maioradv/client-core";
import Services from "./services";
import ApiTokens from "./apitokens";
import Updates from "./updates";

export class DbsApiClient implements ClientApiI
{
  protected SANDBOX_URL = 'http://localhost:3000'
  protected PRODUCTION_URL = 'https://dbs.maior.cloud'
  protected client:AxiosInstance;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  dashboards:Dashboards;
  servers:Servers;
  dashboardTypes:DashboardTypes;
  analytics:Analytics;
  services:Services;
  apitokens:ApiTokens;
  updates:Updates;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): AxiosInstance {
    const client = axios.create()
    client.defaults.baseURL = this.configApi.sandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
    client.defaults.headers.common['Content-Type'] = 'application/json'
    return client
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.dashboards = new Dashboards(this.client)
    this.servers = new Servers(this.client)
    this.dashboardTypes = new DashboardTypes(this.client)
    this.analytics = new Analytics(this.client)
    this.services = new Services(this.client)
    this.apitokens = new ApiTokens(this.client)
    this.updates = new Updates(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = 
      this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : 
      await this.authentication.jwt(this.configApi.credentials.operator)
    this._setAccessToken(access.access_token)
    return access
  }

  async jwt(accessToken:string): Promise<AccessTokenDto> {
    const access = await this.authentication.jwt(accessToken)
    this._setAccessToken(access.access_token)
    return access
  }
}