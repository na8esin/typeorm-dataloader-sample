import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status", ["status", "childStatus", "grandsonStatus"], { unique: true })
@Entity("statuses", { schema: "demo" })
export class Statuses {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("tinyint", {
    name: "type",
    comment:
      "[ステータスタイプ] 1: 面談ステータス 2: 子面談ステータス 3: 孫面談ステータス",
    unsigned: true,
  })
  type: number;

  @Column("char", { name: "status", comment: "[面談ステータス] ", length: 3 })
  status: string;

  @Column("char", {
    name: "child_status",
    nullable: true,
    comment: "[子面談ステータス] ",
    length: 3,
  })
  childStatus: string | null;

  @Column("char", {
    name: "grandson_status",
    nullable: true,
    comment: "[孫面談ステータス] ",
    length: 3,
  })
  grandsonStatus: string | null;

  @Column("varchar", { name: "name", comment: "[名前] ", length: 50 })
  name: string;

  @Column("varchar", {
    name: "style_icon",
    nullable: true,
    comment: "[スタイルアイコン] ",
    length: 20,
  })
  styleIcon: string | null;

  @Column("varchar", {
    name: "style_bgcolor",
    nullable: true,
    comment: "[スタイルカラー] ",
    length: 20,
  })
  styleBgcolor: string | null;

  @Column("varchar", {
    name: "img_icon",
    nullable: true,
    comment: "[イメージアイコン] ",
    length: 50,
  })
  imgIcon: string | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[無効有効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

  @Column("smallint", {
    name: "show_at",
    comment: "[並び順] 通常のステータス並び順",
    unsigned: true,
  })
  showAt: number;

  @Column("smallint", {
    name: "highest_show_at",
    nullable: true,
    comment: "[最高ステータス並び順] 最高ステータスの並び順",
    unsigned: true,
  })
  highestShowAt: number | null;

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
