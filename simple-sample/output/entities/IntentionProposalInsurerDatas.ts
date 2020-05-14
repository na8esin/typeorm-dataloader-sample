import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_proposal_insurer_datas", { schema: "demo" })
export class IntentionProposalInsurerDatas {
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
    name: "product_category_id",
    nullable: true,
    comment: "[保険種別id] ",
    unsigned: true,
  })
  productCategoryId: number | null;

  @Column("varchar", {
    name: "proposal_insurer_number",
    nullable: true,
    comment: "[提案保険会社番号] ex) 1,2,3",
    length: 50,
  })
  proposalInsurerNumber: string | null;

  @Column("varchar", {
    name: "last_insurer_number",
    nullable: true,
    comment: "[最終保険会社番号] ex) 1,2,3",
    length: 50,
  })
  lastInsurerNumber: string | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
