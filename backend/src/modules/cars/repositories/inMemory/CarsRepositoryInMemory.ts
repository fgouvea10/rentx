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
    id,
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
      id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<CarEntity> {
    return this.cars.find((car) => car.licensePlate === licensePlate);
  }

  async findAvailable(
    brand?: string,
    categoryId?: string,
    name?: string
  ): Promise<CarEntity[]> {
    return this.cars.filter((car) => {
      if (
        car.available === true &&
        (brand ? car.brand === brand : true) &&
        (name ? car.name === name : true) &&
        (categoryId ? car.categoryId === categoryId : true)
      ) {
        return car;
      }
      return null;
    });
  }

  async findById(id: string): Promise<CarEntity> {
    return this.cars.find((car) => car.id === id);
  }
}
