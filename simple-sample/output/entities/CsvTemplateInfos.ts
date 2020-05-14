import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("csv_template_infos", { schema: "demo" })
export class CsvTemplateInfos {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "csv_template_id",
    comment: "[csv_template_id] csv_template_id",
    unsigned: true,
  })
  csvTemplateId: number;

  @Column("varchar", {
    name: "column_info",
    comment: "[カラム情報] 項目に使用するカラム",
    length: 255,
  })
  columnInfo: string;

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
