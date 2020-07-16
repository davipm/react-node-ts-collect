import { Response, Request } from "express";
import knex from "../database/connection";

class PointController {
  /**
   * get all points saved
   * @param req
   * @param res
   */
  async getPoints(req: Request, res: Response) {
    try {
      const { city, uf, items } = req.query;
      const parseItems = String(items)
        .split(", ")
        .map((item) => Number(item.trim()));

      const points = await knex("points")
        .join("point_items", "points.id", "=", "point_items.point_id")
        .whereIn("point_items.item_id", parseItems)
        .where("city", String(city))
        .where("uf", String(uf))
        .distinct()
        .select("points.*");

      const serializedPoints = points.map((point) => {
        return {
          ...point,
          image_url: `http://192.168.0.101:3333/uploads/${point.image}`,
        };
      });

      return res.status(200).json(serializedPoints);
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  }

  /**
   * get point by ID
   * @param req
   * @param res
   */
  async getPoint(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const point = await knex("points").where("id", id).first();

      if (!point) {
        return res.status(404).json({ message: "Point not found" });
      }

      const serializedPoints = {
        ...point,
        image_url: `http://192.168.0.101:3333/uploads/${point.image}`,
      };

      const items = await knex("items")
        .join("point_items", "items.id", "=", "point_items.item_id")
        .where("point_items.point_id", id)
        .select("items.title");

      return res.status(200).json({ point: serializedPoints, items });
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  }

  /**
   * create point
   * @param req
   * @param res
   */
  async createPoint(req: Request, res: Response) {
    try {
      const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items,
      } = req.body;
      const trx = await knex.transaction();
      const point = {
        image: req.file.filename,
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items,
      };

      const insertedIds = await trx("points").insert(point);
      const point_id = insertedIds[0];
      const pointItems = items
        .split(", ")
        .map((item: string) => Number(item.trim()))
        .map((item_id: number) => {
          return { item_id, point_id };
        });

      await trx("point_items").insert(pointItems);
      await trx.commit();

      return res.status(201).json({
        id: point_id,
        ...point,
      });
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  }
}

export default new PointController();
