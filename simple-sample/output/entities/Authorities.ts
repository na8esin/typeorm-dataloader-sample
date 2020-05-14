import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Entity("authorities", { schema: "demo" })
export class Authorities {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("char", {
    name: "code",
    unique: true,
    comment:
      "[権限コード] 0010:コンサルタント 0011:コンサルタント兼マネージャ 0012:マネージャ 0020:特別マネージャ 0021:特別システムマネージャ 0110:アポインタ 0210:構成員契約閲覧者 0310:資料閲覧者 0910:管理者 0920:システム管理者 9999:スーパーバイザ",
    length: 4,
  })
  code: string;

  @Column("char", {
    name: "type",
    comment:
      "[権限タイプ] 00: 管理部 01: エージェント 03: 親エージェント 04: コールセンタ 99: スーパバイザ",
    length: 2,
  })
  type: string;

  @Column("varchar", { name: "name", comment: "[権限名] ", length: 25 })
  name: string;

  @Column("tinyint", {
    name: "refer_range_type",
    comment: "[データ参照範囲] 1: 自身 2: 自エージェント 3: 自社 9: 全て",
    unsigned: true,
  })
  referRangeType: number;

  @Column("tinyint", {
    name: "enabled",
    comment: "[無効有効フラグ] 0: 無効 1: 有効",
    unsigned: true,
    default: () => "'1'",
  })
  enabled: number;

  @Column("varchar", {
    name: "color",
    nullable: true,
    comment: "[色] spanで利用する色を指定",
    length: 8,
  })
  color: string | null;

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
}
