import { Car } from "@modules/cars/protocols/cars";
import { Car as CarEntity } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: CarEntity[] = [];

  async create({
    brand,
    categoryId,
    dailyRate,
    description,
    fineAmount,
    licensePlate,
    name,
  }: Car.Create): Promise<CarEntity> {
    const car = new CarEntity();

    Object.assign(car, {
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<CarEntity> {
    return this.cars.find((car) => car.licensePlate === licensePlate);
  }
}
