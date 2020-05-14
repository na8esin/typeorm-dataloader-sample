import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mail_consts", { schema: "demo" })
export class MailConsts {
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
    comment: "[メールに紐づく機能] 空の場合は顧客情報で使う場合の変換コード表",
    length: 50,
  })
  funcKey: string | null;

  @Column("varchar", {
    name: "param_key",
    nullable: true,
    comment: "[関連キー] ",
    length: 50,
  })
  paramKey: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "[名称] ",
    length: 50,
  })
  name: string | null;

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
}
