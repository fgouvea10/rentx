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
    id,
    endDate,
    total,
  }: RentalProtocol.CreateRental): Promise<Rental> {
    const rental = this.repository.create({
      carId,
      expectedReturnDate,
      userId,
      id,
      endDate,
      total,
    });

    await this.repository.save(rental);

    return rental;
  }

  async list(): Promise<Rental[]> {
    const rentals = await this.repository.find();
    return rentals;
  }

  async findOpenRentalByCar(carId: string): Promise<Rental> {
    const rental = await this.repository.findOne({
      where: { carId, endDate: null },
    });
    return rental;
  }

  async findOpenRentalByUser(userId: string): Promise<Rental> {
    const rental = await this.repository.findOne({
      where: { userId, endDate: null },
    });
    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne(id);
    return rental;
  }

  async findRentalsByUserId(userId: string): Promise<Rental[]> {
    const rentals = await this.repository.find({
      where: { userId },
      relations: ["car"],
    });

    return rentals;
  }
}
