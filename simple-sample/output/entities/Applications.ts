import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";
import { ProductCategories } from "./ProductCategories";
import { Products } from "./Products";

@Index("fk_applications_customer_id_customers_id", ["customerId"], {})
@Index(
  "fk_applications_product_category_id_product_categories_id",
  ["productCategoryId"],
  {}
)
@Index("fk_applications_product_id_products_id", ["productId"], {})
@Entity("applications", { schema: "demo" })
export class Applications {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "customer_id", comment: "[顧客id] ", unsigned: true })
  customerId: number;

  @Column("bigint", {
    name: "appoint_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  appointId: string | null;

  @Column("date", { name: "applied", comment: "[申込日] " })
  applied: string;

  @Column("date", {
    name: "contracted_date",
    nullable: true,
    comment: "[契約日] ",
  })
  contractedDate: string | null;

  @Column("date", {
    name: "notification_date",
    nullable: true,
    comment: "[告知日] ",
  })
  notificationDate: string | null;

  @Column("char", {
    name: "status",
    comment: "[成立フラグ] 00: 未確定 01: 成立 02: 不成立",
    length: 2,
    default: () => "'00'",
  })
  status: string;

  @Column("varchar", { name: "concluded", comment: "[成立年月] ", length: 7 })
  concluded: string;

  @Column("char", {
    name: "application_type",
    nullable: true,
    comment: "[契約区分] 新規 1: 個人 2: 法人 3: その他",
    length: 2,
  })
  applicationType: string | null;

  @Column("varchar", {
    name: "start_deduction",
    nullable: true,
    comment: "[控除開始年月] ",
    length: 7,
  })
  startDeduction: string | null;

  @Column("int", {
    name: "contractor",
    comment: "[契約者] 0: 本人",
    unsigned: true,
  })
  contractor: number;

  @Column("char", {
    name: "contractor_job",
    nullable: true,
    comment: "[契約者勤務先区分] 01: 主婦 02: 未就労者 03: 会社員",
    length: 2,
  })
  contractorJob: string | null;

  @Column("varchar", {
    name: "contractor_job_name",
    nullable: true,
    comment: "[契約者勤務先名] ",
    length: 60,
  })
  contractorJobName: string | null;

  @Column("varchar", {
    name: "policy_number",
    nullable: true,
    comment: "[証券番号] ",
    length: 50,
  })
  policyNumber: string | null;

  @Column("int", {
    name: "insurant",
    comment: "[被保険者] 0: 本人",
    unsigned: true,
  })
  insurant: number;

  @Column("char", {
    name: "insurant_job",
    nullable: true,
    comment: "[被保険者勤務先区分] 01: 主婦 02: 未就労者 03: 会社員",
    length: 2,
  })
  insurantJob: string | null;

  @Column("varchar", {
    name: "insurant_job_name",
    nullable: true,
    comment: "[被保険者勤務先名] ",
    length: 60,
  })
  insurantJobName: string | null;

  @Column("int", {
    name: "insurant_id",
    nullable: true,
    comment: "[保険会社id] 高速化対応",
    unsigned: true,
  })
  insurantId: number | null;

  @Column("int", {
    name: "product_category_id",
    nullable: true,
    comment: "[保険種別id] 高速化対応",
    unsigned: true,
  })
  productCategoryId: number | null;

  @Column("int", {
    name: "product_id",
    comment: "[保険商品id] ",
    unsigned: true,
  })
  productId: number;

  @Column("char", {
    name: "pay_type",
    comment: "[支払方法] 01: 月 02: 年 03: 半年 04: 一時",
    length: 2,
  })
  payType: string;

  @Column("char", {
    name: "period_insurer_type",
    nullable: true,
    comment: "[保険期間タイプ] 01:終身 02:満期年月日",
    length: 2,
  })
  periodInsurerType: string | null;

  @Column("date", {
    name: "period_insurer_date",
    nullable: true,
    comment: "[満期年月日] ",
  })
  periodInsurerDate: string | null;

  @Column("bigint", { name: "premium", comment: "[保険料] " })
  premium: string;

  @Column("bigint", { name: "annual_premium", comment: "[anp] 冗長情報" })
  annualPremium: string;

  @Column("char", {
    name: "is_transfer",
    nullable: true,
    comment: "[振込有無フラグ] ",
    length: 2,
  })
  isTransfer: string | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("tinyint", {
    name: "constituent",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  constituent: boolean | null;

  @Column("tinyint", {
    name: "death_benefit",
    comment: "[死亡保障なしチェック] ",
    unsigned: true,
    default: () => "'0'",
  })
  deathBenefit: number;

  @Column("int", {
    name: "checked_user_id",
    nullable: true,
    comment: "[構成員契約確認ユーザid] ",
    unsigned: true,
  })
  checkedUserId: number | null;

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

  @ManyToOne(() => Customers, (customers) => customers.applications, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.applications,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "product_category_id", referencedColumnName: "id" }])
  productCategory: ProductCategories;

  @ManyToOne(() => Products, (products) => products.applications, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
