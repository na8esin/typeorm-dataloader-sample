import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reserves", { schema: "demo" })
export class Reserves {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "name", comment: "[名前] ", length: 50 })
  name: string;

  @Column("varchar", {
    name: "short_name",
    nullable: true,
    comment: "[略称] ",
    length: 25,
  })
  shortName: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "[コード] ",
    length: 5,
  })
  code: string | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("int", {
    name: "show_at",
    nullable: true,
    comment: "[並び順] ",
    unsigned: true,
  })
  showAt: number | null;

  @Column("datetime", {
    name: "created",
    nullable: true,
    comment: "[作成日時] ",
  })
  created: Date | null;

  @Column("int", {
    name: "created_user_id",
    nullable: true,
    comment: "[作成者ユーザid] ",
  })
  createdUserId: number | null;

  @Column("datetime", {
    name: "modified",
    nullable: true,
    comment: "[更新日時] ",
  })
  modified: Date | null;

  @Column("int", {
    name: "modified_user_id",
    nullable: true,
    comment: "[更新者ユーザid] ",
  })
  modifiedUserId: number | null;

  @Column("tinyint", {
    name: "delete_flg",
    nullable: true,
    comment: "[削除フラグ] ",
    width: 1,
    default: () => "'0'",
  })
  deleteFlg: boolean | null;
}
