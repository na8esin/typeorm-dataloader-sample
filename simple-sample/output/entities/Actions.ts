import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Entity("actions", { schema: "demo" })
export class Actions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "code",
    unique: true,
    comment: "[アクションコード] ※別紙参照",
    length: 5,
  })
  code: string;

  @Column("varchar", { name: "name", comment: "[名前] ", length: 50 })
  name: string;

  @Column("varchar", {
    name: "act",
    nullable: true,
    comment: "[アクション] ",
    length: 30,
  })
  act: string | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[有効無効フラグ] 0: 無効 1: 有効",
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
