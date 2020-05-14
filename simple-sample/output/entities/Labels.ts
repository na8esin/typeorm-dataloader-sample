import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("labels", { schema: "demo" })
export class Labels {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "func_code", comment: "機能コード", length: 5 })
  funcCode: string;

  @Column("varchar", { name: "label", length: 200 })
  label: string;

  @Column("smallint", {
    name: "seq",
    comment: "シーケンス番号",
    unsigned: true,
  })
  seq: number;

  @Column("datetime", { name: "created" })
  created: Date;

  @Column("int", { name: "created_user_id", unsigned: true })
  createdUserId: number;

  @Column("datetime", { name: "modified" })
  modified: Date;

  @Column("int", { name: "modified_user_id", unsigned: true })
  modifiedUserId: number;

  @Column("tinyint", { name: "delete_flg", unsigned: true })
  deleteFlg: number;
}
