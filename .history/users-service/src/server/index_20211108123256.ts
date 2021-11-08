import express, {NextFunction, Request, Response} from 'express';

import accessEnv from "#root/helpers/accessEnv"
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT =  parseInt(accessEnv('PORT', "7101"),10);
