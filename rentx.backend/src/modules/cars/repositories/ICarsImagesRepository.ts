import { CarImage } from "../infra/typeorm/entities/CarImage";

export interface ICarsImagesRepository {
  create(carId: string, imageName: string): Promise<CarImage>;
}
