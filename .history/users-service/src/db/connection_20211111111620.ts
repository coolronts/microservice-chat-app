import { Connection, createConnection } from "typeorm";
import config from "config";
import User from './entities/users'
import UserSessions from './entities/userSessions'


let connection: Connection;

export const initConnection = async () => {
  connection = await createConnection({
    entities: [User, UserSessions],
    type: "mysql",
    url: <string>config.get("USERS_SERVICE_DB_URL"),
  });
};

const getConnection = () => connection;

export default getConnection;