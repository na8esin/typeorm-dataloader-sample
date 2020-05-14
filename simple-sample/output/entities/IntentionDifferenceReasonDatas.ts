import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_difference_reason_datas", { schema: "demo" })
export class IntentionDifferenceReasonDatas {
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

  @Column("int", {
    name: "intention_difference_reason_id",
    nullable: true,
    comment: "[最終意向相違理由id] 00: 最初 01:最終",
    unsigned: true,
  })
  intentionDifferenceReasonId: number | null;

  @Column("char", {
    name: "intention_difference_check",
    nullable: true,
    comment: "[最終意向相違区分] 0: チャックなし 1:チェックあり",
    length: 2,
  })
  intentionDifferenceCheck: string | null;

  @Column("varchar", {
    name: "intention_difference_reason_etc",
    nullable: true,
    comment: "[最終意向相違理由その他] ",
    length: 50,
  })
  intentionDifferenceReasonEtc: string | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
