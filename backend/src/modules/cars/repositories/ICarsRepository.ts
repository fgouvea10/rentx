import { Car } from "../protocols/cars";
import { Car as CarEntity } from "../infra/typeorm/entities/Car";

export interface ICarsRepository {
  create(data: Car.Create): Promise<CarEntity>;
  findByLicensePlate(licensePlate: string): Promise<CarEntity>;
  findAvailable(
    brand?: string,
    categoryId?: string,
    name?: string
  ): Promise<CarEntity[]>;
  findById(id: string): Promise<CarEntity>;
}
