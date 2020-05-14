import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupUsers } from "./GroupUsers";
import { Routes } from "./Routes";

@Entity("divisions", { schema: "demo" })
export class Divisions {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[区分id] 自動採番",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "[代理店コード] 外部から来るコード (代理店のみ格納)",
    length: 5,
  })
  code: string | null;

  @Column("varchar", { name: "name", comment: "[所属名] ", length: 64 })
  name: string;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "[住所] ",
    length: 256,
  })
  address: string | null;

  @Column("varchar", {
    name: "tel",
    nullable: true,
    comment: "[電話番号] ",
    length: 20,
  })
  tel: string | null;

  @Column("char", {
    name: "type",
    comment:
      "[区分フラグ] 00: 削除不可能な特殊部署（管理者部） 01: 代理店 02: グループ化部署 03: 親エージェント 04: コールセンター",
    length: 2,
  })
  type: string;

  @Column("int", {
    name: "parent_id",
    nullable: true,
    comment: "[親エージェントid] ",
  })
  parentId: number | null;

  @Column("text", {
    name: "note",
    nullable: true,
    comment: "[備考(受付時間)] ",
  })
  note: string | null;

  @Column("int", { name: "show_at", comment: "[並び順] ", unsigned: true })
  showAt: number;

  @Column("datetime", { name: "created", comment: "[作成日時] 自動設定" })
  created: Date;

  @Column("int", {
    name: "created_user_id",
    comment: "[作成者ユーザid] 自動設定",
    unsigned: true,
  })
  createdUserId: number;

  @Column("datetime", { name: "modified", comment: "[更新日時] 自動設定" })
  modified: Date;

  @Column("int", {
    name: "modified_user_id",
    comment: "[更新者ユーザid] 自動設定",
    unsigned: true,
  })
  modifiedUserId: number;

  @Column("tinyint", {
    name: "delete_flg",
    comment: "[削除フラグ] 0: 通常 1: 削除",
    unsigned: true,
    default: () => "'0'",
  })
  deleteFlg: number;

  @OneToMany(() => GroupUsers, (groupUsers) => groupUsers.division)
  groupUsers: GroupUsers[];

  @OneToMany(() => Routes, (routes) => routes.division)
  routes: Routes[];
}
