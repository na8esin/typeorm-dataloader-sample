import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Applications } from "./Applications";
import { Products } from "./Products";

@Entity("product_categories", { schema: "demo" })
export class ProductCategories {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "name", comment: "[保険種別名] ", length: 96 })
  name: string;

  @Column("char", {
    name: "sphere",
    comment:
      "[分野] 01:第一分野（生命保険） 02:第二分野（損害保険） 03:第三分野（医療保険） 99:その他",
    length: 3,
    default: () => "'0'",
  })
  sphere: string;

  @Column("smallint", {
    name: "commission",
    comment: "[手数料率] 0～100",
    unsigned: true,
    default: () => "'0'",
  })
  commission: number;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

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

  @Column("int", { name: "w_id", nullable: true })
  wId: number | null;

  @Column("int", { name: "w_sphere", nullable: true })
  wSphere: number | null;

  @OneToMany(() => Applications, (applications) => applications.productCategory)
  applications: Applications[];

  @OneToMany(() => Products, (products) => products.productCategory)
  products: Products[];
}
