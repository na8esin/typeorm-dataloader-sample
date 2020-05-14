import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("access_logs", { schema: "demo" })
export class AccessLogs {
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
    comment: "[ユーザid] システムによる自動入力、更新",
  })
  userId: number | null;

  @Column("varchar", {
    name: "remote_address",
    comment: "[遷移元ipアドレス] アクセス元 ip アドレス文字列",
    length: 40,
  })
  remoteAddress: string;

  @Column("varchar", {
    name: "user_agent",
    comment: "[ユーザエージェント] ",
    length: 200,
  })
  userAgent: string;

  @Column("char", {
    name: "menu_code",
    comment: "[メニューコード] ",
    length: 5,
  })
  menuCode: string;

  @Column("char", {
    name: "func_code",
    nullable: true,
    comment: "[機能コード] ",
    length: 5,
  })
  funcCode: string | null;

  @Column("char", {
    name: "action_code",
    comment: "[アクションキー] ",
    length: 5,
  })
  actionCode: string;

  @Column("int", {
    name: "customer_id",
    nullable: true,
    comment: "[顧客id] 顧客id",
    unsigned: true,
  })
  customerId: number | null;

  @Column("int", {
    name: "sub_id",
    nullable: true,
    comment:
      "[サブid] 顧客idに紐づく下階層のsub_id (appoint_id, family_id, application_id)",
    unsigned: true,
  })
  subId: number | null;

  @Column("int", {
    name: "cnt",
    nullable: true,
    comment: "[件数] 各アクションの件数",
    unsigned: true,
  })
  cnt: number | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("text", {
    name: "params",
    nullable: true,
    comment: "[パラメータ] リクエスト値",
  })
  params: string | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;
}
