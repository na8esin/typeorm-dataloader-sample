import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mail_properties", { schema: "demo" })
export class MailProperties {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "func_key",
    nullable: true,
    comment: "[メールに紐づく機能] ",
    length: 50,
  })
  funcKey: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "[機能名] ",
    length: 50,
  })
  name: string | null;

  @Column("varchar", {
    name: "default_title",
    nullable: true,
    comment: "[デフォルトタイトル] ",
    length: 50,
  })
  defaultTitle: string | null;

  @Column("text", {
    name: "default_body",
    nullable: true,
    comment: "[デフォルト本文] ",
  })
  defaultBody: string | null;

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

  @Column("tinyint", { name: "enabled", unsigned: true, default: () => "'1'" })
  enabled: number;

  @Column("tinyint", {
    name: "delete_flg",
    comment: "[削除フラグ] 0: 通常 1: 削除",
    unsigned: true,
    default: () => "'0'",
  })
  deleteFlg: number;
}
