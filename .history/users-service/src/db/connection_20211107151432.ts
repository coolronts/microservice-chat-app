import { Connection, createConnection } from 'typeorm'

import config from 'config'

let connection: Connection

export const initConnection = async () => {
    connection = await createConnection(config.get('db'))
  }
  return connection
}