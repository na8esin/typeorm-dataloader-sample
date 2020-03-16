import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("expertise_fields")
export class ExpertiseField {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: string;
}
