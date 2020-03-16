import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export class ClientEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: "client_key", length: 20 })
  clientKey: string;

  @Column({ name: "db_conf_name", length: 20 })
  dbConfName: string;

  @Column()
  name: string;
}
