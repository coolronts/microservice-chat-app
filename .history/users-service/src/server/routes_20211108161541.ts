import { Express } from "express";
import User from '#root/db/entities/users'
import { getRepository } from "typeorm";

const setupRoutes = (app:Express) => {
  const userRepository = getRepository(User);
  
}