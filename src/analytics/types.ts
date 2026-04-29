export type HeartbeatDto = {
  domain:string
}

export type OfflineResponseDto = {
  id:number,
  domain:string,
  heartbeatAt:Date
}[]