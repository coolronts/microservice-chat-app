import "reflect-metadata"

import StartServer from "#root/server"
import { initConnection } from "#root/db/connection"

initConnection().then(() => {
  StartServer()
})