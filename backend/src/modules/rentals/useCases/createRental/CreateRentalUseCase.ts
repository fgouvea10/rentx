import dayjs from "dayjs";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface CreateRentalRequest {
  userId: string;
  carId: string;
  expectedReturnDate: Date;
}

export class CreateRentalUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository,
    private dateProvider: IDateProvider
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

    if (isCarUnavailable) throw new AppError("Car is not available");

    const hasRentalOpenToUser =
      await this.rentalsRepository.findOpenRentalByUser(userId);

    if (hasRentalOpenToUser)
      throw new AppError("User already has a rental in progress");

    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expectedReturnDate
    );

    if (compare < minHour) throw new AppError("Invalid return time");

    const rental = await this.rentalsRepository.create({
      userId,
      carId,
      expectedReturnDate,
    });

    return rental;
  }
}
