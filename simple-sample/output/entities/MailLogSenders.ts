import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mail_log_senders", { schema: "demo" })
export class MailLogSenders {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "mail_log_id",
    comment: "[メールログｉｄ] 乱数",
    unsigned: true,
  })
  mailLogId: number;

  @Column("datetime", {
    name: "opened",
    nullable: true,
    comment: "[開封日時] 開封時刻 (未開封は null)",
  })
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
