import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_approval_histories", { schema: "demo" })
export class IntentionApprovalHistories {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "intention_id",
    comment: "[意向把握id] ",
    unsigned: true,
  })
  intentionId: number;

  @Column("datetime", {
    name: "approval_time",
    nullable: true,
    comment: "[決裁日時] ",
  })
  approvalTime: Date | null;

  @Column("char", {
    name: "approval_status",
    nullable: true,
    comment: "[決裁ステータス] 00:未申請 01:申請中 02:差し戻し 03:決裁",
    length: 2,
  })
  approvalStatus: string | null;

  @Column("int", {
    name: "approval_user_id",
    nullable: true,
    comment: "[決裁者ユーザid] ",
    unsigned: true,
  })
  approvalUserId: number | null;

  @Column("text", {
    name: "note",
    nullable: true,
    comment: "[差し戻し理由等] ",
  })
  note: string | null;

  @Column("text", {
    name: "intention_data",
    nullable: true,
    comment: "[意向把握データ(json)] 申請時の意向把握データをjson配列で格納",
  })
  intentionData: string | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
