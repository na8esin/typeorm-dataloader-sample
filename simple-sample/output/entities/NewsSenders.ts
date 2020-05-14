import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("news_id", ["newsId", "divisionId"], { unique: true })
@Entity("news_senders", { schema: "demo" })
export class NewsSenders {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "news_id", comment: "[お知らせid] ", unsigned: true })
  newsId: number;

  @Column("int", {
    name: "division_id",
    nullable: true,
    comment: "[所属id] ",
    unsigned: true,
  })
  divisionId: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;

  @Column("datetime", { name: "modified", comment: "[更新日時] 自動設定" })
  modified: Date;

  @Column("int", {
    name: "modified_user_id",
    comment: "[更新者ユーザid] 自動設定",
    unsigned: true,
  })
  modifiedUserId: number;

  @Column("tinyint", {
    name: "delete_flg",
    comment: "[削除フラグ] 0: 通常 1: 削除",
    unsigned: true,
    default: () => "'0'",
  })
  deleteFlg: number;
}
