
import { ConnectionManager, ConnectionOptions } from "typeorm";
import { createQueryRunner, getConfig } from "./helpers";
import { ProductEntity } from "./entity/product.entity";

// ランナーを上書きしても、レポジトリが持ってるランナーが切り替わるか？
// 結果、無理ということが判明
async function main() {
  const connectionManager = new ConnectionManager();
  // まずmasterにつなぐ
  let qr = await createQueryRunner(
    connectionManager,
    getDbConfig('master')
  );

  // リポジトリ作成
  const repo = qr.manager.getRepository(ProductEntity);

  // スキーマを切り替える
  qr = await createQueryRunner(
    connectionManager,
    getDbConfig('test')
  );

  console.log(repo.queryRunner);

  // データ登録
  const entity = await repo.save({
    name: "レポでスキーマ切り替えテスト",
    insurerId: 1,
    productCategoryId: 1,
    applicationHidden: '00',
    showAt: 1,
    created: new Date(),
    createdUserId: 5,
    modified: new Date(),
    modifiedUserId: 5
  });
  console.log(entity);
  // 接続を閉じる
  await qr.release();
  connectionManager.connections.forEach(async (e) => {
    await e.close();
  });
}

function getDbConfig(databaseName: string): ConnectionOptions {
  const config = getConfig('dev');
  const dbConfig: ConnectionOptions = {
    type: "mysql",
    host: config['DATABASE_HOST'],
    port: parseInt(config['DATABASE_PORT']),
    username: config['DATABASE_USER'],
    password: config['DATABASE_PASSWORD'],
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: databaseName,
    name: databaseName,
  };
  return dbConfig;
}

main();