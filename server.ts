import express from "express";
import cors from "cors";
import path from "path";
import { errors } from "celebrate";

import PointRouter from "./routes/points";
import ItemRouter from "./routes/items";

const app = express();
app.use(cors());
app.use(express.json());
app.use([PointRouter, ItemRouter]);

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.use(errors());

app.listen(3333, () => console.log("app running"));
