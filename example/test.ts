import { DashboardSlug, dbsApiClient } from "../src";

async function example() {
  const api = dbsApiClient({
    sandbox:true,
    credentials:{
      apiToken:''
    }
  })
  await api.auth()
  const res = await api.dashboards.remove(4)
  console.log(res)
}

example()