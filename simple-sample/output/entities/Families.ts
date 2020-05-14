import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("fk_families_customer_id_customers_id", ["customerId"], {})
@Entity("families", { schema: "demo" })
export class Families {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "customer_id", comment: "[顧客id] ", unsigned: true })
  customerId: number;

  @Column("varchar", {
    name: "lname",
    nullable: true,
    comment: "[姓名（姓）] ",
    length: 32,
  })
  lname: string | null;

  @Column("varchar", {
    name: "fname",
    nullable: true,
    comment: "[姓名（名）] ",
    length: 32,
  })
  fname: string | null;

  @Column("varchar", {
    name: "lname_kana",
    nullable: true,
    comment: "[姓名カナ（姓）] ",
    length: 32,
  })
  lnameKana: string | null;

  @Column("varchar", {
    name: "fname_kana",
    nullable: true,
    comment: "[姓名カナ（名）] ",
    length: 32,
  })
  fnameKana: string | null;

  @Column("char", {
    name: "gender",
    nullable: true,
    comment: "[性別] ",
    length: 2,
    default: () => "'00'",
  })
  gender: string | null;

  @Column("date", { name: "birthday", nullable: true, comment: "[生年月日] " })
  birthday: string | null;

  @Column("varbinary", {
    name: "enc_birthday",
    nullable: true,
    comment: "[生年月日（バイナリ）] ",
    length: 64,
  })
  encBirthday: Buffer | null;

  @Column("char", {
    name: "relation",
    nullable: true,
    comment: "[続柄] ",
    length: 2,
  })
  relation: string | null;

  @Column("varchar", {
    name: "job_name",
    nullable: true,
    comment: "[職業] ",
    length: 200,
  })
  jobName: string | null;

  @Column("varchar", {
    name: "job_type",
    nullable: true,
    comment: "[職種] ",
    length: 200,
  })
  jobType: string | null;

  @Column("char", {
    name: "smoking",
    nullable: true,
    comment: "[喫煙] ",
    length: 2,
    default: () => "'00'",
  })
  smoking: string | null;

  @Column("text", { name: "note", nullable: true, comment: "[備考] " })
  note: string | null;

  @Column("datetime", { name: "created", comment: "[作成日時] " })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] ",
    unsigned: true,
  })
  createdUserId: number;

  @Column("datetime", { name: "modified", comment: "[更新日時] " })
  modified: Date;

  @Column("int", {
    name: "modified_user_id",
    comment: "[更新者ユーザid] ",
    unsigned: true,
  })
  modifiedUserId: number;

  @Column("tinyint", {
    name: "delete_flg",
    comment: "[削除フラグ] ",
    unsigned: true,
    default: () => "'0'",
  })
  deleteFlg: number;

  @ManyToOne(() => Customers, (customers) => customers.families, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
