import { getRepository, Repository } from "typeorm";

import { RentalProtocol } from "@modules/rentals/protocols/rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async create({
    carId,
    expectedReturnDate,
    userId,
  }: RentalProtocol.CreateRental): Promise<Rental> {
    const rental = this.repository.create({
      carId,
      expectedReturnDate,
      userId,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findOpenRentalByCar(carId: string): Promise<Rental> {
    const rental = await this.repository.findOne({ carId });
    return rental;
  }

  async findOpenRentalByUser(userId: string): Promise<Rental> {
    const rental = await this.repository.findOne({ userId });
    return rental;
  }
}
