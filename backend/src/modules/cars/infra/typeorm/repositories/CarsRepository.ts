import { getRepository, Repository } from "typeorm";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Car } from "@modules/cars/protocols/cars";
import { Car as CarEntity } from "../entities/Car";

export class CarsRepository implements ICarsRepository {
  private repository: Repository<CarEntity>;

  constructor() {
    this.repository = getRepository(CarEntity);
  }

  async create({
    brand,
    categoryId,
    dailyRate,
    description,
    fineAmount,
    licensePlate,
    name,
    specifications,
    id,
  }: Car.Create): Promise<CarEntity> {
    const car = this.repository.create({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
      specifications,
      id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<CarEntity> {
    const car = await this.repository.findOne({ licensePlate });
    return car;
  }

  async findAvailable(
    brand?: string,
    categoryId?: string,
    name?: string
  ): Promise<CarEntity[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand });
    }

    if (name) {
      carsQuery.andWhere("c.name = :name", { name });
    }

    if (categoryId) {
      carsQuery.andWhere("c.categoryId = :categoryId", { categoryId });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }

  async findById(id: string): Promise<CarEntity> {
    const car = await this.repository.findOne(id);
    return car;
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        available,
      })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }
}
