import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import Swagger from "./Swagger"
import { MongoConnect } from "./MongoConnect";
export class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoConnect: MongoConnect;

    constructor() {
        this.app = express();
        this.config();
        new Swagger(this.app);
        this.mongoConnect = new MongoConnect();
        this.routePrv.routes(this.app, this.mongoConnect);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}