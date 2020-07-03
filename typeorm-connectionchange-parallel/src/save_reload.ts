
import { ConnectionManager, ConnectionOptions } from "typeorm";
import { createQueryRunner, getConfig, getDbConfig } from "./helpers";
import { ProductEntity } from "./entity/product.entity";

async function main() {
  let connectionManager = new ConnectionManager();

  let qr = await createQueryRunner(
    connectionManager,
    getDbConfig('dev', 'test')
  );
  // リポジトリ作成
  const repo = qr.manager.getRepository(ProductEntity);

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
  }, { reload: true });

  //console.log(entity);

  //削除フラグを立てる
  /*
  const deleted = await repo.save({
    id: entity.id,
    modified: new Date(),
    modifiedUserId: 5,
    deleteFlg: 1
  }, { reload: true });
  */
  //console.log(deleted);

  // 接続を閉じる
  await qr.release();
  connectionManager.connections.forEach(async (e) => {
    await e.close();
  });
}

main();