import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("fk_intentions_customer_id_customers_id", ["customerId"], {})
@Entity("intentions", { schema: "demo" })
export class Intentions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "customer_id", comment: "[顧客id] ", unsigned: true })
  customerId: number;

  @Column("date", { name: "hearing_date", comment: "[ヒアリング日] yyyymmdd" })
  hearingDate: string;

  @Column("varchar", {
    name: "insured_name",
    comment: "[被保険者名] ",
    length: 64,
  })
  insuredName: string;

  @Column("tinyint", {
    name: "approval_status",
    nullable: true,
    default: () => "'0'",
  })
  approvalStatus: number | null;

  @Column("datetime", {
    name: "approval_time",
    nullable: true,
    comment: "[決裁日時] yyyy-mm-dd hh:mm:ss",
  })
  approvalTime: Date | null;

  @Column("int", {
    name: "approval_user_id",
    nullable: true,
    comment: "[決裁者ユーザid] ",
    unsigned: true,
  })
  approvalUserId: number | null;

  @Column("char", {
    name: "last_intention_flg",
    nullable: true,
    comment: "[最終意向フラグ] 00: 最初に意向 01:最終的な意向",
    length: 2,
  })
  lastIntentionFlg: string | null;

  @Column("varchar", {
    name: "first_cancel_refund",
    nullable: true,
    comment: "[解約返戻金必要識別番号（最初）] ",
    length: 50,
  })
  firstCancelRefund: string | null;

  @Column("varchar", {
    name: "last_cancel_refund",
    nullable: true,
    comment: "[解約返戻金必要識別番号（最終）] ",
    length: 50,
  })
  lastCancelRefund: string | null;

  @Column("char", {
    name: "insurer_conclusion_flg",
    nullable: true,
    comment: "[保険情報最終結果同一フラグ] 01:左記と同じ 02:下記に変更",
    length: 2,
  })
  insurerConclusionFlg: string | null;

  @Column("varchar", {
    name: "insurer_change_content",
    nullable: true,
    comment: "[変更内容] ",
    length: 500,
  })
  insurerChangeContent: string | null;

  @Column("varchar", {
    name: "first_hope_content",
    nullable: true,
    comment: "[最初意向のその他希望内容] ",
    length: 100,
  })
  firstHopeContent: string | null;

  @Column("varchar", {
    name: "last_hope_content",
    nullable: true,
    comment: "[最終意向のその他希望内容] ",
    length: 100,
  })
  lastHopeContent: string | null;

  @Column("char", {
    name: "difference_reason_flg",
    nullable: true,
    comment: "[最初、最終相違フラグ] 01:相違なし 02:相違あり",
    length: 2,
  })
  differenceReasonFlg: string | null;

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

  @ManyToOne(() => Customers, (customers) => customers.intentions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
