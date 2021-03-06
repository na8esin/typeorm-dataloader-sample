import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Entity("menus", { schema: "demo" })
export class Menus {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "category",
    comment:
      "[カテゴリ] 000: api 001: navigation 002: analysis 003: management 004: custom 005: shared accounts 091: etc 092: sign out",
    length: 3,
  })
  category: string;

  @Column("char", {
    name: "code",
    unique: true,
    comment: "[メニューコード] ",
    length: 5,
    default: () => "'00000'",
  })
  code: string;

  @Column("varchar", { name: "name", comment: "[メニュー名] ", length: 50 })
  name: string;

  @Column("varchar", {
    name: "param",
    nullable: true,
    comment:
      "[パラメータ] urlパラメータ（コントローラ、アクション、クエリ文字列を含む）",
    length: 100,
  })
  param: string | null;

  @Column("varchar", {
    name: "css_icon",
    nullable: true,
    comment: "[アイコン] adminlteのアイコンのスタイル名を設定",
    length: 25,
  })
  cssIcon: string | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[有効無効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

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
