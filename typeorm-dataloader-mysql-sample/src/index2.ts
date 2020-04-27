import "reflect-metadata";
import { createConnection, getRepository, getConnection } from "typeorm";
import DataLoader = require('dataloader');
import { User } from "./entity/User";
import { connectionHelper } from "./connection-helper";

const userLoader = new DataLoader((keys: number[]) => myBatchGetUsers(keys));

//let keys: number[] = [1,2,3,4];
//main().then((connection)=>connection.close());

let promises: Array<Promise<User>> = [];

promises.push(userLoader.load(1));
promises.push(userLoader.load(2));
promises.push(userLoader.load(3));

Promise.all(promises).then((users) => {
  console.log(users);
}).then(() => getConnection().close());

async function myBatchGetUsers(keys: number[]): Promise<User[]> {
  const connection = await connectionHelper();
  const userRepository = getRepository(User);
  const data = await userRepository.findByIds(keys);

  console.log('myBatchGetUsers');

  // データのほうが少ない場合は穴埋めしないといけない
  // もっとシンプルな方法はないのか？
  if (keys.length > data.length) {
    const diffLengh = keys.length - data.length
    for (let i = 0; i < diffLengh; i++) {
      data.push(null);
    }
  }

  return data;
}
