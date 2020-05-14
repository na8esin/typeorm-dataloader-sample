import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("properties", { schema: "demo" })
export class Properties {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "name", comment: "[プロパティ名] ", length: 50 })
  name: string;

  @Column("text", { name: "value", comment: "[プロパティ値] " })
  value: string;

  @Column("text", { name: "note", nullable: true, comment: "[備考] 新規" })
  note: string | null;

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
