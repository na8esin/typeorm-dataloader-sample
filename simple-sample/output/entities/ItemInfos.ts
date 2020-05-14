import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("item_infos", { schema: "demo" })
export class ItemInfos {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "item_code",
    nullable: true,
    comment: "[項目コード] ",
    length: 6,
  })
  itemCode: string | null;

  @Column("tinyint", {
    name: "seq",
    comment: "[シーケンス] item_codeと用いて一意にする",
    unsigned: true,
  })
  seq: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "[項目名] ",
    length: 20,
  })
  name: string | null;

  @Column("char", {
    name: "item_type",
    comment:
      "[項目タイプ] 000: ラベル 001: テキストボックス 002: エリアボックス 003: ラジオボタン 004: チェックボックス 005: セレクトボックス 006: ファイル 007: パスワード 999: 非表示(リンク先として使用)",
    length: 3,
  })
  itemType: string;

  @Column("varchar", {
    name: "table_alias",
    nullable: true,
    comment: "[テーブルエイリアス] ",
    length: 30,
  })
  tableAlias: string | null;

  @Column("varchar", {
    name: "table_field",
    nullable: true,
    comment: "[テーブルフィールド名] ",
    length: 50,
  })
  tableField: string | null;

  @Column("tinyint", {
    name: "require_flg",
    comment: "[必須フラグ] 0: 未必須 1: 必須",
    unsigned: true,
  })
  requireFlg: number;

  @Column("varchar", {
    name: "placeholder",
    nullable: true,
    comment: "[プレイスホルダー] テキストボックスの場合のみ設定",
    length: 50,
  })
  placeholder: string | null;

  @Column("varchar", {
    name: "format",
    nullable: true,
    comment: "[フォーマット] ",
    length: 200,
  })
  format: string | null;

  @Column("smallint", {
    name: "max_length",
    nullable: true,
    comment: "[文字数] ",
    unsigned: true,
  })
  maxLength: number | null;

  @Column("varchar", {
    name: "form_class",
    nullable: true,
    comment: "[フォームクラス] ",
    length: 150,
  })
  formClass: string | null;

  @Column("varchar", {
    name: "form_style",
    nullable: true,
    comment: "[フォームスタイル] ",
    length: 150,
  })
  formStyle: string | null;

  @Column("text", {
    name: "label_before",
    nullable: true,
    comment: "[前ラベル] ",
  })
  labelBefore: string | null;

  @Column("text", {
    name: "label_after",
    nullable: true,
    comment: "[後ラベル] ",
  })
  labelAfter: string | null;

  @Column("char", {
    name: "classification_code",
    nullable: true,
    comment: "[区分コード] セレクトボックス、チェックボックスの場合のみ設定",
    length: 5,
  })
  classificationCode: string | null;

  @Column("tinyint", {
    name: "use_csv",
    comment: "[csv使用カラム] csvインポートの対象とするフラグ",
    unsigned: true,
  })
  useCsv: number;

  @Column("smallint", { name: "show_at", comment: "[並び順] ", unsigned: true })
  showAt: number;

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
