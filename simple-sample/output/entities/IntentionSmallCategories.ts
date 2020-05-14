import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_small_categories", { schema: "demo" })
export class IntentionSmallCategories {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "intention_large_category_id",
    comment: "[大分類カテゴリid] ",
    unsigned: true,
  })
  intentionLargeCategoryId: number;

  @Column("varchar", { name: "symbol", comment: "[識別番号] ", length: 5 })
  symbol: string;

  @Column("char", {
    name: "category_type",
    comment: "[カテゴリ区分] 01: 通常 02:その他",
    length: 2,
  })
  categoryType: string;

  @Column("varchar", {
    name: "name",
    comment: "[小分類カテゴリ名] ",
    length: 50,
  })
  name: string;

  @Column("char", {
    name: "cancel_check",
    nullable: true,
    comment: "[解約返戻金：要確認項目] 00:要確認項目でない 01:要確認項目である",
    length: 2,
  })
  cancelCheck: string | null;

  @Column("smallint", {
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
