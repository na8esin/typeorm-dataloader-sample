import { Entity, PrimaryColumn, Column } from "typeorm";
import { ExpertiseField } from "./expertise-field";

@Entity("expertise_field_users")
export class ExpertiseFieldUser {
  //  @PrimaryGeneratedColumn() id: number;

  @PrimaryColumn({ name: "user_id" })
  id: number;

  // oneToManyのone側ってprimary keyが勝手に結合条件になるね。。。
  @Column({ name: "expertise_field_id" })
  expertiseFieldId: number;

  expertiseFields: ExpertiseField[];
}
