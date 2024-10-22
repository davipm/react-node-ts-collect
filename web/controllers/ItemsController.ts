import { Response, Request } from "express";
import knex from "../database/connection";

class ItemsController {
  /**
   * get all items saved
   * @param req
   * @param res
   */
  async getItems(req: Request, res: Response) {
    try {
      const items = await knex("items").select("*");
      const serializedData = items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://192.168.0.103:3333/uploads/${item.image}`,
        };
      });

      return res.status(200).json(serializedData);
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  }
}

export default new ItemsController();
