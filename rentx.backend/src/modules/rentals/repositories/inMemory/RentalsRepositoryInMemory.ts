import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { RentalProtocol } from "@modules/rentals/protocols/rental";

import { IRentalsRepository } from "../IRentalsRepository";

export class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async create({
    carId,
    expectedReturnDate,
    userId,
  }: RentalProtocol.CreateRental): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      carId,
      expectedReturnDate,
      userId,
      startDate: new Date(),
    });

    this.rentals.push(rental);

    return rental;
  }

  async findOpenRentalByCar(carId: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.carId === carId && !rental.endDate
    );
  }

  async findOpenRentalByUser(userId: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.userId === userId && !rental.endDate
    );
  }

  async findById(id: string): Promise<Rental> {
    return this.rentals.find((rental) => rental.id === id);
  }

  async findRentalsByUserId(userId: string): Promise<Rental[]> {
    return this.rentals.filter((rental) => rental.userId === userId);
  }
}
