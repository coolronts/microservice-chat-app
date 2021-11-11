import { Express } from "express";
import User from '#root/db/entities/Users';
import comparePassword from "#root/helpers/passwordCompare";
import config from 'config';
import dayjs from "dayjs";
import { getRepository } from "typeorm";
import generateUUID from "#root/helpers/generateUUID";


const USER_SESSION_EXPIRY_HOURS = <number>config.get("USER_SESSION_EXPIRY_HOURS");

const setupRoutes = (app:Express) => {
  const userRepository = getRepository(User);

  app.get("/session", async (req, res, next) => {
    if(!req.body.username || req.body.password) return next(new Error("Missing username or password"));
    
    try {
      const user = await userRepository.findOne(
        {username: req.body.username},
        {select: ["id", "passwordHash"]}
      );

      if (!user) return next(new Error("Invalid username!"));
      if (!comparePassword(req.body.password, user.passwordHash)) return next(new Error("Invalid password!"));
      const expiresAt = dayjs().add(USER_SESSION_EXPIRY_HOURS, "hour").toISOString();
      const sessionToken = generateUUID();
      const userSession = {
        expiresAt,
        id: sessionToken,
        userId: user.id
      }
    } catch (error) {
      
    }
  })
  
  app.get("/users/:userId", async(req,res,next) => {
    try {
      const user = await userRepository.findOne(req.params.userId);
      if(!user) return next(new Error("Invalid user ID!"))
      return res.json(user);
    }
    catch (err) {
      return next(err);
    }
  });
}
export default setupRoutes;