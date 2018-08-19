import * as express from "express";
import mongoose = require('mongoose');
const m2s = require('mongoose-to-swagger');

export class UserDefinitions {
    private static router;
    private static _model;
    
    public static model() {
        if (this._model !== undefined) {
            return this._model;
        }

        var Schema = mongoose.Schema;
        var userSchema = new Schema({
            Name: String
        });
        this._model = mongoose.model('user', userSchema);
        return this._model;
    }

    public static routes() {
        if (this.router !== undefined) {
            return this.router;
        }

        this.router = express.Router();

        /**
         * @swagger
         * definitions:
         *   users:
         *     properties:
         *       id:
         *         type: string
         *         format: uuid
         *       name:
         *         type: string
         * /definitions/v1/users:
         *   get:
         *     tags:
         *       - user model
         *     description: Returns all users
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         */
        this.router.get('/', async (req, res) => {

            const swaggerSchema = m2s(this.model());
            res.status(200).send(swaggerSchema);
        });
        return this.router;

    }
}
