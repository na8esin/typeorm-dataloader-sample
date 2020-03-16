import {
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";
import { ExpertiseField } from "./expertise-field";

@Entity("expertise_field_users")
export class ExpertiseFieldUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user_id" })
  userId: number;

  // oneToManyのone側ってprimary keyが勝手に結合条件になるね。。。
  // ただPrimaryが二つある場合はjoincolumnが使えるっぽい
  @Column({ name: "expertise_field_id" })
  expertiseFieldId: number;

  @OneToMany(
    type => ExpertiseField,
    e => e.expertiseFieldUser,
    {
      eager: true
    }
  )
  @JoinColumn({ name: "expertise_field_id" })
  expertiseField: ExpertiseField[];
}
