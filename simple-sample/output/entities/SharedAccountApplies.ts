import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shared_account_applies", { schema: "demo" })
export class SharedAccountApplies {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("datetime", { name: "apply_datetime", comment: "[申請日時] " })
  applyDatetime: Date;

  @Column("int", {
    name: "client_id",
    comment: "[クライアントid] ",
    unsigned: true,
  })
  clientId: number;

  @Column("int", {
    name: "user_id",
    comment: "[申請ユーザid] ",
    unsigned: true,
  })
  userId: number;

  @Column("char", {
    name: "apply_type",
    comment:
      "[申請タイプ] 01: 新規 02: 既存アカウント連携 03: 統合アカウントから紐づけ解除",
    length: 2,
  })
  applyType: string;

  @Column("varchar", {
    name: "shared_account_login_id",
    nullable: true,
    comment:
      "[統合アカウントid] 既存のアカウントを持っている人の統合アカウントid",
    length: 20,
  })
  sharedAccountLoginId: string | null;

  @Column("tinyint", {
    name: "status",
    comment: "[申請ステータス] 0: 申請 1: 却下 2: 承認",
    unsigned: true,
  })
  status: number;

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
