export type Heartbeat = {
  domain:string
}

export type OfflineResponse = {
  id:number,
  domain:string,
  heartbeatAt:Date
}[]