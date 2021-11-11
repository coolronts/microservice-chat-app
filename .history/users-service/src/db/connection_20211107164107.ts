import { Connection, createConnection } from "typeorm";
const config = require('config');


let connection: Connection;

export const initConnection = async () => {
  connection = await createConnection({
    type: "mysql",
    url: <string>config.get("USERS_SERVICE_DB_URL"),
  });
};

const getConnection = () => connection;

export default getConnection;