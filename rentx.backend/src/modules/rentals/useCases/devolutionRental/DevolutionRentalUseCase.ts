import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface DevolutionRentalRequest {
  id: string;
  userId: string;
}

@injectable()
export class DevolutionRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,

    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("DayJSDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ id, userId }: DevolutionRentalRequest): Promise<Rental> {
    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.carId);
    const minDaily = 1;

    if (!rental) throw new AppError("Rental does not exists");

    const dateNow = this.dateProvider.dateNow();
    let daily = this.dateProvider.compareInDays(
      rental.startDate,
      this.dateProvider.dateNow()
    );

    if (daily <= 0) {
      daily = minDaily;
    }

    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expectedReturnDate
    );

    let total = 0;

    if (delay > 0) {
      const calculateFine = delay * car.fineAmount;
      total = calculateFine;
    }

    total += daily * car.dailyRate;

    rental.endDate = this.dateProvider.dateNow();
    rental.total = total;

    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}
