import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("approval_changing_ipaddresses", { schema: "demo" })
export class ApprovalChangingIpaddresses {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "user_id",
    comment: "[申請者ユーザid] ",
    unsigned: true,
  })
  userId: number;

  @Column("text", {
    name: "allowed_ip_address",
    nullable: true,
    comment: "[変更後ipアドレス] ",
  })
  allowedIpAddress: string | null;

  @Column("varchar", {
    name: "approval_key",
    nullable: true,
    comment: "[承認キー] ",
    length: 16,
  })
  approvalKey: string | null;

  @Column("varchar", {
    name: "approval_param",
    nullable: true,
    comment: "[承認urlパラメータ] ",
    length: 16,
  })
  approvalParam: string | null;

  @Column("date", {
    name: "approval_expired",
    nullable: true,
    comment: "[承認処理の有効期限] ",
  })
  approvalExpired: string | null;

  @Column("char", {
    name: "approval_status",
    nullable: true,
    comment: "[承認ステータス] ",
    length: 2,
  })
  approvalStatus: string | null;

  @Column("int", {
    name: "approval_user_id",
    nullable: true,
    comment: "[承認ユーザid] ",
    unsigned: true,
  })
  approvalUserId: number | null;

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
