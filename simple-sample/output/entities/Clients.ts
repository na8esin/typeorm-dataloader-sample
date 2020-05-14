import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients", { schema: "demo" })
export class Clients {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "client_key",
    nullable: true,
    comment: "[クライアントキー] ",
    length: 20,
  })
  clientKey: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "[会社名] ",
    length: 50,
  })
  name: string | null;

  @Column("varchar", {
    name: "zip_code",
    nullable: true,
    comment: "[郵便番号] ",
    length: 8,
  })
  zipCode: string | null;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "[住所] ",
    length: 100,
  })
  address: string | null;

  @Column("varchar", {
    name: "google_map_url",
    nullable: true,
    comment: "[地図url] google map",
    length: 1500,
  })
  googleMapUrl: string | null;

  @Column("varchar", {
    name: "tel",
    nullable: true,
    comment: "[電話番号] ",
    length: 15,
  })
  tel: string | null;

  @Column("varchar", {
    name: "mail",
    nullable: true,
    comment: "[メールアドレス] ",
    length: 200,
  })
  mail: string | null;

  @Column("varchar", {
    name: "homepage_url",
    nullable: true,
    comment: "[ホームページurl] ",
    length: 100,
  })
  homepageUrl: string | null;

  @Column("varchar", {
    name: "color",
    nullable: true,
    comment: "[クライアントカラー] 会社カラー（アイコンなどの色に使用）",
    length: 8,
  })
  color: string | null;

  @Column("varchar", { name: "label_color", nullable: true, length: 8 })
  labelColor: string | null;

  @Column("date", {
    name: "start_date",
    nullable: true,
    comment: "[利用開始日] ",
  })
  startDate: string | null;

  @Column("blob", {
    name: "logo",
    nullable: true,
    comment: "[ロゴイメージ] 新規",
  })
  logo: Buffer | null;

  @Column("varchar", {
    name: "db_conf_name",
    nullable: true,
    comment: "[データベース設定名] データベース接続設定名",
    length: 20,
  })
  dbConfName: string | null;

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
