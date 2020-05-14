import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expertise_field_users", { schema: "demo" })
export class ExpertiseFieldUsers {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "user_id", comment: "[ユーザid] ", unsigned: true })
  userId: number;

  @Column("int", {
    name: "expertise_field_id",
    comment: "[得意分野id] ",
    unsigned: true,
  })
  expertiseFieldId: number;

  @Column("char", {
    name: "classfication_key",
    comment:
      "[区分キー] 01: 得意 02:普通に話せる 03: あまり得意でない 04: 不得意",
    length: 5,
  })
  classficationKey: string;

  @Column("datetime", {
    name: "created",
    comment: "[作成日時] 自動設定",
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
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
}
