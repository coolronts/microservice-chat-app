import { Express } from "express";
import User from '#root/db/entities/users'
import { getRepository } from "typeorm";

const setupRoutes = (app:Express) => {
  const userRepository = getRepository(User);
  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await userRepository.findOne(req.params.userId);
      if(!user) return next(new Error("User not found"))
      res.send(user);
    }
    catch (err) {
      res.status(500).send(err);
    }
  });
}