import { Router } from "express";
import multer from "multer";
import { celebrate, Joi } from "celebrate";

import multerConfig from "../config/multer";
import PointController from "../controllers/PointController";

const router = Router();
const upload = multer(multerConfig);

router.get("/points", PointController.getPoints);
router.get("/points/:id", PointController.getPoint);
router.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointController.createPoint
);

export default router;
