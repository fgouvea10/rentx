import { inject, injectable } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface CreateRentalRequest {
  userId: string;
  carId: string;
  expectedReturnDate: Date;
}

@injectable()
export class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,

    @inject("DayJSDateProvider")
    private dateProvider: IDateProvider,

    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    userId,
    carId,
    expectedReturnDate,
  }: CreateRentalRequest): Promise<Rental> {
    const minHour = 24;

    const isCarUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      carId
    );

    if (isCarUnavailable)
      throw new AppError("Car is not available", 400, "bad.request");

    // const hasRentalOpenToUser =
    //   await this.rentalsRepository.findOpenRentalByUser(userId);

    // if (hasRentalOpenToUser)
    //   throw new AppError(
    //     "User already has a rental in progress",
    //     400,
    //     "bad.request"
    //   );

    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expectedReturnDate
    );

    if (compare < minHour)
      throw new AppError("Invalid return time", 400, "bad.request");

    const rental = await this.rentalsRepository.create({
      userId,
      carId,
      expectedReturnDate,
    });

    await this.carsRepository.updateAvailable(carId, false);

    return rental;
  }
}
