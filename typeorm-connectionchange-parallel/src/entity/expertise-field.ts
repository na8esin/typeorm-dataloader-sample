import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from "typeorm";
import { ExpertiseFieldUser } from "./expertise-field-user";

@Entity("expertise_fields")
export class ExpertiseField {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: string;

  @OneToMany(
    type => ExpertiseFieldUser,
    expertiseFieldUser => expertiseFieldUser.expertiseField,
    { eager: true }
  )
  @JoinColumn({ name: "id" })
  expertiseFieldUsers: ExpertiseFieldUser[];
}
