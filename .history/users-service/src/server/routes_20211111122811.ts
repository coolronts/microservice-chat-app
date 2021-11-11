import { Express } from "express";
import User from '#root/db/entities/users'
import { getRepository } from "typeorm";

const setupRoutes = (app:Express) => {
  const userRepository = getRepository(User);

  app.get("/session", async (req, res, next) => {
    if(!req.body.username || req.body.password){
      return next(new Error("Missing username or password"));
    }
    try {
      const user = await userRepository.findOne(
        {username: req.body.username},
        {select: ["id", "passwordHash"]}
      );

      if(!user) return next(new Error("Invalid username!"));
      
      res.send(user);
      
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