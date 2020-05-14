import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Applications } from "./Applications";
import { Appoints } from "./Appoints";
import { CustomerChangedusers } from "./CustomerChangedusers";
import { Routes } from "./Routes";
import { Users } from "./Users";
import { Families } from "./Families";
import { Intentions } from "./Intentions";
import { UploadFiles } from "./UploadFiles";

@Index("fk_customers_user_id_users_id", ["userId"], {})
@Index("fk_customers_route_id_routes_id", ["routeId"], {})
@Entity("customers", { schema: "demo" })
export class Customers {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "[顧客id] ",
    length: 25,
  })
  code: string | null;

  @Column("varchar", {
    name: "corporation_code",
    nullable: true,
    comment: "[会社コード] 顧客id = 会社コード + 氏名コード",
    length: 5,
  })
  corporationCode: string | null;

  @Column("varchar", {
    name: "staff_code",
    nullable: true,
    comment: "[氏名コード] 顧客id = 会社コード + 氏名コード",
    length: 6,
  })
  staffCode: string | null;

  @Column("varchar", {
    name: "sfid",
    nullable: true,
    comment: "[salesforceid] 半角英数字、ハイフン、アンダーバーのみ登録可",
    length: 25,
  })
  sfid: string | null;

  @Column("varchar", {
    name: "lmapp_no",
    nullable: true,
    comment: "[lm対象契約no] ",
    length: 25,
  })
  lmappNo: string | null;

  @Column("varchar", {
    name: "lmapp_id",
    nullable: true,
    comment: "[lm対象契約id] ",
    length: 25,
  })
  lmappId: string | null;

  @Column("varchar", {
    name: "lname",
    nullable: true,
    comment: "[顧客名(姓)] ",
    length: 32,
  })
  lname: string | null;

  @Column("varchar", {
    name: "fname",
    nullable: true,
    comment: "[顧客名(名)] ",
    length: 32,
  })
  fname: string | null;

  @Column("varchar", {
    name: "lname_kana",
    nullable: true,
    comment: "[顧客カナ(姓)] 全角カナに正規化した値を格納する",
    length: 32,
  })
  lnameKana: string | null;

  @Column("varchar", {
    name: "fname_kana",
    nullable: true,
    comment: "[顧客カナ(名)] 全角カナに正規化した値を格納する",
    length: 32,
  })
  fnameKana: string | null;

  @Column("varbinary", {
    name: "enc_tel1",
    nullable: true,
    comment: "[(バイナリ)自宅電話] ",
    length: 256,
  })
  encTel1: Buffer | null;

  @Column("varbinary", {
    name: "enc_tel2",
    nullable: true,
    comment: "[(バイナリ)連絡先電話] ",
    length: 256,
  })
  encTel2: Buffer | null;

  @Column("varbinary", {
    name: "enc_notice_mail",
    nullable: true,
    comment: "[(バイナリ）メールアドレス] ",
    length: 512,
  })
  encNoticeMail: Buffer | null;

  @Column("varchar", {
    name: "zip_code",
    nullable: true,
    comment: "[郵便番号] 半角数字に正規化したハイフンなしの文字列",
    length: 7,
  })
  zipCode: string | null;

  @Column("tinyint", {
    name: "pref_code",
    nullable: true,
    comment: "[都道府県コード] ",
    unsigned: true,
  })
  prefCode: number | null;

  @Column("blob", {
    name: "enc_address",
    nullable: true,
    comment: "[(バイナリ）市区町村-番地] ",
  })
  encAddress: Buffer | null;

  @Column("varbinary", {
    name: "enc_birthday",
    nullable: true,
    comment: "[(バイナリ)生年月日] ",
    length: 256,
  })
  encBirthday: Buffer | null;

  @Column("char", {
    name: "gender",
    nullable: true,
    comment: "[性別] 00: 未選択 01: 男性 02: 女性",
    length: 2,
    default: () => "'0'",
  })
  gender: string | null;

  @Column("varchar", {
    name: "company",
    nullable: true,
    comment: "[会社名] ",
    length: 60,
  })
  company: string | null;

  @Column("varchar", {
    name: "occupation",
    nullable: true,
    comment: "[職業] ",
    length: 64,
  })
  occupation: string | null;

  @Column("char", {
    name: "annual_income_personal",
    nullable: true,
    comment: "[顧客年収（個人）] 300万円未満　・・・ 2500万円以上",
    length: 2,
  })
  annualIncomePersonal: string | null;

  @Column("char", {
    name: "annual_income_household",
    nullable: true,
    comment: "[顧客年収（世帯）] 300万円未満　・・・ 2500万円以上",
    length: 2,
  })
  annualIncomeHousehold: string | null;

  @Column("char", {
    name: "exist_contract_life",
    nullable: true,
    comment: "[生保既契約有無] 01:無 02:有 03:不明",
    length: 2,
  })
  existContractLife: string | null;

  @Column("char", {
    name: "exist_contract_nolife",
    nullable: true,
    comment: "[損保既契約有無] 01:無 02:有 03:不明",
    length: 2,
  })
  existContractNolife: string | null;

  @Column("varchar", {
    name: "insurant_name",
    nullable: true,
    comment: "[加入対象者名] ",
    length: 64,
  })
  insurantName: string | null;

  @Column("varchar", {
    name: "insurant_name_kana",
    nullable: true,
    comment: "[加入対象者名カナ] ",
    length: 64,
  })
  insurantNameKana: string | null;

  @Column("char", {
    name: "insurant_gender",
    nullable: true,
    comment: "[加入対象者性別] ",
    length: 2,
  })
  insurantGender: string | null;

  @Column("varbinary", {
    name: "enc_insurant_birthday",
    nullable: true,
    comment: "[(バイナリ)被保険者生年月日] ",
    length: 256,
  })
  encInsurantBirthday: Buffer | null;

  @Column("char", {
    name: "relation",
    nullable: true,
    comment: "[被保険者との関係] ",
    length: 2,
  })
  relation: string | null;

  @Column("char", {
    name: "is_finished_talking",
    nullable: true,
    comment: "[終話フラグ] 01: 未着手 02: 仕掛中 03: 終了",
    length: 2,
  })
  isFinishedTalking: string | null;

  @Column("char", {
    name: "intention_calling_code",
    nullable: true,
    comment:
      "[意向確認架電] 01: かけてない 02: かけたけどつながらない 03: かけてつながった",
    length: 2,
  })
  intentionCallingCode: string | null;

  @Column("char", {
    name: "adjust_interview_status",
    nullable: true,
    comment: "[面談調整ステータス] 01: 調整待ち 02: 調整完了 03: キャンセル",
    length: 2,
  })
  adjustInterviewStatus: string | null;

  @Column("varchar", {
    name: "shokai_code",
    nullable: true,
    comment: "[紹介者id] ",
    length: 25,
  })
  shokaiCode: string | null;

  @Column("varchar", {
    name: "visit_place",
    nullable: true,
    comment: "[訪問場所] ",
    length: 100,
  })
  visitPlace: string | null;

  @Column("varchar", {
    name: "access",
    nullable: true,
    comment: "[最寄り駅] ",
    length: 80,
  })
  access: string | null;

  @Column("date", { name: "called", nullable: true, comment: "[コール日] " })
  called: string | null;

  @Column("varchar", {
    name: "caller",
    nullable: true,
    comment: "[コール担当] ",
    length: 32,
  })
  caller: string | null;

  @Column("varchar", {
    name: "advisor",
    nullable: true,
    comment: "[アドバイザ名] ",
    length: 100,
  })
  advisor: string | null;

  @Column("int", {
    name: "user_id",
    nullable: true,
    comment:
      "[担当コンサルタント] 会員を担当している募集人の id を保持する (csv 投入時に決定．マネージャ以上が編集可)",
    unsigned: true,
  })
  userId: number | null;

  @Column("int", {
    name: "route_id",
    comment: "[アポイント入手経路] ",
    unsigned: true,
  })
  routeId: number;

  @Column("varchar", {
    name: "reserve_a",
    nullable: true,
    comment: "[予備欄a] ",
    length: 10,
  })
  reserveA: string | null;

  @Column("varchar", {
    name: "reserve_b",
    nullable: true,
    comment: "[予備欄b] ",
    length: 10,
  })
  reserveB: string | null;

  @Column("varchar", {
    name: "reserve_c",
    nullable: true,
    comment: "[予備欄c] ",
    length: 10,
  })
  reserveC: string | null;

  @Column("int", { name: "reserve_id", nullable: true, comment: "[予備欄id] " })
  reserveId: number | null;

  @Column("int", {
    name: "first_appointed_id",
    nullable: true,
    comment: "[初回アポイントid] 新規",
    unsigned: true,
  })
  firstAppointedId: number | null;

  @Column("int", {
    name: "next_appointed_id",
    nullable: true,
    comment: "[次回アポイントid] 新規",
    unsigned: true,
  })
  nextAppointedId: number | null;

  @Column("int", {
    name: "first_contacted_id",
    nullable: true,
    comment: "[初回面談アポイントid] 新規",
    unsigned: true,
  })
  firstContactedId: number | null;

  @Column("int", {
    name: "last_appointed_id",
    nullable: true,
    comment: "[最終ステータスアポイントid] 新規",
    unsigned: true,
  })
  lastAppointedId: number | null;

  @Column("int", {
    name: "highest_appointed_id",
    nullable: true,
    comment: "[最高ステータスアポイントid] 新規",
    unsigned: true,
  })
  highestAppointedId: number | null;

  @Column("int", {
    name: "first_applied_id",
    nullable: true,
    comment: "[初回申込日契約id] 新規",
    unsigned: true,
  })
  firstAppliedId: number | null;

  @Column("int", {
    name: "first_lifeplan_appoint_id",
    nullable: true,
    comment: "[初回ライフプラン提示アポイントid] 新規",
    unsigned: true,
  })
  firstLifeplanAppointId: number | null;

  @Column("datetime", {
    name: "letter_downloaded",
    nullable: true,
    comment: "[レターpdf出力日付] ",
  })
  letterDownloaded: Date | null;

  @Column("datetime", {
    name: "constituent_downloaded",
    nullable: true,
    comment: "[特定法人一覧表ダウンロード日時] ",
  })
  constituentDownloaded: Date | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("int", {
    name: "other_system_key",
    nullable: true,
    comment:
      "[他システム連携用キー] 他システム（ifcの資料請求ｄｂ）との連携で、既存データへの追記をする際のキー情報 ※ifcの資料請求dbのケース：顧客id",
    unsigned: true,
  })
  otherSystemKey: number | null;

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

  @Column("datetime", {
    name: "first_applied",
    nullable: true,
    comment: "初回申込日",
  })
  firstApplied: Date | null;

  @Column("datetime", {
    name: "first_appointed",
    nullable: true,
    comment: "初回アポ日",
  })
  firstAppointed: Date | null;

  @Column("datetime", {
    name: "first_contacted",
    nullable: true,
    comment: "初回面談日",
  })
  firstContacted: Date | null;

  @Column("char", {
    name: "first_contacted_status_code",
    nullable: true,
    comment: "初回面談ステータス",
    length: 3,
  })
  firstContactedStatusCode: string | null;

  @Column("date", {
    name: "first_presented_lifeplan",
    nullable: true,
    comment: "初回ライフプラン提示日",
  })
  firstPresentedLifeplan: string | null;

  @Column("date", { name: "billing_date", nullable: true, comment: "[]" })
  billingDate: string | null;

  @OneToMany(() => Applications, (applications) => applications.customer)
  applications: Applications[];

  @OneToMany(() => Appoints, (appoints) => appoints.customer)
  appoints: Appoints[];

  @OneToMany(
    () => CustomerChangedusers,
    (customerChangedusers) => customerChangedusers.customer
  )
  customerChangedusers: CustomerChangedusers[];

  @ManyToOne(() => Routes, (routes) => routes.customers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "route_id", referencedColumnName: "id" }])
  route: Routes;

  @ManyToOne(() => Users, (users) => users.customers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(() => Families, (families) => families.customer)
  families: Families[];

  @OneToMany(() => Intentions, (intentions) => intentions.customer)
  intentions: Intentions[];

  @OneToMany(() => UploadFiles, (uploadFiles) => uploadFiles.customer)
  uploadFiles: UploadFiles[];
}
