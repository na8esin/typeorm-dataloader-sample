import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("zips", { schema: "demo" })
export class Zips {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "[id] 自動採番" })
  id: number;

  @Column("varchar", {
    name: "zip_code",
    comment: "[郵便番号] ハイフンなし",
    length: 7,
  })
  zipCode: string;

  @Column("int", { name: "pref_code", comment: "[都道府県コード] " })
  prefCode: number;

  @Column("varchar", { name: "address", comment: "[住所] ", length: 128 })
  address: string;
}
