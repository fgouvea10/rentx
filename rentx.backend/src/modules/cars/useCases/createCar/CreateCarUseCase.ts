import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface CreateCarRequest {
  name: string;
  description: string;
  dailyRate: number;
  licensePlate: string;
  fineAmount: number;
  brand: string;
  categoryId: string;
  image: string;
}

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    brand,
    categoryId,
    dailyRate,
    description,
    fineAmount,
    licensePlate,
    name,
    image,
  }: CreateCarRequest): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      licensePlate
    );

    if (carAlreadyExists) throw new AppError("Car already exists", 409, 'bad.request');

    const car = await this.carsRepository.create({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
      image,
    });

    return car;
  }
}
