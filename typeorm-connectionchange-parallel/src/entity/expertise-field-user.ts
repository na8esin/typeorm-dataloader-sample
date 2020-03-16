import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn
} from "typeorm";
import { ExpertiseField } from "./expertise-field";

@Entity("expertise_field_users")
export class ExpertiseFieldUser {
  @PrimaryColumn({ name: "user_id" })
  userId: number;

  @PrimaryColumn({ name: "expertise_field_id" })
  expertiseFieldId: number;

  @ManyToOne(type => ExpertiseField, { eager: false })
  @JoinColumn({ name: "expertise_field_id" })
  expertiseField: ExpertiseField[];
}
