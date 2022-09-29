import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface ListAvailableCarsRequest {
  categoryId?: string;
  brand?: string;
  name?: string;
}

@injectable()
export class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    categoryId,
    brand,
    name,
  }: ListAvailableCarsRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      brand,
      categoryId,
      name
    );
    return cars;
  }
}
