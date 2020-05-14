import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("fk_customer_changedusers_customer_id_customers_id", ["customerId"], {})
@Entity("customer_changedusers", { schema: "demo" })
export class CustomerChangedusers {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "customer_id",
    nullable: true,
    comment: "[顧客id] ",
    unsigned: true,
  })
  customerId: number | null;

  @Column("int", {
    name: "user_id",
    nullable: true,
    comment: "[ユーザid] ",
    unsigned: true,
  })
  userId: number | null;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;

  @ManyToOne(() => Customers, (customers) => customers.customerChangedusers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
