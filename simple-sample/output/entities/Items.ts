import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Entity("items", { schema: "demo" })
export class Items {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "func_code",
    nullable: true,
    comment: "[機能コード] ",
    length: 5,
  })
  funcCode: string | null;

  @Column("char", {
    name: "category",
    nullable: true,
    comment:
      "[カテゴリ] 分類分けに使用 (例：顧客の中のコールセンタ等、切り分けの値)",
    length: 2,
  })
  category: string | null;

  @Column("char", {
    name: "code",
    unique: true,
    comment: "[項目コード] ",
    length: 6,
  })
  code: string;

  @Column("varchar", { name: "name", comment: "[名前] ", length: 20 })
  name: string;

  @Column("tinyint", {
    name: "require_flg",
    comment: "[必須フラグ] 0: 未必須 1: 必須",
    unsigned: true,
  })
  requireFlg: number;

  @Column("tinyint", {
    name: "search_item_flg",
    nullable: true,
    comment: "[検索項目フラグ] 0: 未検索項目 1: 検索項目",
    unsigned: true,
  })
  searchItemFlg: number | null;

  @Column("tinyint", {
    name: "col_type",
    nullable: true,
    comment: "[列タイプ] 0: 半列 1: 1列",
    unsigned: true,
  })
  colType: number | null;

  @Column("tinyint", {
    name: "show_list_flg",
    comment: "[一覧表示フラグ] 0: 非表示 1: 表示",
    unsigned: true,
    default: () => "'1'",
  })
  showListFlg: number;

  @Column("tinyint", {
    name: "enabled",
    comment: "[有効無効フラグ] 0: 無効 1: 有効",
    width: 1,
    default: () => "'1'",
  })
  enabled: boolean;

  @Column("smallint", { name: "show_at", comment: "[並び順] ", unsigned: true })
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

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;
}
