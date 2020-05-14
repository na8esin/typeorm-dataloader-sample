import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("letter_formats", { schema: "demo" })
export class LetterFormats {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "letter_id", comment: "[レターid] ", unsigned: true })
  letterId: number;

  @Column("varchar", {
    name: "item_code",
    nullable: true,
    comment: "[項目コード] ",
    length: 50,
  })
  itemCode: string | null;

  @Column("smallint", {
    name: "pos_x",
    nullable: true,
    comment: "[出力位置(x)] ",
  })
  posX: number | null;

  @Column("smallint", {
    name: "pos_y",
    nullable: true,
    comment: "[出力位置(y)] ",
  })
  posY: number | null;

  @Column("varchar", {
    name: "font",
    nullable: true,
    comment: "[フォント] ",
    length: 20,
  })
  font: string | null;

  @Column("smallint", { name: "size", nullable: true, comment: "[サイズ] " })
  size: number | null;

  @Column("varchar", {
    name: "color",
    nullable: true,
    comment: "[カラ―] ",
    length: 8,
  })
  color: string | null;

  @Column("tinyint", {
    name: "bold_flg",
    nullable: true,
    comment: "[太字フラグ] 0: 通常 1: 太字",
    width: 1,
  })
  boldFlg: boolean | null;

  @Column("tinyint", {
    name: "wrap_flg",
    nullable: true,
    comment: "[折り返しフラグ] 0: 折り返ししない 1: 折り返しする",
    width: 1,
  })
  wrapFlg: boolean | null;

  @Column("smallint", {
    name: "wrap_length",
    nullable: true,
    comment: "[折り返し文字数] ",
  })
  wrapLength: number | null;

  @Column("smallint", {
    name: "wrap_margin_y",
    nullable: true,
    comment: "[折り返しマージン] ",
  })
  wrapMarginY: number | null;

  @Column("tinyint", {
    name: "enabled",
    comment: "[無効有効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

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
