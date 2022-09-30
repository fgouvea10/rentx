import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

dayjs.extend(utc);

interface CreateRentalRequest {
  userId: string;
  carId: string;
  expectedReturnDate: Date;
}

export class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

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

    const expectedReturnDateFormat = dayjs(expectedReturnDate)
      .utc()
      .local()
      .format();

    const dateNow = dayjs().utc().local().format();
    const compare = dayjs(expectedReturnDateFormat).diff(dateNow, "hours");

    if (compare < minHour) throw new AppError('Invalid return date')

    const rental = await this.rentalsRepository.create({
      userId,
      carId,
      expectedReturnDate,
    });

    return rental;
  }
}
