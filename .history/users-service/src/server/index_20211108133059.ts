import express, {NextFunction, Request, Response} from 'express';

import accessEnv from "#root/helpers/accessEnv"
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = parseInt(accessEnv('PORT', "7101"), 10);

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

};

