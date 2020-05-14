import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expertise_fields", { schema: "demo" })
export class ExpertiseFields {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "name", comment: "[名前] 得意分野名", length: 64 })
  name: string;

  @Column("varchar", {
    name: "color",
    nullable: true,
    comment: "[表示色] スケジュール画面で表示する得意分野の色",
    length: 7,
    default: () => "'#000000'",
  })
  color: string | null;

  @Column("varchar", {
    name: "note",
    nullable: true,
    comment: "[備考] ",
    length: 100,
  })
  note: string | null;

  @Column("int", {
    name: "show_at",
    nullable: true,
    comment: "[並び順] ",
    unsigned: true,
  })
  showAt: number | null;

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
}
