import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cars_image")
export class CarImage {
  @PrimaryColumn()
  id: string;

  @Column()
  carId: string;

  @Column()
  imageName: string;

  @CreateDateColumn()
  createdAt: Date;
}
