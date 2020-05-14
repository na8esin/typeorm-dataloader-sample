import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Entity("functions", { schema: "demo" })
export class Functions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "menu_code",
    nullable: true,
    comment: "[メニューコード] ",
    length: 5,
  })
  menuCode: string | null;

  @Column("varchar", { name: "identity", comment: "[識別文字列] ", length: 25 })
  identity: string;

  @Column("char", {
    name: "code",
    unique: true,
    comment: "[機能コード] ",
    length: 5,
  })
  code: string;

  @Column("varchar", { name: "name", comment: "[機能名] ", length: 50 })
  name: string;

  @Column("varchar", {
    name: "controller",
    nullable: true,
    comment: "[コントローラ名] ",
    length: 30,
  })
  controller: string | null;

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
