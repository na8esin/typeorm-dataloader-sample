import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_importance_point_datas", { schema: "demo" })
export class IntentionImportancePointDatas {
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

  @Column("char", {
    name: "intention_type",
    comment: "[意向区分] 00: 最初 01: 最終",
    length: 2,
  })
  intentionType: string;

  @Column("int", {
    name: "intention_importance_point_id",
    nullable: true,
    comment: "[重視ポイントid] ",
    unsigned: true,
  })
  intentionImportancePointId: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
