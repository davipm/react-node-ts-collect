import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { errors } from "celebrate";

import PointRouter from "./routes/points";
import ItemRouter from "./routes/items";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.production();
  }

  private middleware() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(errors());
  }

  private routes() {
    this.express.use([PointRouter, ItemRouter]);
    this.express.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
  }

  private production() {
    if (process.env.NODE_ENV === "development") {
      this.express.use(morgan("dev"));
    }

    if (process.env.NODE_ENV === "production") {
      this.express.use(express.static("client/build"));
      this.express.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
  }
}

export default new App().express;
