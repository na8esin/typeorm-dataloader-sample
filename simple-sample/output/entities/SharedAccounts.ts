import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sharing_id", ["sharingId", "clientId", "userId"], { unique: true })
@Entity("shared_accounts", { schema: "demo" })
export class SharedAccounts {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "sharing_id",
    comment: "[統合アカウントid] ",
    unsigned: true,
  })
  sharingId: number;

  @Column("int", {
    name: "client_id",
    comment: "[クライアントid] ",
    unsigned: true,
  })
  clientId: number;

  @Column("int", { name: "user_id", comment: "[ユーザid] ", unsigned: true })
  userId: number;
}
