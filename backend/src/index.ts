import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import express, { Application } from "express";

import { errorHandler, notFound } from "./utils/middleware";
import { db } from "./db";

const PORT = process.env.PORT ?? 5000;
const server: Application = express();

server.use(express.json());
server.use(cookieParser());
server.use(cors({ credentials: false }));
server.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

server.use("/api", async (req, res) => {
  res.json("Hello from the server!");
});

server.use(notFound);
server.use(errorHandler);

server.listen(Number(PORT), () =>
  console.log(`Server running on port ${PORT}!`)
);
