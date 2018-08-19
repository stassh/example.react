import { MongoClient, Db } from "mongodb";
import { MongoConfig } from './config/MongoConfig';

export class MongoConnect {
  public db: Db;
  constructor() {
    MongoClient.connect(MongoConfig.default().HOST).then(db => {
      console.log("MongoDb connected");
      this.db = db.db("luxtrack");
    }).catch(error => {
      console.log('MongoDb default connection error: ' + error);
    });
  }
}
