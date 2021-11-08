import { Connection, createConnection } from 'typeorm'

import config from 'config'

let connection: Connection

export const initConnection = async () => {
  connection = await createConnection({
    type: "mysql",
    url:<string> config.get("USERS_SERVICEC_DB_URL")
  })
  
  return connection
}