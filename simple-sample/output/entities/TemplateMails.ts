import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("template_mails", { schema: "demo" })
export class TemplateMails {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "mail_type",
    comment: "[メールタイプ] 01: アポイント入手経路別 02: 顧客情報",
    length: 2,
  })
  mailType: string;

  @Column("varchar", {
    name: "func_key",
    nullable: true,
    comment: "[メールに紐づく機能] mail_properties参照",
    length: 50,
  })
  funcKey: string | null;

  @Column("varchar", { name: "name", comment: "[テンプレート名] ", length: 64 })
  name: string;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("varchar", { name: "title", comment: "[タイトル] ", length: 255 })
  title: string;

  @Column("text", { name: "header", nullable: true, comment: "[ヘッダー] " })
  header: string | null;

  @Column("text", { name: "body", nullable: true, comment: "[ボディ] " })
  body: string | null;

  @Column("text", { name: "footer", nullable: true, comment: "[フッター] " })
  footer: string | null;

  @Column("smallint", {
    name: "show_at",
    comment: "[並び順] ",
    unsigned: true,
    default: () => "'0'",
  })
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
    comment:
      "[システム設定画面で有効かどうか] 0: 通常 1: システム設定からも非表示にする",
    unsigned: true,
    default: () => "'0'",
  })
  deleteFlg: number;
}
