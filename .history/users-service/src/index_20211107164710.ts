import "reflect-metadata"

import { initConnection } from "#root/db/connection"

initConnection().then(() => {
  console.log("Connected to database")
})