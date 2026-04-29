import { dbsApiClient } from "../src";
import credentials from './credentials.json'

async function example() {
  const api = dbsApiClient({
    //sandbox:true,
    credentials
  })
  await api.auth()
}

example()