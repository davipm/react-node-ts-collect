import { Router } from "express";
import ItemsController from "../controllers/ItemsController";

const route = Router();

route.get("/items", ItemsController.getItems);

export default route;
