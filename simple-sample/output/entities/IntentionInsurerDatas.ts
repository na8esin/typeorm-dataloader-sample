import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_insurer_datas", { schema: "demo" })
export class IntentionInsurerDatas {
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

  @Column("int", { name: "product_category_id", nullable: true })
  productCategoryId: number | null;

  @Column("int", {
    name: "insurance_amount",
    nullable: true,
    comment: "[保険金額] ",
    unsigned: true,
  })
  insuranceAmount: number | null;

  @Column("char", {
    name: "check_period",
    nullable: true,
    comment: "[保険期間区分] 01:一生涯 02:年齢xまで",
    length: 2,
  })
  checkPeriod: string | null;

  @Column("tinyint", {
    name: "period_end_age",
    nullable: true,
    comment: "[保険期間年齢] ",
    unsigned: true,
  })
  periodEndAge: number | null;

  @Column("int", {
    name: "insurance_fee",
    nullable: true,
    comment: "[保険料] ",
    unsigned: true,
  })
  insuranceFee: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
