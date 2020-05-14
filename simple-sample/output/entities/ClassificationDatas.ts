import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "table_name",
  ["tableName", "primaryId", "classificationCode", "value"],
  { unique: true }
)
@Entity("classification_datas", { schema: "demo" })
export class ClassificationDatas {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "table_name",
    nullable: true,
    comment: "[varchar] ",
    length: 50,
  })
  tableName: string | null;

  @Column("int", {
    name: "primary_id",
    comment: "[プライマリid] ",
    unsigned: true,
  })
  primaryId: number;

  @Column("char", {
    name: "classification_code",
    comment: "[区分コード] ",
    length: 5,
  })
  classificationCode: string;

  @Column("varchar", {
    name: "value",
    nullable: true,
    comment: "[値] ",
    length: 30,
  })
  value: string | null;

  @Column("varchar", { name: "table_field", nullable: true, length: 50 })
  tableField: string | null;
}
