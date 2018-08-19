
import * as express from "express";
import { MongoConnect } from "MongoConnect";

export class UserRoutes {
  private static router;
  public static routes(mongoConnect: MongoConnect) {
    if (this.router !== undefined) {
      return this.router;
    }
    this.router = express.Router();

    /**
     * @swagger
     * /api/v1/users:
     *   get:
     *     tags:
     *       - users
     *     description: Returns all users
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of users
     *         schema:
     *           $ref: '#/definitions/users'
     *     components:
     */
    this.router.get('/', async (req, res) => {
      const users = await mongoConnect.db.collection("users").find().toArray();
      res.status(200).send(users);
    });
    return this.router;
// generate-api-platform-client http://localhost:3300/api/v1/ output/ --resource User --format swagger
  }
}