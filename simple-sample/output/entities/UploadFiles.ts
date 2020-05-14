import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("fk_upload_files_customer_id_customers_id", ["customerId"], {})
@Entity("upload_files", { schema: "demo" })
export class UploadFiles {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "customer_id", comment: "[顧客id] ", unsigned: true })
  customerId: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "[ファイル名] ",
    length: 64,
  })
  name: string | null;

  @Column("datetime", {
    name: "uploaded",
    nullable: true,
    comment: "[アップロード日時] ",
  })
  uploaded: Date | null;

  @Column("varchar", {
    name: "ext",
    nullable: true,
    comment: "[拡張子] ",
    length: 8,
  })
  ext: string | null;

  @Column("int", {
    name: "size",
    nullable: true,
    comment: "[ファイルサイズ] ",
    unsigned: true,
  })
  size: number | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

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

  @Column("varchar", {
    name: "file_name",
    comment: "[ファイル名] ",
    length: 255,
  })
  fileName: string;

  @ManyToOne(() => Customers, (customers) => customers.uploadFiles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
