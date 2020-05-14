import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("fk_appoints_customer_id_customers_id", ["customerId"], {})
@Entity("appoints", { schema: "demo" })
export class Appoints {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: string;

  @Column("int", {
    name: "user_id",
    nullable: true,
    comment: "[コンサルタントid] ブロックの時だけ値が入る",
    unsigned: true,
  })
  userId: number | null;

  @Column("int", {
    name: "customer_id",
    nullable: true,
    comment: "[顧客id] ",
    unsigned: true,
  })
  customerId: number | null;

  @Column("char", {
    name: "role",
    comment:
      "[アポイント種別] 000: 通常予定・報告 001: 通常ブロック 002: アポイントブロック 003: 繰り返しブロック  100: googleカレンダー連携",
    length: 3,
    default: () => "'0'",
  })
  role: string;

  @Column("date", { name: "date_from", comment: "[アポイント開始日] " })
  dateFrom: string;

  @Column("char", {
    name: "date_from_hhmm",
    comment: "[アポイント開始時刻（時分）] ",
    length: 5,
    default: () => "'00'",
  })
  dateFromHhmm: string;

  @Column("date", { name: "date_to", comment: "[アポイント終了日] " })
  dateTo: string;

  @Column("char", {
    name: "date_to_hhmm",
    comment: "[アポイント終了時刻（時分）] ",
    length: 5,
    default: () => "'00'",
  })
  dateToHhmm: string;

  @Column("datetime", {
    name: "contacted",
    nullable: true,
    comment:
      "[面談日時] 実際にあった日時（面談ステータスがセットされて、後に終了となった場合でも残す。）",
  })
  contacted: Date | null;

  @Column("char", {
    name: "status_code",
    nullable: true,
    comment: "[面談ステータスコード] statusesテーブル参照",
    length: 3,
  })
  statusCode: string | null;

  @Column("char", {
    name: "child_status_code",
    nullable: true,
    comment: "[子面談ステータスコード] statusesテーブル参照",
    length: 3,
  })
  childStatusCode: string | null;

  @Column("char", {
    name: "grandson_status_code",
    nullable: true,
    comment: "[孫面談ステータスコード] statusesテーブル参照",
    length: 3,
  })
  grandsonStatusCode: string | null;

  @Column("char", {
    name: "repeat_pattern_div",
    nullable: true,
    comment: "[繰り返し区分] 00: 毎日 01: 毎週 02: 毎月",
    length: 2,
  })
  repeatPatternDiv: string | null;

  @Column("char", {
    name: "repeat_week_div",
    nullable: true,
    comment:
      "[繰り返し週区分] 00: 毎週 01: 第1 02: 第2 03: 第3 04: 第4 05: 第5",
    length: 2,
  })
  repeatWeekDiv: string | null;

  @Column("char", {
    name: "repeat_pattern_dayofweek",
    nullable: true,
    comment:
      "[繰り返し曜日区分] 0000000 1bit : 日 2bit : 月 3bit : 火 4bit : 水 5bit : 木 6bit : 金 7bit : 土",
    length: 7,
  })
  repeatPatternDayofweek: string | null;

  @Column("char", {
    name: "repeat_pattern_month_dayofmonth",
    nullable: true,
    comment: "[繰り返し日設定区分] 01: 1日 ～ 31: 31日 99: 月末",
    length: 2,
  })
  repeatPatternMonthDayofmonth: string | null;

  @Column("date", {
    name: "repeat_end_date",
    nullable: true,
    comment: "[繰り返し終了日] ",
  })
  repeatEndDate: string | null;

  @Column("varchar", {
    name: "tel",
    nullable: true,
    comment: "[電話番号] 仮アポ向け",
    length: 20,
  })
  tel: string | null;

  @Column("varchar", {
    name: "spot",
    nullable: true,
    comment: "[所在地] 所在地",
    length: 100,
  })
  spot: string | null;

  @Column("text", {
    name: "spot_url",
    nullable: true,
    comment: "[所在地url] 所在地url",
  })
  spotUrl: string | null;

  @Column("text", {
    name: "note",
    nullable: true,
    comment: "[意向およびその他] 意向およびその他",
  })
  note: string | null;

  @Column("text", {
    name: "note_cc",
    nullable: true,
    comment: "[cc備考] cc備考",
  })
  noteCc: string | null;

  @Column("text", {
    name: "note_etc1",
    nullable: true,
    comment: "[その他備考１] その他備考１",
  })
  noteEtc1: string | null;

  @Column("text", {
    name: "note_etc2",
    nullable: true,
    comment: "[その他備考２] その他備考２",
  })
  noteEtc2: string | null;

  @Column("text", {
    name: "note_etc3",
    nullable: true,
    comment: "[その他備考３] その他備考３",
  })
  noteEtc3: string | null;

  @Column("date", {
    name: "presented_lifeplan",
    nullable: true,
    comment: "[ライフプラン提示日] ライフプラン表提示日",
  })
  presentedLifeplan: string | null;

  @Column("char", {
    name: "presented_lifeplan_means",
    nullable: true,
    comment: "[ライフプラン提示方法] 01: 手渡し 02: 郵送 03: その他",
    length: 2,
  })
  presentedLifeplanMeans: string | null;

  @Column("char", {
    name: "presence_relation",
    nullable: true,
    comment:
      "[同席者続柄] 01: 父 02: 母 03: 夫 04: 妻 05: 祖父 06: 祖母 07: 子 08: 孫 09: その他",
    length: 2,
  })
  presenceRelation: string | null;

  @Column("varchar", {
    name: "presence_note",
    nullable: true,
    comment: "[同席者備考] 同席者備考",
    length: 20,
  })
  presenceNote: string | null;

  @Column("tinyint", {
    name: "interest_car_insurer",
    nullable: true,
    comment: "[自動車保険興味フラグ] 自動車保険興味フラグ",
    unsigned: true,
  })
  interestCarInsurer: number | null;

  @Column("char", {
    name: "is_counter_introduction",
    nullable: true,
    comment: "[スーモカウンタ紹介有無] 00: 無 01: 有",
    length: 2,
    default: () => "'0'",
  })
  isCounterIntroduction: string | null;

  @Column("char", {
    name: "result_counter_introduction",
    nullable: true,
    comment: "[ご紹介結果] ",
    length: 3,
  })
  resultCounterIntroduction: string | null;

  @Column("varchar", {
    name: "google_calendar_id",
    nullable: true,
    comment: "[google calendar id] google calendar にスケジュールに紐づくid？",
    length: 50,
  })
  googleCalendarId: string | null;

  @Column("tinyint", {
    name: "presented_lifeplan_flg",
    nullable: true,
    comment: "[ライフプラン提示フラグ] ライフプラン提示フラグ",
    width: 1,
  })
  presentedLifeplanFlg: boolean | null;

  @Column("tinyint", {
    name: "presence_flg",
    nullable: true,
    comment: "[同席者フラグ] 0: 同席者なし 1: 同席者あり",
    width: 1,
  })
  presenceFlg: boolean | null;

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

  @ManyToOne(() => Customers, (customers) => customers.appoints, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
