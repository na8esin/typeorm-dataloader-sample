import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("authority_roles", { schema: "demo" })
export class AuthorityRoles {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("tinyint", {
    name: "role_type",
    comment: "[権限タイプ] 1: メニュー 2: 機能",
    unsigned: true,
  })
  roleType: number;

  @Column("char", {
    name: "menu_code",
    comment: "[メニューコード] ※別紙参照",
    length: 5,
  })
  menuCode: string;

  @Column("char", {
    name: "func_code",
    comment: "[機能コード] ※別紙参照",
    length: 5,
  })
  funcCode: string;

  @Column("char", {
    name: "action_code",
    comment: "[アクションコード] ※別紙参照",
    length: 5,
  })
  actionCode: string;

  @Column("char", {
    name: "authority_code",
    comment: "[権限コード] ※別紙参照",
    length: 4,
  })
  authorityCode: string;

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
