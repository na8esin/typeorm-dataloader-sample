import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("classifications", { schema: "demo" })
export class Classifications {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", { name: "code", comment: "[区分コード] ", length: 5 })
  code: string;

  @Column("varchar", { name: "name", comment: "[区分名] ", length: 30 })
  name: string;

  @Column("char", {
    name: "type",
    nullable: true,
    comment: "[タイプ] 01: 区分値 02: マスタ値",
    length: 2,
  })
  type: string | null;

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

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;
}
