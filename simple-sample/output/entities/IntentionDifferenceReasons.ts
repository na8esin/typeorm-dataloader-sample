import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_difference_reasons", { schema: "demo" })
export class IntentionDifferenceReasons {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "reason_type",
    comment: "[カテゴリ区分] 01: 通常 02:その他",
    length: 2,
  })
  reasonType: string;

  @Column("varchar", {
    name: "name",
    comment: "[小分類カテゴリ名] ",
    length: 50,
  })
  name: string;

  @Column("int", {
    name: "show_at",
    nullable: true,
    comment: "[並び順] ",
    unsigned: true,
  })
  showAt: number | null;

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
