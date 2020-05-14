import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./Products";

@Entity("insurers", { schema: "demo" })
export class Insurers {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "name", comment: "[保険会社名] ", length: 64 })
  name: string;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "[保険会社コード] 新規",
    length: 15,
  })
  code: string | null;

  @Column("varchar", {
    name: "intention_code",
    nullable: true,
    comment: "[識別番号] 意向把握情報：ご提案保険会社で識別番号を設定",
    length: 10,
  })
  intentionCode: string | null;

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

  @OneToMany(() => Products, (products) => products.insurer)
  products: Products[];
}
