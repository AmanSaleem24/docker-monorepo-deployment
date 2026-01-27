import express from "express";
import { prismaClient } from "db/client";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  prismaClient.user.findMany()
    .then((users:any) => {
      res.json(users);
    })
    .catch((err:any) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({
      error: "Username and password are required",
    });
    return;
  }

  prismaClient.user.create({
    data: {
      name,
      email,
    },
  })
    .then((user:any) => {
      res.status(201).json(user);
    })
    .catch((err:any) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
