import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customers } from "./Customers";
import { GroupUsers } from "./GroupUsers";

@Entity("users", { schema: "demo" })
export class Users {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "login_id",
    comment: "[ログインid] 有効ユーザでユニーク",
    length: 32,
  })
  loginId: string;

  @Column("varchar", {
    name: "password",
    comment:
      "[パスワード] 実パスワードの sha-1 ハッシュの 16 進数文字列表記を格納する",
    length: 255,
  })
  password: string;

  @Column("varchar", { name: "name", comment: "[名前] ", length: 10 })
  name: string;

  @Column("varchar", {
    name: "name_kana",
    comment: "[名前(かな)] ",
    length: 20,
  })
  nameKana: string;

  @Column("char", {
    name: "authority_code",
    comment: "[ユーザ権限] authoritiesテーブル参照",
    length: 4,
  })
  authorityCode: string;

  @Column("char", {
    name: "gender",
    comment: "[性別] 新規 00:不明 01:男性 02:女性",
    length: 2,
    default: () => "'0'",
  })
  gender: string;

  @Column("char", {
    name: "staff_code",
    nullable: true,
    comment: "[スタッフコード] 新規",
    length: 10,
  })
  staffCode: string | null;

  @Column("varchar", {
    name: "dealer_code",
    nullable: true,
    comment: "[コンサルタントコード] ",
    length: 10,
  })
  dealerCode: string | null;

  @Column("date", {
    name: "birthday",
    nullable: true,
    comment: "[誕生日] 新規",
  })
  birthday: string | null;

  @Column("varchar", { name: "tel", comment: "[連絡先] ", length: 20 })
  tel: string;

  @Column("varchar", {
    name: "notice_mail",
    comment: "[通知メールアドレス] ",
    length: 128,
  })
  noticeMail: string;

  @Column("varchar", {
    name: "business_mail",
    comment: "[業務連絡メールアドレス] ",
    length: 128,
  })
  businessMail: string;

  @Column("char", {
    name: "qualification_etc",
    nullable: true,
    comment: "[資格その他] 新規",
    length: 100,
  })
  qualificationEtc: string | null;

  @Column("text", {
    name: "profile",
    nullable: true,
    comment: "[プロフィール] 新規",
  })
  profile: string | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("text", {
    name: "login_ip",
    nullable: true,
    comment: "[ログインip許可アドレス] ",
  })
  loginIp: string | null;

  @Column("varchar", {
    name: "terminal_token",
    nullable: true,
    comment: "[端末固定ip] 端末固定ipアドレス⇒　ブラウザ cookie だけ",
    length: 64,
  })
  terminalToken: string | null;

  @Column("datetime", {
    name: "login_failed",
    nullable: true,
    comment: "[ログイン失敗日時] ",
  })
  loginFailed: Date | null;

  @Column("int", {
    name: "login_failed_count",
    comment: "[ログイン失敗回数] ",
    unsigned: true,
    default: () => "'0'",
  })
  loginFailedCount: number;

  @Column("tinyint", {
    name: "locked",
    comment: "[ログイン可否フラグ] 0：ログイン可 1：ログイン不可",
    unsigned: true,
    default: () => "'0'",
  })
  locked: number;

  @Column("tinyint", {
    name: "is_approval_superuser",
    nullable: true,
    comment: "[スーパー承認ユーザフラグ] ",
    unsigned: true,
  })
  isApprovalSuperuser: number | null;

  @Column("tinyint", {
    name: "is_approval_user",
    comment:
      "[承認ユーザフラグ] 顧客情報ファイル出力機能の制限ipアドレス変更時の承認者フラグ 0:承認できないユーザ 1:承認できるユーザ",
    unsigned: true,
    default: () => "'0'",
  })
  isApprovalUser: number;

  @Column("tinyint", {
    name: "is_constituent_checker",
    comment: "[構成員契約確認送付先指定] ",
    unsigned: true,
    default: () => "'0'",
  })
  isConstituentChecker: number;

  @Column("tinyint", {
    name: "is_wait_contract",
    nullable: true,
    comment: "[契約情報成立待ち通知フラグ] ",
    unsigned: true,
  })
  isWaitContract: number | null;

  @Column("tinyint", {
    name: "is_insurer_func",
    nullable: true,
    comment: "[保険会社資料利用可能フラグ] ",
    unsigned: true,
  })
  isInsurerFunc: number | null;

  @Column("int", {
    name: "start_func_id",
    nullable: true,
    comment: "[ログイン後表示機能id] 新規 ログイン時、最初に表示する機能id",
    unsigned: true,
  })
  startFuncId: number | null;

  @Column("tinyint", {
    name: "group_hidden",
    nullable: true,
    comment:
      "[グループでの非表示フラグ] 0: グループ時に表示する 1: グループ時に表示しない",
    width: 1,
    default: () => "'0'",
  })
  groupHidden: boolean | null;

  @Column("datetime", {
    name: "created",
    comment: "[作成日時] 自動設定",
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
  })
  createdUserId: number;

  @Column("datetime", {
    name: "modified",
    comment: "[更新日時] 自動設定",
    default: () => "CURRENT_TIMESTAMP",
  })
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

  @Column("tinyint", {
    name: "refer_data_type",
    comment: "[データ参照タイプ] 1: 自身 2: 自エージェント 3: 自社 9: 全て",
  })
  referDataType: number;

  @OneToMany(() => Customers, (customers) => customers.user)
  customers: Customers[];

  @OneToMany(() => GroupUsers, (groupUsers) => groupUsers.user)
  groupUsers: GroupUsers[];
}
