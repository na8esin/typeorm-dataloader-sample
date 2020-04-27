import "reflect-metadata";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { connectionHelper } from "./connection-helper";

connectionHelper().then(async connection => { //データ投入するだけ
    const user = new User();
    const photo = new Photo();

    console.log("data clear...");
    await connection.manager.clear(User);
    await connection.manager.clear(Photo);

    console.log("Inserting a new user into the database...");
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    photo.description = '説明文';
    photo.name = '名前';
    photo.filename = 'ファイル名';
    photo.views = 1;
    photo.isPublished = true;
    await connection.manager.save(photo);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
