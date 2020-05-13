import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("fk_products_insurer_id_insurers_id", ["insurerId"], {})
@Index(
  "fk_products_product_category_id_product_categories_id",
  ["productCategoryId"],
  {}
)
@Entity("products", { schema: "demo" })
export class ProductEntity {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id?: number;

  @Column("varchar", { name: "name", comment: "[商品名] ", length: 96 })
  name: string;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "[商品コード] ",
    length: 15,
  })
  code?: string | null;

  @Column("int", {
    name: "insurer_id",
    comment: "[保険会社id] ",
    unsigned: true,
  })
  insurerId: number;

  @Column("int", {
    name: "product_category_id",
    comment: "[保険種別id] ",
    unsigned: true,
  })
  productCategoryId: number;

  @Column("char", {
    name: "target_gender",
    nullable: true,
    comment: "[対象性別] ",
    length: 3,
    default: () => "'0'",
  })
  targetGender: string | null;

  @Column("tinyint", {
    name: "target_age_from",
    nullable: true,
    comment: "[対象年齢（from)] 新規 0～100",
    unsigned: true,
  })
  targetAgeFrom: number | null;

  @Column("tinyint", {
    name: "target_age_to",
    nullable: true,
    comment: "[対象年齢（to)] 新規 0～100",
    unsigned: true,
  })
  targetAgeTo: number | null;

  @Column("char", {
    name: "application_hidden",
    comment: "[契約情報商品選択非表示フラグ] 00:表示する 01:表示しない",
    length: 2,
  })
  applicationHidden: string;

  @Column("int", { name: "show_at", comment: "[並び順] ", unsigned: true })
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
