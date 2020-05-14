import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";
import { Divisions } from "./Divisions";

@Index("fk_routes_division_id_divisions_id", ["divisionId"], {})
@Entity("routes", { schema: "demo" })
export class Routes {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "name",
    comment: "[アポイント入手経路名] ",
    length: 64,
  })
  name: string;

  @Column("decimal", {
    name: "halve_rate",
    nullable: true,
    comment: "[折半率] anp計算で利用",
    precision: 6,
    scale: 5,
  })
  halveRate: string | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("int", {
    name: "division_id",
    comment: "[コールセンタid] ",
    unsigned: true,
  })
  divisionId: number;

  @Column("text", {
    name: "letter_text1",
    nullable: true,
    comment: "[問い合わせ先 (連絡先等)] レター印刷に用いる文言 (連絡先等)",
  })
  letterText1: string | null;

  @Column("text", {
    name: "letter_text2",
    nullable: true,
    comment: "[問い合わせ先 (連絡時間等)] レター印刷に用いる文言 (受付時間等)",
  })
  letterText2: string | null;

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

  @OneToMany(() => Customers, (customers) => customers.route)
  customers: Customers[];

  @ManyToOne(() => Divisions, (divisions) => divisions.routes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "division_id", referencedColumnName: "id" }])
  division: Divisions;
}
