import "reflect-metadata"

import StartServer from "#root/server/index.ts"
import { initConnection } from "#root/db/connection"

initConnection().then(() => {
  console.log("Connected to database")
})