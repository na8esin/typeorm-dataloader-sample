import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("classification_lists", { schema: "demo" })
export class ClassificationLists {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "classification_code",
    comment: "[区分コード] ",
    length: 5,
  })
  classificationCode: string;

  @Column("char", { name: "code", comment: "[キー] ", length: 3 })
  code: string;

  @Column("varchar", { name: "value", comment: "[バリュー] ", length: 30 })
  value: string;

  @Column("varchar", {
    name: "free1",
    nullable: true,
    comment: "[フリー項目1] ",
    length: 200,
  })
  free1: string | null;

  @Column("varchar", {
    name: "free2",
    nullable: true,
    comment: "[フリー項目2] ",
    length: 200,
  })
  free2: string | null;

  @Column("tinyint", {
    name: "default_flg",
    nullable: true,
    comment: "[デフォルトフラグ] 0: デフォルトでない 1: デフォルトである",
    unsigned: true,
  })
  defaultFlg: number | null;

  @Column("tinyint", {
    name: "initial_default_flg",
    nullable: true,
    comment: "[初期選択フラグ] ",
    unsigned: true,
  })
  initialDefaultFlg: number | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[無効有効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

  @Column("int", { name: "show_at", comment: "[並び順] ", unsigned: true })
  showAt: number;

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
