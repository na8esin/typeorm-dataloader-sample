import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("intention_category_datas", { schema: "demo" })
export class IntentionCategoryDatas {
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
    name: "intention_small_category_id",
    comment: "[小分類カテゴリid] ",
    unsigned: true,
  })
  intentionSmallCategoryId: number;

  @Column("varchar", {
    name: "intention_small_category_etc",
    nullable: true,
    comment: "[小分類カテゴリその他] ",
    length: 50,
  })
  intentionSmallCategoryEtc: string | null;

  @Column("tinyint", {
    name: "check_first_intention",
    nullable: true,
    comment: "[最初のご意向チェック] 0: チェックなし 1: チェックあり",
    unsigned: true,
  })
  checkFirstIntention: number | null;

  @Column("tinyint", {
    name: "check_last_intention",
    nullable: true,
    comment: "[最終のご意向チェック] 0: チェックなし 1: チェックあり",
    unsigned: true,
  })
  checkLastIntention: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
