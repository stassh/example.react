
import { Request, Response, Application} from "express";
import * as express from "express";
import { UserRoutes } from "./services/user/UserRoutes";
import { MongoConnect } from "MongoConnect";
import { UserDefinitions } from "./services/user/UserDefinitions";

export class Routes {
    public routes(app: Application, mongoConnect: MongoConnect): void {

        app.use("/app", express.static("static"));

        app.use("/app/umd/react.development.js", express.static(`./node_modules/react/umd/react.development.js`));
        
        app.use("/app/umd/react-dom.development.js", express.static(`./node_modules/react-dom/umd/react-dom.development.js`));
        
        app.use("/api/v1/users", UserRoutes.routes(mongoConnect));
        
        app.use("/definitions/v1/users", UserDefinitions.routes());
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull!!!'
                })
            })
    }
}