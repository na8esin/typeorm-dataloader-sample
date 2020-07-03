import "reflect-metadata";
import {createConnection} from "typeorm";
import {ExpertiseFields} from "./entity/ExpertiseFields";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const entites = await connection.manager.find(ExpertiseFields);
    console.log("Loaded users: ", entites);
    // なんでリファレンスにはcloseがのってないんだろ。。。
    connection.close();

}).catch(error => console.log(error));
