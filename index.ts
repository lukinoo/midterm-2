import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("hello, world");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));