import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Divisions } from "./Divisions";
import { Users } from "./Users";

@Index("fk_group_users_division_id_divisions_id", ["divisionId"], {})
@Index("fk_group_users_user_id_users_id", ["userId"], {})
@Entity("group_users", { schema: "demo" })
export class GroupUsers {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "division_id", comment: "[区分id] ", unsigned: true })
  divisionId: number;

  @Column("int", { name: "user_id", comment: "[ユーザid] ", unsigned: true })
  userId: number;

  @Column("int", { name: "show_at", comment: "[並び順] ", unsigned: true })
  showAt: number;

  @ManyToOne(() => Divisions, (divisions) => divisions.groupUsers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "division_id", referencedColumnName: "id" }])
  division: Divisions;

  @ManyToOne(() => Users, (users) => users.groupUsers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
