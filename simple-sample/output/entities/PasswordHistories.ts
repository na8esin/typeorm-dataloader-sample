import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("password_histories", { schema: "demo" })
export class PasswordHistories {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "user_id", comment: "[ユーザid] ", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "password",
    comment: "[パスワード] ",
    length: 128,
  })
  password: string;

  @Column("varchar", {
    name: "param",
    nullable: true,
    comment: "[urlパラメータ] ",
    length: 20,
  })
  param: string | null;

  @Column("varchar", {
    name: "onetime_password",
    nullable: true,
    comment: "[ワンタイムパスワード] ",
    length: 20,
  })
  onetimePassword: string | null;

  @Column("datetime", {
    name: "expired",
    nullable: true,
    comment: "[有効期限] 発行日時から●時間経過したものは無効とする。",
  })
  expired: Date | null;

  @Column("tinyint", {
    name: "status",
    nullable: true,
    comment: "[ステータス] 0: 未設定 1: パスワード変更済",
    unsigned: true,
  })
  status: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;
}
