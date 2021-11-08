import { Express } from "express";
import User from '#root/db/entities/users'
import { getRepository } from "typeorm";

const setupRoutes = (app:Express) => {
  const userRepository = getRepository(User);
  app.get("/users/:userId", async (req, res) => {
    try {
      const user = await userRepository.findOne(req.params.userId);
      res.send(user);
    }
    
  });
}