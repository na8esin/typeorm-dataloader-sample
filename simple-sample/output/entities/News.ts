import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("news", { schema: "demo" })
export class News {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("datetime", { name: "open_date", comment: "[投稿日時] " })
  openDate: Date;

  @Column("int", {
    name: "user_id",
    comment: "[投稿者ユーザid] ",
    unsigned: true,
  })
  userId: number;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "[タイトル] ",
    length: 100,
  })
  title: string | null;

  @Column("text", { name: "body", nullable: true, comment: "[本文] " })
  body: string | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[無効有効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

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
