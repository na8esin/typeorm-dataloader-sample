import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mail_logs", { schema: "demo" })
export class MailLogs {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "code",
    comment: "[一意なコード] 乱数",
    length: 32,
  })
  code: string;

  @Column("char", {
    name: "kind",
    comment: "[メール種類] 01: 新規アポ 02: キャンセル 03: 日程変更",
    length: 2,
  })
  kind: string;

  @Column("int", {
    name: "customer_id",
    comment: "[顧客ｉｄ] 対象となる 顧客id",
  })
  customerId: number;

  @Column("int", {
    name: "appoint_id",
    comment: "顧客に紐づくアポイントのID",
    unsigned: true,
  })
  appointId: number;

  @Column("int", {
    name: "user_id",
    comment: "顧客担当コンサルタントID",
    unsigned: true,
  })
  userId: number;

  @Column("datetime", { name: "opened", nullable: true, comment: "開封日時" })
  opened: Date | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
