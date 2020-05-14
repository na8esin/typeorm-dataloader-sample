import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("route_template_mails", { schema: "demo" })
export class RouteTemplateMails {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "[id] ",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "route_id",
    comment: "[アポイント入手経路id] ",
    unsigned: true,
  })
  routeId: number;

  @Column("int", {
    name: "template_mail_id",
    comment: "[テンプレートメールid] ",
    unsigned: true,
  })
  templateMailId: number;
}
