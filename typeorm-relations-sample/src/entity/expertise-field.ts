import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { ExpertiseFieldUser } from "./expertise-field-user";

@Entity("expertise_fields")
export class ExpertiseField {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: string;

  @ManyToOne(type => ExpertiseFieldUser, { eager: false })
  @JoinColumn({ name: "id" })
  expertiseFieldUser: ExpertiseFieldUser;
  // 結合条件がprimaryなら書かなくていいんじゃない？
}
